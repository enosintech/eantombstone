import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Epilogue from "./components/Epilogue";

gsap.registerPlugin(ScrollTrigger);

function App() {

  return (
    <>
      <Hero />
      <Slider />
      <Epilogue />
    </>
  )
}

export default App;
