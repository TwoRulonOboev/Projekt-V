import * as React from 'react';
import { CssVarsProvider, CssBaseline, Box, Typography } from '@mui/joy';
import { Login } from './Component/Login'; // Импортируем компонент Login

export const MainPage: React.FC = () => {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'background.level1',
        }}
      >
        <Login /> {/* Включаем компонент Login */}
      </Box>
    </CssVarsProvider>
  );
};

export default MainPage;