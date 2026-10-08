import Hero from './HomeSections/Hero';
import Features from './HomeSections/Features';
import StudyPath from './HomeSections/StudyPath';
import Universities from './HomeSections/Universities';
import HowItWorks from './HomeSections/HowItWorks';
import Stats from './HomeSections/Stats';
import CallToAction from './HomeSections/CallToAction';
import Footer from './HomeSections/Footer';

const Home = () => {
  return (
    <div className="bg-canvas text-ink">
      <Hero />
      <Stats />
      <Features />
      <StudyPath />
      <Universities />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
