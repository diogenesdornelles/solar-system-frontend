import AppActions from '../../../context/AppActions';
import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import Message from './Message';
import HowPlay from './HowPlay';

function PainelStart() {
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
      className={`w-11/12 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-8 items-center animate__animated ${
        gameStarted ? 'animate__zoomOut z-[10000]' : 'animate__fadeIn'
      }`}
    >
      <h1 className="mb-4 text-3xl font-extrabold text-gray-700 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-700 from-blue-800">
          Nosso sistema solar
        </span>{' '}
        Quiz game.
      </h1>
      <Message />
      <button
        type="button"
        className="text-gray-900 bg-white border uppercase border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-bold rounded-lg text-lg px-16 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 shadow-xl shadow-cyan-500/50 md:w-96 w-11/12 hover:w-full md:hover:w-1/2 hover:rounded-full transition-all mt-4 fancy-pointer"
        onClick={handleClick}
      >
        Tentar
      </button>
      <HowPlay />
    </div>
  );
}

export default PainelStart;
