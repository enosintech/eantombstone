import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Epilogue from "./components/Epilogue";
import Cursor from "./components/Cursor";

gsap.registerPlugin(ScrollTrigger);

function App() {

  return (
    <>
      <Cursor />
      <Hero />
      <Slider />
    </>
  )
}

export default App;
