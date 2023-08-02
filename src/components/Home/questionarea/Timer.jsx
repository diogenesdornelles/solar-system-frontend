import { useContext, useEffect, useRef } from 'react';
import AppActions from '../../../context/AppActions';
import { AppContext } from '../../../context/AppContext';

function Timer() {
  const appContext = useContext(AppContext);
  const {
    dispatch,
    appState: { timer, velocity },
  } = appContext;

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      dispatch({
        type: AppActions.TIMER,
        payload: timer + 5,
      });
    }, 1000 * (4 - velocity));

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [timer, dispatch, velocity]);

  useEffect(() => {
    if (timer >= 100) {
      dispatch({
        type: AppActions.TIMER,
        payload: 0,
      });
      dispatch({
        type: AppActions.VELOCITY,
        payload: 1,
      });
      dispatch({
        type: AppActions.GAME_STARTED,
        payload: false,
      });
      dispatch({
        type: AppActions.SHOW_RESULT,
        payload: true,
      });
    }
  }, [timer, dispatch]);

  return (
    <div className="border-l-2 border-indigo-500">
      <p className="text-white ml-2">Progresso {timer}%</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ml-2">
        <div
          className="bg-indigo-500 h-2.5 rounded-full"
          style={{ width: `${timer}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Timer;
