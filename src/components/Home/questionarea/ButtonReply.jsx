import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import AppActions from '../../../context/AppActions';
import fetchData from '../../../utils/fetchData';

export default function ButtonReply() {
  const appContext = useContext(AppContext);
  const {
    dispatch,
    appState: {
      score,
      errors,
      questionParams,
      choosenPlanet,
      url,
      requestParams,
      punctuation,
      wrongQuestions,
    },
  } = appContext;
  const handleClick = () => {
    if (questionParams.id === choosenPlanet.id) {
      dispatch({
        type: AppActions.SCORE,
        payload: score + 1,
      });
      dispatch({
        type: AppActions.PUNCTUATION,
        payload: punctuation + questionParams.difficulty,
      });
    } else {
      dispatch({
        type: AppActions.ERRORS,
        payload: errors + 1,
      });
      dispatch({
        type: AppActions.WRONG_QUESTIONS,
        payload: [...wrongQuestions, questionParams],
      });
    }
    const loadData = async () => {
      const data = await fetchData(url, requestParams);
      dispatch({
        type: AppActions.QUESTION_PARAMS,
        payload: data,
      });
    };
    loadData();
    dispatch({
      type: AppActions.CHOOSEN_PLANET,
      payload: '',
    });
  };
  return (
    <>
      <button
        type="button"
        className="text-gray-900 bg-white border uppercase border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-bold rounded-lg text-lg px-24 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 shadow-xl shadow-cyan-500/50 hover:shadow-cyan-500/75 transition-all fancy-pointer"
        onClick={handleClick}
      >
        Responder
      </button>
    </>
  );
}
