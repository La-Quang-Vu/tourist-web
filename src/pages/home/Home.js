
import React, {useState, useEffect} from 'react';
import Header from './Header';
import HomeBanner from './HomeBanner';
import ReasonCombo from './ReasonCombo';
import SearchBox from './SearchBox';
import HotDeal from './HotDeal';

const Home = () => {

  return (
    <div className="">
      <Header />
      <main>
        <HomeBanner />
        <SearchBox />
        <ReasonCombo />
        <HotDeal />
        
      </main>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>

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
