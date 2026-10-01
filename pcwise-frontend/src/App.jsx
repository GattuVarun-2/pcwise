import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PCBuilder from "./pages/PCBuilder";
import Peripherals from "./pages/Peripherals";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const pages = {
    home: <Home onNavigate={navigateTo} />,
    builder: <PCBuilder />,
    peripherals: <Peripherals />,
  };
  return (
    <div className="app-shell">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />
      <main>{pages[currentPage]}</main>
      <Footer />
    </div>
  );
}

export default App;
