import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Welcome from "./sections/Welcome";
import About from "./sections/About";
import GetToKnow from "./sections/GetToKnow";
import Quote from "./sections/Quote";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />      
      <Hero />
      <GetToKnow />
      <Welcome />
      <About />    
      <Quote />
      <Footer />
    </main>
  );
}
