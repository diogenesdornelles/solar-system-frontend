import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import AppActions from '../../../context/AppActions';
import { AiOutlineMenu } from 'react-icons/ai';
import { HiOutlineX } from 'react-icons/hi';
import ButtonStart from './ButtonStart';
import Difficulty from './Difficulty';
import NamePlayer from './NamePlayer';
import Velocity from './Velocity';

export default function Sidebar() {
  const appContext = useContext(AppContext);
  const {
    dispatch,
    appState: { showSidebar, gameStarted },
  } = appContext;
  const handleClick = () => {
    dispatch({
      type: AppActions.SHOW_SIDEBAR,
      payload: !showSidebar,
    });
  };
  return (
    <div
      className={`z-[9999] w-fit h-fit bg-black absolute right-5 top-5 text-white border-2 border-white-500/100 rounded px-4 py-2 transition-all shadow-xl shadow-violet-500/50 ${
        gameStarted ? 'animate__zoomOut' : 'animate__zoomIn'
      }`}
    >
      {!showSidebar && (
        <AiOutlineMenu
          size={30}
          onClick={handleClick}
          className="fancy-pointer"
        />
      )}
      {showSidebar && (
        <>
          <HiOutlineX
            size={30}
            onClick={handleClick}
            className="fancy-pointer"
          />
          <NamePlayer />
          <Difficulty />
          <Velocity />
          <ButtonStart />
        </>
      )}
    </div>
  );
}
