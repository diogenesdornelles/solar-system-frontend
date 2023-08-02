/* eslint-disable no-unused-vars */
import AppActions from '../../../context/AppActions';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../context/AppContext';

function Result() {
  const appContext = useContext(AppContext);
  const {
    dispatch,
    appState: { score, errors, punctuation, wrongQuestions, planets },
  } = appContext;
  const [wrongs, setWrongs] = useState([]);
  let denominator = score + errors;
  let percentual = denominator > 0 ? (score / denominator).toFixed(2) * 100 : 0; // a depender, resposta sobre o desempenho

  useEffect(() => {
    const wrongs = wrongQuestions.map((question) => {
      const planet = planets.find((planet) => planet.id === question.id);
      if (planet) {
        return { ...question, name: planet.name };
      }
    });
    setWrongs(wrongs);
  }, [planets, wrongQuestions]);

  const handleClick = () => {
    dispatch({
      type: AppActions.RESET,
    });
  };
  return (
    <div className="flex flex-col gap-6 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-2 border-violet-600 p-6 rounded-md w-11/12 bg-slate-900">
      <h2 className="text-white text-2xl font-bold bg-teal-600/50 p-2 rounded">
        Resultado
      </h2>
      <p className="text-white font-bold">Acertos: {score}</p>
      <p className="text-white font-bold">Erros: {errors}</p>
      <p className="text-white font-bold">Pontuação: {punctuation}</p>
      <p className="text-white font-bold">
        Percentual de acertos: {percentual}%
      </p>
      <div className="flex flex-col gap-3">
        {wrongs.length > 0 && (
          <p className="text-white font-bold">
            Relatório de questões erradas:{' '}
          </p>
        )}
        {wrongs.length > 0 &&
          wrongs.map((question, index) => (
            <div key={`${index}-div`} className="flex gap-x-3 ml-3">
              <p className="text-white font-bold">
                Pergunta:{' '}
                <span className="text-red-700">{question.question}</span>
              </p>
              <p className="text-white font-bold">
                Resposta correta:{' '}
                <span className="text-blue-700">{question.name}</span>
              </p>
            </div>
          ))}
      </div>
      <p className="font-bold text-yellow-500">
        Continue tentando! A prática leva à perfeição.
      </p>
      <button
        type="button"
        className="text-gray-900 bg-white border mt-2 border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-bold rounded-lg text-lg px-24 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 shadow-xl shadow-cyan-500/50 hover:shadow-cyan-500/75 transition-all fancy-pointer"
        onClick={handleClick}
      >
        Encerrar
      </button>
    </div>
  );
}

export default Result;
