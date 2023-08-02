import { useContext } from 'react';
import AppActions from '../../../context/AppActions';
import { AppContext } from '../../../context/AppContext';

export default function ButtonStart() {
  const appContext = useContext(AppContext);
  const {
    dispatch,
    appState: { namePlayer, difficulty },
  } = appContext;
  const handleClick = () => {
    if (!namePlayer) {
      dispatch({
        type: AppActions.NAME_PLAYER_ERROR,
        payload: true,
      });
      const myTimeout = setTimeout(() => {
        dispatch({
          type: AppActions.NAME_PLAYER_ERROR,
          payload: false,
        });
      }, 4000);
      myTimeout();
      return;
    }
    dispatch({
      type: AppActions.REQUEST_PARAMS,
      payload: {
        namePlayer,
        difficulty,
      },
    });
    dispatch({
      type: AppActions.GAME_STARTED,
      payload: true,
    });
  };
  return (
    <div className="flex mt-8 justify-center">
      <button
        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 fancy-pointer"
        onClick={handleClick}
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Começar
        </span>
      </button>
    </div>
  );
}
