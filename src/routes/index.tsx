import { BrowserRouter, Route, Routes } from "react-router-dom";
import DraftPage from "../features/draft/pages/DraftPage";
import CreatePlayerPage from "../features/players/pages/CreatePlayerPage";
import CreateTeamPage from "../features/teams/pages/CreateTeamPage";
import MainLayout from "../shared/layouts/MainLayout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/teams" element={<CreateTeamPage />}/>
          <Route path="/players" element={<CreatePlayerPage />}/>
          <Route path="/draft" element={<DraftPage />}/>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default AppRoutes;