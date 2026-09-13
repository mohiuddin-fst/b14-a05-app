import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import type { ITechnology } from "./types/technology";
import Footer from "./components/Footer";



const technologiesFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("/data/technologies.json");
  const data = await res.json();
  return data;
};

function App() {
  const [technologiesPromise] = useState(() => technologiesFetch());
  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<h2 className="text-center my-20 text-2xl">Loading.......</h2>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
      <Footer />
    </>
  )
}

export default App
