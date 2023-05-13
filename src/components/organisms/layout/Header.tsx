import { Box, Flex, Heading, Link, useDisclosure } from '@chakra-ui/react';

import React, { memo, FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuIconButton } from '../../atoms/atoms/MenuIconButton';
import { MenuDrawer } from '../../molecules/MenuDrawer';

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const onClickHome = useCallback(() => navigate('/home'), [navigate]);
  const onClickUserManagement = useCallback(() => navigate('/home/user_management'), [navigate]);
  const onClickSetting = useCallback(() => navigate('/home/setting'), [navigate]);

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: 'pointer' }} onClick={onClickHome}>
          <Heading as="h1" fontSize={{ base: 'md', md: 'lg' }}>
            User Admin
          </Heading>
        </Flex>
        <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: 'none', md: 'flex' }}>
          <Box pr={4}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link onClick={onClickUserManagement}>User List</Link>
          </Box>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link onClick={onClickSetting}>Settings</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickSetting={onClickSetting}
        onClickUserManagement={onClickUserManagement}
      />
    </>
  );
});
