/* eslint-disable prettier/prettier */
import { toast } from 'react-toastify';
import http from 'services/utils/http';
export const useSignUp = () => {
    return async (email: string, password: string) => {
        try {
            const rs: any = await http.post(`/v1/users/create`, { email, password });
            return rs;
        } catch (err: any) {
            toast.error(err);
        }
    };
};
export interface ISingIn {
    email: string,
    password: string,
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
