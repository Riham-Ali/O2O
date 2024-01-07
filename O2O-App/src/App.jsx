import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";

import SignupPlayers from "./Components/Pages/loginSignup/signupPlayers";
import SignupClubs from "./Components/Pages/loginSignup/signupClubs";
import PalyersDashboard from "./Components/Pages/playersPages/palyersDashboard";
import ClubDashboard from "./Components/Pages/clubsPages/clubDashboard";
import PlayersInformation from "./Components/Pages/playersPages/PlayersInformation";
import TeamInformations from "./Components/Pages/clubsPages/TeamInformations";
import Login from "./Components/Pages/loginSignup/login";

function App() {
  return (
    <>
      <div className="sidebar1">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<SignupPlayers />} />
              <Route path="playerregister" element={<SignupPlayers />} />
              <Route path="clubregister" element={<SignupClubs />} />
              <Route path="playerdashboard" element={<PalyersDashboard />} />
              <Route path="clubdashboard" element={<ClubDashboard />} />
              <Route path="login" element={<Login />} />
              <Route
                path="playerinformations"
                element={<PlayersInformation />}
              />
              <Route path="teaminformations" element={<TeamInformations />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
