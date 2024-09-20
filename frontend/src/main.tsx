import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createRouter, RouterProvider } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { Provider } from "react-redux";
import { store } from "@/app/store.ts";
import { BooleanProvider } from "./components/context/ModalContext";
import { LanguageBooleanProvider } from "./components/context/LanguageContext";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <LanguageBooleanProvider>
        <BooleanProvider>
          <RouterProvider router={router} />
        </BooleanProvider>
      </LanguageBooleanProvider>
    </Provider>
  </React.StrictMode>
);
