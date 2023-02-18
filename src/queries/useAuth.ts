/* eslint-disable prettier/prettier */
import { toast } from 'react-toastify';
import http from 'services/utils/http';

export interface ISingIn {
    username: string;
    password: string;
}
export interface ISingUp {
    email: string;
    password: string;
    username: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address: string;
    dateOfBirth: string;
}
export const useSignUp = () => {
    return async (payload: ISingUp) => {
        try {
            const rs: any = await http.post(`/v1/auth/register`, payload);
            return rs;
        } catch (err: any) {
            toast.error(err);
        }
    };
};
export const useSignIn = () => {
    return async (payload: ISingIn) => {
        try {
            const rs: any = await http.post(`/v1/auth/login`, payload);
            return rs;
        } catch (err: any) {
            toast.error(err);
        }
    };
};
