import StickyFooter from "./component/Footer/StickyFooter";
import Navbar from "./component/Navabar/Navbar";
//import News from "./component/News/News";
//import NewsScreen from "./pages/NewsScreen/NewsScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import Login from "./Admin/src/pages/login/Login";
//import List from "./component/List/List";
import Home from "./pages/Home/Home";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Navbar />
      <Routes>
        {!user ? (
          <Route path="/login" element={<Login />} />
        ) : (
          <Route path="/" />
        )}

        {/* {user ? (
          <navigate to="/"></navigate>
        ) : (
          <Route path="/login" element={<Login />}></Route>
        )} */}
        {/* <Route path="/" element={<News country="in" category="general" />} /> */}
        {/* <Route
          path="/business"
          element={<News country="in" category="business" />}
        />
        <Route
          path="/entartainment"
          element={<News country="in" category="entartainment" />}
        />
        <Route
          path="/agriculture"
          element={<News country="in" category="agriculture" />}
        />
        <Route
          path="/sports"
          element={<News country="in" category="sports" />}
        />
        <Route path="/news/:id" element={<NewsScreen />}></Route> */}
      </Routes>
      <Home />
      {/* <Home type="movie" />*/}
      <StickyFooter />
    </Router>
  );
}

export default App;
