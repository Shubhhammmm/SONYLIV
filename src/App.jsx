import "./index.css";
import { Routes, Route, Link, useNavigate, BrowserRouter } from "react-router-dom";
import Home from "./Views/Home";
import SignIn from "./Views/SignIn";
import UsOpen from "./Views/Home";
import KBC from "./Views/Home";
import WatchFree from "./Views/Home";
import TVShows from "./Views/Home";
import Originals from "./Views/Home";
import Sports from "./Views/Home";
import Movies from "./Views/Home";
import Premium from "./Views/Home";
import ActivateTV from "./Views/activateTv/ActivateTV";
import Subscribe from "./Views/subscribe/Subscribe";
import Settings from "./Views/settings/Settings";

export default function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/usopen" element={<UsOpen />} />
        <Route path="/kbc" element={<KBC />} />
        <Route path="/watchfree" element={<WatchFree />} />
        <Route path="/tvshows" element={<TVShows />} />
        <Route path="/originals" element={<Originals />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/device/activate" element={<ActivateTV />} />
        <Route path="/subscription" element={<Subscribe />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

