import { Link } from '@tanstack/react-router';

import { Button } from '@/components/ui/button';

const NavbarLogin = () => {
  return (
    <>
      <Button asChild>
        <Link to="/login-01" preload="intent">
          Login
        </Link>
      </Button>
    </>
  );
};

export { NavbarLogin };
