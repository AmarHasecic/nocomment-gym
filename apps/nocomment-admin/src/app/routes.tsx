import { Layout, theme } from 'antd';
import { Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { TopBar } from './components/top-bar';
import { Home } from './pages/home';

const AppLayout = styled(Layout)`
  && {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
`;

const StyledTopBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  flex-shrink: 0;
`;

const Main = styled(Layout.Content)`
  && {
    flex: 1;
    min-width: 0;
    padding: 32px;
    margin: 0;
  }
`;

type AppRoutesProps = {
  mode: 'light' | 'dark';
  toggleMode: () => void;
};

export function AppRoutes({ mode, toggleMode }: AppRoutesProps) {
  const { token } = theme.useToken();

  return (
    <AppLayout style={{ background: token.colorBgLayout }}>
      <StyledTopBar>
        <TopBar mode={mode} toggleMode={toggleMode} />
      </StyledTopBar>

      <Main style={{ background: token.colorBgLayout }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Main>
    </AppLayout>
  );
}