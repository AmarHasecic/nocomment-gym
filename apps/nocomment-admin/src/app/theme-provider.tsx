import { useEffect, useState, type ReactNode } from 'react';
import { ConfigProvider, theme as antdTheme } from 'antd';
import { ThemeProvider } from 'styled-components';

export type Mode = 'light' | 'dark';

export function ThemeProviderApp({
  children,
}: {
  children: (mode: Mode, toggleMode: () => void) => ReactNode;
}) {
  const getBrowserMode = (): Mode =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';

  const [mode, setMode] = useState<Mode>(getBrowserMode);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (event: MediaQueryListEvent) => {
      setMode(event.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const toggleMode = () => {
    setMode((current) => (current === 'light' ? 'dark' : 'light'));
  };

  const algorithm =
    mode === 'dark'
      ? antdTheme.darkAlgorithm
      : antdTheme.defaultAlgorithm;

  return (
    <ConfigProvider
      theme={{
        algorithm,
        token: {
          colorPrimary: '#1677ff',
          borderRadius: 8,
        },
      }}
    >
      <ThemeProvider theme={{ mode }}>
        {children(mode, toggleMode)}
      </ThemeProvider>
    </ConfigProvider>
  );
}