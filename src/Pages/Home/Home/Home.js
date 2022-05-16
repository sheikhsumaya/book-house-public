import React from 'react';
import About from '../../About/About';
import Banner from '../Banner/Banner';
import Brances from '../Brances/Brances';
import Contract from '../Contract/Contract';
import Displays from '../Displays/Displays';
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Displays></Displays>
      <About></About>
      <Contract></Contract>
      <Brances></Brances>
    </div>
  );
};

export default Home;