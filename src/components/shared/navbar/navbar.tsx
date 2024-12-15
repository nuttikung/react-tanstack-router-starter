import { Link } from '@tanstack/react-router';

import ThemeSwitcher from '../theme-switcher';
import DesktopNavbar from './desktop-navbar';
import MobileNavbar from './mobile-navbar';

const Navbar = () => {
  return (
    <header className="px-2 sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl font-bold">Brand</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <DesktopNavbar />
          <MobileNavbar />

          <div className="flex items-center space-x-2">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
