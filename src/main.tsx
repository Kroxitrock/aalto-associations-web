import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AssociationDetails from "./routes/AssociationDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/associations/:id/events",
    element: <AssociationDetails />,
  },
  {
    path: "/associations/:id/about",
    element: <AssociationDetails />,
  },
]);
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
