import { useQuery } from 'react-query';
import http from 'services/utils/http';

export const useGetRequestCurrentUser = () => {
  return useQuery(
    ['useGetRequest.name'],
    async () => {
      const resp = await http.get('/v1/requests/me');
      return resp;
    },
    { refetchInterval: 1000 },
  ) as any;
};

export const useCreateRequest = () => {
  return async (createDto: any) => {
    const formData = new FormData();
    formData.append('projectId', createDto.projectId);
    formData.append('type', createDto.type);
    if (createDto.reason) {
      formData.append('reason', createDto.reason);
    }
    if (createDto.proof) {
      formData.append('proof', createDto.proof);
    }
    if (createDto.date) {
      formData.append('date', createDto.date.toISOString());
    }
    const response = await http.post('/v1/requests/me', formData, {
      headers: { 'content-type': 'multipart/form-data' },
    });
    return response;
  };
};

export const useUpdateStatusRequest = () => {
  return async (updateDto: any) => {
    const response = await http.put('/v1/requests/me', updateDto);
    return response;
  };
};
