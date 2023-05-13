import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, Button } from '@chakra-ui/react';
import React, { memo, FC } from 'react';

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
};

export const MenuDrawer: FC<Props> = memo((props) => {
  const { onClose, isOpen, onClickHome, onClickSetting, onClickUserManagement } = props;
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%" onClick={onClickHome}>
              TOP
            </Button>
            <Button w="100%" onClick={onClickUserManagement}>
              User List
            </Button>
            <Button w="100%" onClick={onClickSetting}>
              Settings
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
