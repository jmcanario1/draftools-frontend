import { BrowserRouter, Route, Routes } from "react-router-dom";
import DraftPage from "../features/draft/pages/DraftPage";
import CreatePlayerPage from "../features/players/pages/CreatePlayerPage";
import CreateTeamPage from "../features/teams/pages/CreateTeamPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/teams" element={<CreateTeamPage />}/>
        <Route path="/players" element={<CreatePlayerPage />}/>
        <Route path="/draft" element={<DraftPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;