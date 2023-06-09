import axios from 'axios';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { User } from '../types/api/user';
import { useLoginUser } from './useLoginUser';
import { useMessage } from './useMessage';

// Login機能・loading表示のカスタムフック
/* eslint-disable no-alert, promise/catch-or-return, promise/always-return, eslint-comments/disable-enable-pair */
export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            setLoginUser(res.data);
            showMessage({ title: 'Success login', status: 'success' });
            navigate('/home');
          }
        })
        .catch(() => {
          showMessage({ title: 'User not found', status: 'warning' });
          setLoading(false);
        });
    },
    [navigate, showMessage, setLoginUser]
  );
  return { login, loading, setLoginUser };
};
