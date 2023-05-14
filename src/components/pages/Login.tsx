import { Box, Divider, Flex, Heading, Input, Stack } from '@chakra-ui/react';
import React, { memo, useState, FC, ChangeEvent } from 'react';
import { PrimayButton } from '../atoms/button/PrimaryButton';
import { useAuth } from '../hooks/useAuth';

export const Login: FC = memo(() => {
  const { login, loading } = useAuth();
  const [userId, setUserId] = useState('');
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);

  const onClickLogin = () => login(userId);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          User Admin App
        </Heading>
        <Divider my={4} />
        <Stack spacing={8} px={10}>
          <Input placeholder="User ID" value={userId} onChange={onChangeUserId} />
          <PrimayButton disabled={userId === ''} loading={loading} onClick={onClickLogin}>
            Login
          </PrimayButton>
        </Stack>
      </Box>
    </Flex>
  );
});
