import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import FixtureDetail from "./components/Fixtures/FixtureDetail";
import TeamDetail from "./components/Team/TeamDetail";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./sass/App.scss";
import SignUp from "./pages/SignUp";
import CreateTeam from "./components/Team/CreateTeam";
import CreateFixture from "./components/Fixtures/CreateFixture";
import EditTeam from "./components/Team/EditTeam";
import AddChild from "./components/Parent/AddChild";
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
          <Route path="/fixture/:fixtureId" element={<FixtureDetail />}></Route>
          <Route path="/team/:teamId" element={<TeamDetail />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
