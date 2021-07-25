
import React, {useState, useEffect} from 'react';
import Header from './Header';
import HomeBanner from './HomeBanner';
import ReasonCombo from './ReasonCombo';
import SearchBox from './SearchBox';

const Home = () => {

  return (
    <div className="">
      <Header />
      <main>
        <HomeBanner />
        <SearchBox />
        <ReasonCombo />

        
      </main>



      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button className="btn hover:bg-blue-500">tourist project</button>

    </div>
  );
}

export default Home;
