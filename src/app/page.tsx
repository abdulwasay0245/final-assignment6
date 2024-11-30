import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Trust from "./components/trust";
import Course1 from "./components/course1";
import Achivement from "./components/achievment";
import Course2 from "./components/course2";
import Team from "./components/team";
import Review from "./components/review";
import Footer from "./components/footer";
import Contact from "./components/contact";


import { Roboto } from "next/font/google"

const roboto = Roboto({
  weight: ['400', '700', ],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className={`grid grid-rows-auto gap-24 ${roboto.className}`}>
      <div className="">
        <Contact />
        <Navbar />
        <Hero />
      <Trust />
        </div>
      <Course1 />
      <Achivement />
      <Course2 />
      <Team />
      <Review />
      <Footer />
      
    </div>

  );
}
