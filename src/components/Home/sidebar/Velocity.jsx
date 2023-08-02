import { Label } from 'flowbite-react';
import { useContext } from 'react';
import AppActions from '../../../context/AppActions';
import { AppContext } from '../../../context/AppContext';

export default function Velocity() {
  const appContext = useContext(AppContext);
  const {
    dispatch,
    appState: { velocity },
  } = appContext;
  const handleChange = (e) => {
    const { value } = e.target;
    dispatch({
      type: AppActions.VELOCITY,
      payload: parseInt(value),
    });
  };
  return (
    <>
      <div className="mb-2 block mt-4">
        <Label
          htmlFor="velocity-slider"
          className="text-white"
          value={`Velocidade ${velocity}:`}
        />
      </div>
      <input
        id="velocity-slider"
        type="range"
        value={velocity}
        step={1}
        min="1"
        max="3"
        onChange={handleChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 fancy-pointer"
      />
    </>
  );
}
