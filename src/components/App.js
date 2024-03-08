import Navbar from "./Navbar";
import Intro from "./Intro";
import AboutMe from "./AboutMe";
import GoogleReview from "./GoogleReview";
import ContactMe from "./ContactMe";
import "../styles/App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sections">
        <Intro />
        <AboutMe />
        <GoogleReview />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
