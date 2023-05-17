import { useState, useCallback } from 'react';

import { User } from '../types/api/user';

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

// 洗濯したユーザー情報を特定しモーダルを表示するカスタムフック
export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);
    console.log(targetUser);
    setSelectedUser(targetUser ?? null); // If targetUser is undefined, set it to null
    onOpen();
  }, []);
  return { onSelectUser, selectedUser };
};
