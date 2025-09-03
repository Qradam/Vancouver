import Header from './components/Header';
import Hero from './components/Hero';
import League from './components/League';
import Video from './components/Video';
import SocialMedia from './components/SocialMedia';
import CharacterCards from './components/CharacterCards';
import LatestUpdates from './components/LatestUpdates';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <section id="hero"> <Hero /> </section>
      <section id="league"> <League /> </section>
      <section id="video"> <Video /> </section>
      <section id="socialMedia"> <SocialMedia /> </section>
      <section id="characterCards"> <CharacterCards />  </section>
      <section id="latestUpdates"> <LatestUpdates /> </section>
      <section id="aboutUs"> <AboutUs /> </section>
      <section id="footer"> <Footer /> </section>
    </div>
  );
}