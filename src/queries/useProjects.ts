import http from 'services/utils/http';
import { toast } from 'react-toastify';
export interface IProject {
  projectName: string;
  projectDescription: string;
  startDate: string;
  endDate: string;
  learnDate: string[];
  attendanceAfterMinute: number;
  maxJoin: number;
  totalLesson: number;
}
export const useCreateProject = () => {
  return async function (payload: IProject) {
    try {
      const rs = await http.post(`v1/projects/me`, payload);
      return rs;
    } catch (error: any) {
      toast.error(error);
    }
  };
};
export const useGetAllProjects = () => {
  return async function () {
    try {
      const rs = http.get(`v1/projects/me`);
      return rs;
    } catch (err: any) {
      toast.error(err);
    }
  };
};