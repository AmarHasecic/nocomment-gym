import { Layout, Menu, Button, theme } from 'antd';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../assets/logo.png';

const { Header } = Layout;

const StyledHeader = styled(Header)`
  && {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 0 20px;
    height: 64px;
    min-height: 64px;
    line-height: normal;
    box-sizing: border-box;
  }
`;

const Logo = styled.img`
  display: block;
  width: 300px;
  height: 100px;
  max-width: 35vw;
  object-fit: contain;
  flex-shrink: 0;

  @media (max-width: 600px) {
    width: 300px;
    max-width: 35vw;
    height: 100px;
  }
`;

const Navigation = styled(Menu)`
  && {
    flex: 1;
    min-width: 0;
    border-bottom: none;
  }

  .ant-menu-item {
    height: 64px;
    line-height: 64px;
  }
`;

type TopBarProps = {
  mode: 'light' | 'dark';
  toggleMode: () => void;
};

export function TopBar({ mode, toggleMode }: TopBarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = theme.useToken();

  return (
    <StyledHeader
      style={{
        background: token.colorBgContainer,
        borderBottomColor: token.colorBorderSecondary,
      }}
    >
      <Logo src={logo} alt="NoComment" />

      <Navigation
        mode="horizontal"
        selectedKeys={[location.pathname]}
        onClick={({ key }) => navigate(key)}
        items={[]}
        style={{
          background: token.colorBgContainer,
          color: token.colorText,
        }}
      />

      <Button
        type="text"
        shape="circle"
        icon={mode === 'dark' ? <SunOutlined /> : <MoonOutlined />}
        onClick={toggleMode}
        aria-label={
          mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
        }
        style={{
          color: token.colorText,
          fontSize: 18,
        }}
      />
    </StyledHeader>
  );
}
