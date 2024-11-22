import Header from "@/components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Associations from "./routes/Associations";
import AssociationDetails from "./routes/AssociationDetails";
import EventDetails from "./routes/EventDetails";

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
      </Routes>
    </BrowserRouter>
  );
}
