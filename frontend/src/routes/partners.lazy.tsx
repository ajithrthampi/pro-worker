import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/partners")({
  component: Partners,
});

function Partners() {
  return <div className="p-2">Hello from Partners!</div>;
}
