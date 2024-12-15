import { Menu } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { activeLinkClasses } from './constant';

import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerTrigger, DrawerTitle } from '@/components/ui/drawer';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerVerticalStyle,
} from '@/components/ui/navigation-menu';

const MobileNavbar = () => {
  return (
    <div className="flex md:hidden">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="ghost">
            <Menu />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="max-h-[50svh]" aria-describedby="menu-navigation">
          <div className="mx-auto w-full max-w-sm" />
          <VisuallyHidden>
            <DrawerTitle>Menu Navigation</DrawerTitle>
          </VisuallyHidden>
          <div className="w-full overflow-auto p-3">
            <NavigationMenu orientation="vertical">
              <NavigationMenuList className="flex-col items-start space-x-0">
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerVerticalStyle()} asChild>
                    <Link to="/" className={activeLinkClasses} activeOptions={{ exact: true }}>
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerVerticalStyle()} asChild>
                    <Link to="/docs" className={activeLinkClasses} activeOptions={{ exact: true }}>
                      Docs
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerVerticalStyle()} asChild>
                    <Link to="/blog" className={activeLinkClasses} activeOptions={{ exact: true }}>
                      Blog
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerVerticalStyle()} asChild>
                    <Link
                      to="/components"
                      className={activeLinkClasses}
                      activeOptions={{ exact: true }}
                    >
                      Components
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerVerticalStyle()} asChild>
                    <Link
                      to="/components"
                      className={activeLinkClasses}
                      activeOptions={{ exact: true }}
                    >
                      Components
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerVerticalStyle()} asChild>
                    <Link
                      to="/components"
                      className={activeLinkClasses}
                      activeOptions={{ exact: true }}
                    >
                      Components
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerVerticalStyle()} asChild>
                    <Link
                      to="/components"
                      className={activeLinkClasses}
                      activeOptions={{ exact: true }}
                    >
                      Components
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerVerticalStyle()} asChild>
                    <Link
                      to="/components"
                      className={activeLinkClasses}
                      activeOptions={{ exact: true }}
                    >
                      Components
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerVerticalStyle()} asChild>
                    <Link
                      to="/components"
                      className={activeLinkClasses}
                      activeOptions={{ exact: true }}
                    >
                      Components
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerVerticalStyle()} asChild>
                    <Link
                      to="/components"
                      className={activeLinkClasses}
                      activeOptions={{ exact: true }}
                    >
                      Components
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerVerticalStyle()} asChild>
                    <Link
                      to="/components"
                      className={activeLinkClasses}
                      activeOptions={{ exact: true }}
                    >
                      Components
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileNavbar;
