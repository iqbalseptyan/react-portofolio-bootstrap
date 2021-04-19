import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { Fragment } from "react";
function App() {
  return (
    <Fragment>
      <Particles
        params={{
          particles: {
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#F7DC6F",
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
    </Fragment>
  );
}

export default App;
