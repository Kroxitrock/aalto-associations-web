import Header from "@/components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Associations from "./routes/Associations";
import AssociationDetails from "./routes/AssociationDetails";
import EventDetails from "./routes/EventDetails";
import CreateEvent from "./routes/CreateEvent";
import Login from "@/components/Login";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
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

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
