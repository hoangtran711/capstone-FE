/* eslint-disable prettier/prettier */
import { IDataInputRegister } from 'modules/Authenticate/interfaces/IDataInputRegister';
import { toast } from 'react-toastify';
import http from 'services/utils/http';

export interface ISingIn {
    username: string;
    password: string;
}


  

export const useSignUp = () => {
    return async (payload: IDataInputRegister) => {
        const formData = new FormData();
        formData.append('email', payload.email)
        formData.append('username', payload.username)
        formData.append('password', payload.password)
        formData.append('firstName', payload.firstName)
        formData.append('dataOfBirth', payload.dateOfBirth.toISOString())
        formData.append('phoneNumber', payload.phoneNumber)
        formData.append('address', payload.address)
        if(payload.avatar) {
            formData.append('avatar', payload.avatar)
        }
        formData.append('studentId', payload.studentId)
        formData.append('major', payload.major)

        const rs: any = await http.post(`/v1/auth/register`, payload, {headers: {'content-type': 'multipart/form-data'}});
        return rs;
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
