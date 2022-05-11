import React from 'react';
import About from '../../About/About';
import Banner from '../Banner/Banner';
import Brances from '../Brances/Brances';
import Contact from '../Contact/Conract';
import Displays from '../Displays/Displays';
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Displays></Displays>
      <About></About>
      <Contact></Contact>
      <Brances></Brances>
    </div>
  );
};

export default Home;