import { Center, Spinner, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react';
import React, { memo, FC, useEffect, useCallback } from 'react';
import { useAllUsers } from '../hooks/useAllUsers';
import { useSelectUser } from '../hooks/useSelectUser';
import { UserCard } from '../organisms/user/UserCard';
import { UserDetailModal } from '../organisms/user/UserDetailModal';

/* eslint-disable no-alert, promise/catch-or-return, promise/always-return, eslint-comments/disable-enable-pair, react-hooks/exhaustive-deps */
export const UserManagement: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();

  useEffect(() => getUsers(), []);

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen }); // カスタムフックの関数に引数（props）をオブジェクトで渡す;
    },
    [onSelectUser, onOpen] // 選択されたUserが変わるたびに計算
  );

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                id={user.id}
                imageUrl="https://images.unsplash.com/photo-1532592333381-a141e3f197c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
    </>
  );
});
