import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Associations from "./routes/Associations.tsx";
import EventDetails from "./routes/EventDetails.tsx";
import AssociationDetails from "./routes/AssociationDetails.tsx";
import Header from "./components/Header.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>

        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/associations" element={<Associations />} />
          <Route path="/associations/:id/events" element={<AssociationDetails />} />
          <Route path="/associations/:id/about" element={<AssociationDetails />} />
          <Route path="/event/:id" element={<EventDetails />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
