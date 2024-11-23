import Header from "@/components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Associations from "./routes/Associations";
import AssociationDetails from "./routes/AssociationDetails";
import EventDetails from "./routes/EventDetails";
import CreateEvent from "./routes/CreateEvent";
import Login from "@/components/Login";
import { Toaster } from "@/components/ui/toaster";
import CreateAssociation from "./routes/CreateAssociation";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/associations" element={<Associations />} />
        <Route
          path="/associations/:id/events"
          element={<AssociationDetails />}
        />
        <Route
          path="/associations/:id/about"
          element={<AssociationDetails />}
        />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/events/create" element={<CreateEvent />} />
        <Route
          path="/associations/:id/events/create"
          element={<CreateEvent />} //TODO: User who is not leader should not be allow to access this page
        />
        <Route path="/associations/create" element={<CreateAssociation />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
