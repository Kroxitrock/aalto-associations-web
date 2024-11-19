import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import EventDetails from "./routes/EventDetails.tsx";
import AssociationDetails from "./routes/AssociationDetails.tsx";
import EventDetails from "./routes/EventDetails.tsx";

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
    element: <AssociationDetails /> /* TODO: add provider */,
  },

  {
    path: "/event/:id",
    element: <EventDetails />,
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
