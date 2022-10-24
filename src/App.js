import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { SET_PLAYER_DATA } from "./redux/types";
import Landing from "./components/Landing";
import Home from "./pages/Home";
import Players from "./pages/Players";
import FixtureList from "./components/FixtureList";
import PlayerDetail from "./components/PlayerDetail";
import FixtureDetail from "./components/FixtureDetail";
import TeamDetail from "./components/TeamDetail";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import "./sass/App.scss";
import SignUp from "./pages/SignUp";
import CreateTeam from "./components/CreateTeam";
import CreateFixture from "./components/CreateFixture";
import EditTeam from "./components/EditTeam";
import AddChild from "./components/AddChild";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route
            exact
            path="/dashboard/manager/create-team"
            element={<CreateTeam />}
          ></Route>
          <Route
            exact
            path="/dashboard/manager/create-fixture/:teamId"
            element={<CreateFixture />}
          ></Route>
          <Route
            exact
            path="/dashboard/manager/edit-team/:teamId"
            element={<EditTeam />}
          ></Route>
          <Route
            exact
            path="/dashboard/parent/add-Child"
            element={<AddChild />}
          ></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/players" element={<Players />}></Route>
          <Route path="/player/:playerId" element={<PlayerDetail />}></Route>
          <Route exact path="/fixtures" element={<FixtureList />}></Route>
          <Route path="/fixture/:fixtureId" element={<FixtureDetail />}></Route>
          <Route path="/team/:teamId" element={<TeamDetail />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
