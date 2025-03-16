import { Hero } from "./components/Hero/Hero";
import { Highlights } from "./components/Highlights";
import { Navabar } from "./components/Navbar";

const App = () => {
  return (
    <main className="bg-black">
      <Navabar />
      <Hero />
      <Highlights />
    </main>
  );
};

export default App;
