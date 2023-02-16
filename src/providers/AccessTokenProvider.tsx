import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from 'reducer/account/account.selector';
import { setAccessToken } from 'services/utils/http';

export const AccessTokenProvider = ({ children }: any) => {
  const token = useSelector(selectToken);
  useEffect(() => {
    setAccessToken(token);
    console.log('token', token);
  }, [token]);
  return children;
};
