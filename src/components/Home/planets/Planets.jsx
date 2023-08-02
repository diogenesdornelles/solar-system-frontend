import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import Planet from './Planet';
import 'animate.css';

function Planets() {
  const appContext = useContext(AppContext);
  const {
    appState: { planets },
  } = appContext;
  return (
    <div className="grid grid-cols-3 gap-4 justify-items-center items-center animate__animated animate__zoomIn w-full max-w-3xl mt-6">
      {planets.map((planet) => (
        <Planet key={planet.id} index={planet.id} />
      ))}
    </div>
  );
}

export default Planets;
