import { Link } from '@tanstack/react-router';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '../../ui/navigation-menu';
import { activeLinkClasses } from './constant';

const DesktopNavbar = () => {
  return (
    <>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
              <Link to="/" className={activeLinkClasses} activeOptions={{ exact: true }}>
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
              <Link to="/docs" className={activeLinkClasses} activeOptions={{ exact: true }}>
                Docs
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
              <Link to="/blog" className={activeLinkClasses} activeOptions={{ exact: true }}>
                Blog
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
              <Link to="/components" className={activeLinkClasses} activeOptions={{ exact: true }}>
                Components
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default DesktopNavbar;
