import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { SET_PLAYER_DATA } from "./redux/types";
import Home from "./pages/Home";
import Players from "./pages/Players";
import FixtureList from "./components/FixtureList";
import PlayerDetail from "./components/PlayerDetail";
import FixtureDetail from "./components/FixtureDetail";
import Header from "./components/Header";
import "./sass/App.scss";

const App = () => {
  // useEffect(() => {
  //   try {
  //     dispatch({ type: SET_PLAYER_DATA, payload: players });
  //   } catch (error) {
  //     console.log("No data to display");
  //   }
  // }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/players" element={<Players />}></Route>
          <Route path="/player/:playerId" element={<PlayerDetail />}></Route>
          <Route exact path="/fixtures" element={<FixtureList />}></Route>
          <Route path="/fixture/:fixtureId" element={<FixtureDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
