import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from 'react';
import { User } from '../types/api/user';

export type LoginUserContextType = {
  loginUser: User | null;
  setLoginUser: Dispatch<SetStateAction<User | null>>;
};

export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType);

/* eslint-disable react/jsx-no-constructed-context-values, eslint-comments/disable-enable-pair */
export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<User | null>(null);

  const value = useMemo(() => ({ loginUser, setLoginUser }), [loginUser, setLoginUser]);

  // モーダルのuser情報表示が遅いため、contextを分けるかmemo化したほうがいいと思ったが関係なかった。。
  return <LoginUserContext.Provider value={value}>{children}</LoginUserContext.Provider>;
};
