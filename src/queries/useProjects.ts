import http from 'services/utils/http';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
export interface IProject {
  projectName: string;
  projectDescription: string;
  startDate: string;
  endDate: string;
  learnDate: string[];
  attendanceAfterMinute: number;
  maxJoin: number;
  totalLesson: number;
  joined: number;
  _id: string;
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
      const rs = http.get(`v1/projects`);
      return rs;
    } catch (err: any) {
      toast.error(err);
    }
  };
};

export const useGetDetailProject = (projectId: string) => {
  return useQuery(
    ['useGetDetailProject.name'],
    async () => {
      const response = await http.get(`v1/projects/detail/${projectId}`);
      return response;
    },
    { enabled: !!projectId, refetchInterval: 1000 },
  );
};

export const useGetAllProjectsOfTeacher = () => {
  return async function () {
    try {
      const rs = http.get(`v1/projects/me`);
      return rs;
    } catch (err: any) {
      toast.error(err);
    }
  };
};

export const useGetAllProjectsAdmin = () => {
  return async function () {
    try {
      const rs = http.get(`v1/projects`);
      return rs;
    } catch (err: any) {
      toast.error(err);
    }
  };
};

export const useGetProjectUserJoined = () => {
  return useQuery(['useGetProjectUserJoined.name'], async () => {
    const response = await http.get('/v1/projects/student/me');
    return response;
  }) as any;
};
