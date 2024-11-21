import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Associations from "./routes/Associations.tsx";
import EventDetails from "./routes/EventDetails.tsx";
import AssociationDetails from "./routes/AssociationDetails.tsx";
import AppHeader from "./components/ui/appheader.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/associations",
    element: <Associations />,
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
      <AppHeader/>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
