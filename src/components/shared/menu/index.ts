import { Item as InternalMenuItem } from '@/components/shared/menu/menu-item';
import { Title as InternalMenuTitle } from '@/components/shared/menu/menu-title';
import { ItemGroup as InternalMenuItemGroup } from '@/components/shared/menu/menu-item-group';
import { Wrapper as InternalMenuWrapper } from '@/components/shared/menu/menu-wrapper';

type TInternalMenu = typeof InternalMenuWrapper;

type TMenu = TInternalMenu & {
  Title: typeof InternalMenuTitle;
  ItemGroup: typeof InternalMenuItemGroup;
  Item: typeof InternalMenuItem;
};

const Menu = InternalMenuWrapper as TMenu;

Menu.Title = InternalMenuTitle;
Menu.ItemGroup = InternalMenuItemGroup;
Menu.Item = InternalMenuItem;

if (process.env.NODE_ENV !== 'production') {
  Menu.displayName = 'Menu';
  InternalMenuTitle.displayName = 'MenuTitle';
  InternalMenuItemGroup.displayName = 'MenuItemGroup';
  InternalMenuItem.displayName = 'MenuItem';
}

export { Menu };
