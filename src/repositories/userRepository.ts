import {PrismaClient} from '@prisma/client';
import {UserModel} from '../models/userModel';

const prisma = new PrismaClient();

export const UserRepository = {
    findById: async (id: string) => {
        return prisma.users.findUnique({
            where: {id},
        });
    },
    findUserByEmail: async (email: string) => {
        return prisma.users.findUnique({
            where: {email},
        });
    },
    createUser: async (userData: UserModel) => {
        return prisma.users.create({
            data: userData,
        });
    },
    updateUserToken: async (id: string, token: string | null) => {
        return prisma.users.update({
            where: {id},
            data: {token},
        });
    },
    updateUser: async (id: string, userData: UserModel) => {
        return prisma.users.update({
            where: {id},
            data: userData,
        });
    },
    deleteUser: async (id: string) => {
        return prisma.users.delete({
            where: {id},
        });
    },
};
