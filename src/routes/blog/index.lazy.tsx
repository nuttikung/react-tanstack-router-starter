import { createLazyFileRoute } from '@tanstack/react-router'

import Blog from '@/pages/blog'

export const Route = createLazyFileRoute('/blog/')({
  component: Blog,
})
