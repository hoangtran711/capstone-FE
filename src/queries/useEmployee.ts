/* eslint-disable prettier/prettier */
import { toast } from "react-toastify";
import http from "services/utils/http";
export const useGetAllEmployee = () => {
    return async function () {
        try {
            const rs = await http.get(`v1/users`);
            return rs;
        } catch (error: any) {
            toast.error(error)
        }
    }
}