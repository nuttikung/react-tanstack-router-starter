import { createLazyFileRoute } from '@tanstack/react-router'

import Login01 from '@/pages/login/login-01'

export const Route = createLazyFileRoute('/_login/login-01')({
  component: Login01,
})
