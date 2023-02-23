/* eslint-disable prettier/prettier */
import { toast } from 'react-toastify';
import http from 'services/utils/http';
export const useGetALlTaskOfStudent = () => {
    return async () => {
        try {
            const rs = await http.get('/v1/tasks/student/today');
            return rs;
        } catch (error: any) {
            if (error) {
                toast.error(error);
            }
        }
    };
};
export const useGetALlTaskOfTeacher = () => {
    return async () => {
        try {
            const rs = await http.get('/v1/tasks/teacher/status');
            return rs;
        } catch (error: any) {
            if (error) {
                toast.error(error);
            }
        }
    };
};

export const useCreateTask = () => {
    return async (payload: any) => {
        try {
            const rs = await http.post('/v1/tasks/create', payload, { headers: { 'content-type': 'multipart/form-data' } });
            return rs;
        } catch (error: any) {
            if (error) {
                toast.error(error);
            }
        }
    };
};
export const useGetAllTaskStatusByProject = () => {
    return async (id: any) => {
        try {
            const rs = await http.get(`/v1/tasks/${id}/status`);
            return rs;
        } catch (error: any) {
            if (error) {
                toast.error(error);
            }
        }
    };
};
export const useGetALlTaskOfStudentToday = () => {
    return async () => {
        try {
            const rs = await http.get(`/v1/tasks/student/today`);
            return rs;
        } catch (error: any) {
            if (error) {
                toast.error(error);
            }
        }
    };
};
export const useSubmitTask = () => {
    return async (payload: any) => {
        try {
            const rs = await http.post(`/v1/tasks/submit`, payload, { headers: { 'content-type': 'multipart/form-data' } });
            return rs;
        } catch (error: any) {
            if (error) {
                toast.error(error);
            }
        }
    };
};