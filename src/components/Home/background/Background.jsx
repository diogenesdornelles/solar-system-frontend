import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import svg from '../../../assets/images/Home/frame4k.svg'

function Background() {
  const appContext = useContext(AppContext);
  const {
    appState: { gameStarted },
  } = appContext;
  return (
    <>
      <img
        className={`w-screen h-screen absolute top-0 left-0 bg-[url(${svg})] bg-no-repeat ${
          gameStarted ? 'bg-left' : ''
        } animated-bg transition-all duration-1000 -z-[9999]`}
      />
    </>
  );
}

export default Background;
