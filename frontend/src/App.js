import StickyFooter from "./component/Footer/StickyFooter";
import Navbar from "./component/Navabar/Navbar";
import News from "./component/News/News";
import NewsScreen from "./pages/NewsScreen/NewsScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<News country="in" category="general" />} />
        <Route
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
        <Route path="/news/:id" element={<NewsScreen />}></Route>
      </Routes>
      {/* <Home type="movie" />*/}
      <StickyFooter />
    </Router>
  );
}

export default App;
