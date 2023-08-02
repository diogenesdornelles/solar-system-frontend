import PropTypes from 'prop-types';
import { useContext } from 'react';
import AppActions from '../../../context/AppActions';
import { AppContext } from '../../../context/AppContext';

function Planet({ index }) {
  const appContext = useContext(AppContext);
  const {
    dispatch,
    appState: { planets },
  } = appContext;
  const { name, img, id } = planets[index];
  const handleClick = () => {
    dispatch({
      type: AppActions.CHOOSEN_PLANET,
      payload: {
        name,
        id,
      },
    });
  };
  return (
    <div
      className="flex flex-col hover:scale-110 transition-all shadow-xl shadow-purple-500/50 hover:shadow-purple-500/75 rounded-lg fancy-pointer"
      onClick={handleClick}
    >
      {name === 'saturno' && (
        <div className="flex items-center justify-center">
          <p className="text-white text-center z-[10000]">{name}</p>
          <img className="w-6/12 h-4/12 sm:w-7/12 sm:h-2/12 p-1" src={img} />
        </div>
      )}
      {name !== 'saturno' && (
        <div className="flex items-center justify-center">
          <p className="text-white text-center">{name}</p>
          <img className="w-5/12 h-4/12 sm:w-4/12 sm:h-2/12 p-1" src={img} />
        </div>
      )}
    </div>
  );
}

export default Planet;

Planet.propTypes = {
  index: PropTypes.number,
};
