import { AppRoutes } from './routes';
import { ThemeProviderApp } from './theme-provider';

export function App() {
  return (
    <ThemeProviderApp>
      {(mode, toggleMode) => (
        <AppRoutes mode={mode} toggleMode={toggleMode} />
      )}
    </ThemeProviderApp>
  );
}

export default App;