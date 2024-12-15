import { Moon, Sun } from 'lucide-react';

import { useTheme } from './theme-provider';

import { Button } from '@/components/ui/button';

const ThemeSwitcher = () => {
  const theme = useTheme();

  return (
    <Button variant="outline" size="icon" className="rounded-full" onClick={theme.toggleTheme}>
      <Sun className="hidden [html.dark_&]:block" />
      <Moon className="hidden [html.light_&]:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeSwitcher;
