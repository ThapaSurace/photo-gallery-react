import "./App.css";
import { GoToTop } from "./components/gototop";
import { Navbar } from "./components/Navbar";
import { PhotoApi } from "./components/PhotoApi";

function App() {
  return (
    <>
      <Navbar />
      <PhotoApi />
      <GoToTop />
    </>
  );
}

export default App;
