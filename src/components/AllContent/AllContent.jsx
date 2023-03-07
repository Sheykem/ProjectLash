import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import MyServices from '../MyServices/MyServices';
import Prices from '../Prices/Prices';
import Recall from '../Recall/Recall';
import Slaider from '../Slaider/Slaider';
import WhyChooseMe from '../WhyChooseMe/WhyChooseMe';
import MyCoordinat from '../MyCoordinat/MyCoordinat';
import IntermidiaeBlock from '../IntermidiaeBlock/IntermidiaeBlock';
const AllContent = () => {
  return (
    <>
      <AboutMe />
      <WhyChooseMe />
      <MyServices />
      <Prices />
      <IntermidiaeBlock />
      <Slaider />
      <Recall />
      <MyCoordinat />
      <Footer />
    </>
  );
};

export default AllContent;
