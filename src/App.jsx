import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";
import ScrollTop from "./components/ScrollTop";
import Home from "./sections/Home";
import Services from "./sections/services";
import About from "./sections/About";
import Clients from "./sections/clients";
import Contact from "./sections/contact"; // Import Contact
import "./styles/main.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Home />
        <Services />
        <About />
        <Clients />
        <Contact /> {/* Add Contact section */}
      </main>
      <Chatbot />
      <ScrollTop />
    </div>
  );
}

export default App;