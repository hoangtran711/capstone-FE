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
export const useGetDetailEmployee = () => {
    return async function (id: string) {
        try {
            const rs = await http.get(`v1/users/${id}`);
            return rs;
        } catch (error: any) {
            toast.error(error)
        }
    }
}
export const useGetDetailOfMe = () => {
    return async function () {
        try {
            const rs = await http.get(`v1/users/me`);
            return rs;
        } catch (error: any) {
            toast.error(error)
        }
    }
}
export const useAddStudentToProject = () => {
    return async function (student_id: string, project_id: string) {
        try {
            const rs = http.post(`v1/student/${student_id}/join-project`, { projectId: project_id });
            return rs;
        } catch (err: any) {
            toast.error(err);
        }
    };
};
export const useGetSchedules = () => {
    return async function () {
        try {
            const rs = http.get(`v1/student/me/schedules`);
            return rs;
        } catch (err: any) {
            toast.error(err);
        }
    };
};
export const useAttendanceMe = () => {
    return async function (id: string) {
        try {
            const rs = http.post(`v1/student/me/attendance`, { projectId: id });
            return rs;
        } catch (err: any) {
            toast.error(err);
        }
    };
};