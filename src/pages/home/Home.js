
import React, {useState, useEffect} from 'react';
import Header from './Header';
import HomeBanner from './HomeBanner';
import ReasonCombo from './ReasonCombo';
import SearchBox from './SearchBox';
import HotDeal from './HotDeal';
import HomeBlog from './HomeBlog';
import MemberShip from './MemberShip';
import AppBox from './AppBox';
import Footer from './Footer';
import ChatWidget from './ChatWidget';

const Home = () => {

  return (
    <div className="">
      <ChatWidget />
      <Header />
      <main>
        <HomeBanner />
        <SearchBox />
        <ReasonCombo />
        <HotDeal />
        <HomeBlog />
        <MemberShip />
        <AppBox />
        
      </main>
      <Footer />
      
    </div>
  );
}

export default Home;
