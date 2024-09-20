import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_adminlayout/admin')({
  component: () =>
     <div>
      <Outlet />
     </div>
})