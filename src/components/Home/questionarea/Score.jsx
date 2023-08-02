import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';

function Score() {
  const appContext = useContext(AppContext);
  const {
    appState: { score, errors },
  } = appContext;

  return (
    <div className="flex gap-x-3">
      <p className="text-white">Acertos: {score}</p>
      <p className="text-white">Erros: {errors}</p>
    </div>
  );
}

export default Score;
