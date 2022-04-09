import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FooterFin from "./components/FooterFin";
import Footer_default from "./components/Footer_default";
import Router from "./Router";

function App() {
  const url = useLocation();
  return (
    <>
      <main>
        <Router />
      </main>
      <footer>
        {url.pathname.includes("fin") ? <FooterFin /> : <Footer_default />}
      </footer>
      {/* <footer>
        <Footer_static />
      </footer> */}
    </>
  );
}

export default App;
