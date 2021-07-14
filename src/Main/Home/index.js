import React from 'react';
//for multiple images . 
import pic1 from '../../Assets/Images/pic1.png';
//using common component simply use common content or code.
import Common from '../../Component/Common/index';
const Home = () => {
  return (
    <>
    {/* //change the common content using props like heading img
    //visit is use for page path
    //btname is button name
     */}
      <Common 
      name="Grow Your bussiness with " 
      imgsrc={pic1}
      visit="/service" 
      btnname="Get Started" />
    </>
  );
};

export default Home;