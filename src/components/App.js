import Navbar from "./Navbar";
import "../styles/App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section>Home</section>
      <section>Hakkımızda</section>
      <section>Sizden gelenler</section>
      <section>İletişim</section>
    </div>
  );
}

export default App;
