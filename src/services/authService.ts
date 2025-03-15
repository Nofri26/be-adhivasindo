import {UserRepository} from '../repositories/userRepository';
import {UserModel} from '../models/userModel';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const AuthService = {
    register: async (userData: UserModel) => {
        const existingUser = await UserRepository.findUserByEmail(userData.email);
        if (existingUser) {
            throw new Error('Email already exists');
        }
        const handlePassword = await bcrypt.hash(userData.password, 12);
        const user = new UserModel(userData.name, userData.email, handlePassword, null);
        return await UserRepository.createUser(user);
    },
    login: async (email: string, password: string) => {
        let user = await UserRepository.findUserByEmail(email);
        if (!user) {
            throw new Error('User not found');
        }
        const handlePassword = await bcrypt.compare(password, user.password);
        if (!handlePassword) {
            throw new Error('Invalid credentials');
        }
        const token = jwt.sign({userId: user.id}, process.env.SECRET_KEY || 'default_secret', {expiresIn: '1h'});

        user = await UserRepository.updateUserToken(user.id, token);

        return {
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
        };
    },
    logout: async (userId: string) => {
        const user = await UserRepository.findUserByEmail(userId);
        if (!user) {
            throw new Error('You are already logged out');
        }

        await UserRepository.updateUserToken(userId, null);
        return {message: 'Logged out successfully'};
    },
};
