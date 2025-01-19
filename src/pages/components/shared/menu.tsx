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
            <Link
              to={to}
              className="text-gray-400 [&.active]:text-black dark:[&.active]:text-white dark:text-gray-400 dark:text-opacity-50"
              activeOptions={{ exact: true }}
            >
              {name}
            </Link>
          </Menu.Item>
        ))}
      </Menu.ItemGroup>
    </Menu>
  );
};

export default ComponentMenus;
