import { useQuery } from 'react-query';
import http from 'services/utils/http';

export const useGetRequestTeacher = () => {
  return useQuery(['useGetRequest.name'], async () => {
    const resp = await http.get('/v1/requests/me');
    return resp;
  }) as any;
};
