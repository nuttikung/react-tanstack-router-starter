import { Link } from '@tanstack/react-router';

import { Menu } from '@/components/shared/menu';
import { COMPONENTS } from '@/pages/components/constant';

const ComponentMenus = () => {
  return (
    <Menu>
      <Menu.Title title="Menu" />
      <Menu.ItemGroup>
        {COMPONENTS.map(({ name, to }) => (
          <Menu.Item key={name}>
            <Link to={to}>{name}</Link>
          </Menu.Item>
        ))}
      </Menu.ItemGroup>
    </Menu>
  );
};

export default ComponentMenus;
