import { memo, FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { Login } from '../components/pages/Login';

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
    </Routes>
  );
});
