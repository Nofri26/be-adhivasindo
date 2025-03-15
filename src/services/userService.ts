import {UserRepository} from '../repositories/userRepository';
import {UserModel} from '../models/userModel';

export const userService = {
    show: async (id: string) => {
        const user = await UserRepository.findById(id);
        if (!user) {
            throw new Error('User not found');
        }

        return user;
    },
    update: async (id: string, userData: UserModel) => {
        const user = await UserRepository.findById(id);
        if (!user) {
            throw new Error('User not found');
        }

        return await UserRepository.updateUser(id, userData);
    },
    delete: async (id: string) => {
        const user = await UserRepository.findById(id);
        if (!user) {
            throw new Error('User not found');
        }

        return await UserRepository.deleteUser(id);
    },
};
