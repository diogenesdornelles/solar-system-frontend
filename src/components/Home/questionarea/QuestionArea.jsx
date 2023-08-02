import { useContext, useEffect, useState } from 'react';
import AppActions from '../../../context/AppActions';
import { AppContext } from '../../../context/AppContext';
import fetchData from '../../../utils/fetchData';
import ButtonReply from './ButtonReply';
import Question from './Question';
import Score from './Score';
import Timer from './Timer';
import Reset from './Reset';

function QuestionsArea() {
  const appContext = useContext(AppContext);
  const {
    dispatch,
    appState: { namePlayer, choosenPlanet, url, requestParams },
  } = appContext;
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 3000);
  }, []);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData(url, requestParams);
      dispatch({
        type: AppActions.QUESTION_PARAMS,
        payload: data,
      });
    };
    loadData();
  }, [url, requestParams, dispatch]);

  return (
    <div className="w-full max-w-3xl flex flex-col gap-y-3 animate__animated animate__fadeIn">
      <p className="text-white text-2xl underline">Jogador: {namePlayer}</p>
      {!ready && (
        <p className="text-red-600 text-2xl font-extrabold animate__animated animate__flash">
          PREPARE_SE... {namePlayer}
        </p>
      )}
      {ready && (
        <>
          <Reset />
          <Timer />
          <Question />
          <div className="flex justify-between">
            <Score />
            <p className="text-white text-base">
              Planeta selecionado: {choosenPlanet.name}
            </p>
          </div>
          <ButtonReply />
        </>
      )}
    </div>
  );
}

export default QuestionsArea;
