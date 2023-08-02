import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';

function Question() {
  const appContext = useContext(AppContext);
  const {
    appState: { questionParams },
  } = appContext;
  const { question, difficulty } = questionParams;
  return (
    <>
      <label
        htmlFor="question"
        className="block text-sm font-medium text-white dark:text-white"
      >
        Pergunta (Dificuldade: {difficulty})
      </label>
      <textarea
        id="question"
        rows="3"
        readOnly
        className="block indent-2 font-bold p-2.5 w-full text-base text-white bg-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder=""
        value={question}
      ></textarea>
    </>
  );
}

export default Question;
