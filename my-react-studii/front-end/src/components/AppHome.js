import React from "react";
import Header from "./Hedear";
import { BrowserRouter as Router } from "react-router-dom";
// import Footer from "./Footer";

class AppHome extends React.Component {
  render() {
    return (
      <Router>
        <div id="container">
        <Header/>
          <main>
            {/* <Routes>
              <Route path="" element={< />} />
              <Route path="" element={< />} />
            </Routes> */}
          </main>
            {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default AppHome;
