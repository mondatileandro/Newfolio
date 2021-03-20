import React from 'react';
import HomeWrapper from './Home.style';

interface Props {
  right: React.FC;
}
const Home: React.FC<Props> = ({ right: RightComponent }) => {
  return (
    <HomeWrapper as='section'>
      <div className='home__left'>
        <div className='home__text'>
          <h2 className='app--logo'>Invest-ICO</h2>
          <h1 className='text--light'>Build</h1>
          <h1 className='text--light'>Trust</h1>
          <h1 className='text--light'>& and Transparency</h1>
          <br />
          <span>Easy to use 1 click functionality</span>
        </div>
      </div>
      <div className='home__right'>
        <RightComponent />
      </div>
    </HomeWrapper>
  );
};

export default Home;
