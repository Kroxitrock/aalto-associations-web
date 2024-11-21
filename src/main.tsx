import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Associations from "./routes/Associations.tsx";
import EventDetails from "./routes/EventDetails.tsx";
import AssociationDetails from "./routes/AssociationDetails.tsx";
import CreateEvent from "./routes/CreateEvent.tsx";

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
    element: <AssociationDetails />,
  },
  {
    path: "/events/:id",
    element: <EventDetails />,
  },
  {
    path: "/associations/:id/events/create",
    element: <CreateEvent />,
  },
]);
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className="lg:max-w-4xl mx-auto p-6">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  </StrictMode>
);
