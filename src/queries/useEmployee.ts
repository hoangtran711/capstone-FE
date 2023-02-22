/* eslint-disable prettier/prettier */
import { toast } from 'react-toastify';
import { encryptData } from 'services/utils/crypt';
import http from 'services/utils/http';
export const useGetAllEmployee = () => {
    return async function () {
        try {
            const rs = await http.get(`v1/users`);
            return rs;
        } catch (error: any) {
            toast.error(error);
        }
    };
};
export const useGetDetailEmployee = () => {
    return async function (id: string) {
        try {
            const rs = await http.get(`v1/users/${id}`);
            return rs;
        } catch (error: any) {
            toast.error(error);
        }
    };
};
export const useGetDetailOfMe = () => {
    return async function () {
        try {
            const rs = await http.get(`v1/users/me`);
            return rs;
        } catch (error: any) {
            toast.error(error);
        }
    };
};
export const useAddStudentToProject = () => {
    return async function (student_id: string, project_id: string) {
        try {
            const rs = http.post(`v1/student/${student_id}/join-project`, {
                projectId: project_id,
            });
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
    return async function (id: string, geoLocation: any) {
        try {
            const geoLocationEncrypted = encryptData(geoLocation);
            const rs = http.post(`v1/student/me/attendance`, {
                projectId: id,
                geoLocation: geoLocationEncrypted,
            });
            return rs;
        } catch (err: any) {
            toast.error(err);
        }
    };
};
export const useGetCurrentSchedules = () => {
    return async function () {
        try {
            const rs = http.get(`v1/student/me/current-attendance/today`);
            return rs;
        } catch (err: any) {
            toast.error(err);
        }
    };
};
export const useGetHistoryAttendance = () => {
    return async function () {
        try {
            const rs = http.get(`v1/student/me/history`);
            return rs;
        } catch (err: any) {
            toast.error(err);
        }
    };
};
export const useDeleteStudent = () => {
    return async function (id: string, projectId: string) {
        try {
            const rs = http.delete(`v1/student/${id}/delete-user-project`, { data: { projectId: projectId } });
            return rs;
        } catch (err: any) {
            toast.error(err);
        }
    };
};