import { Button } from '@chakra-ui/react';
import React, { memo, FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  boolean?: boolean;
  onClick: () => void;
};

export const PrimayButton: FC<Props> = memo((props) => {
  const { children, onClick, disabled = false, loading = false } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      isDisabled={disabled || loading}
      isLoading={loading}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
