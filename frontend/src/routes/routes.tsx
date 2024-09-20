import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/routes')({
  component: () => <div>Hello /!</div>
})