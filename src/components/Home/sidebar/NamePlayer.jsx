import { useContext } from 'react';
import AppActions from '../../../context/AppActions';
import { AppContext } from '../../../context/AppContext';

export default function NamePlayer() {
  const appContext = useContext(AppContext);
  const {
    dispatch,
    appState: { namePlayer, namePlayerError },
  } = appContext;
  const handleChange = (e) => {
    const { value } = e.target;
    dispatch({
      type: AppActions.NAME_PLAYER,
      payload: value,
    });
  };
  return (
    <div className="relative z-0 w-full mb-6 group mt-6">
      <input
        type="text"
        name="floating_input_name"
        id="floating_input_name"
        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=""
        required
        onChange={handleChange}
        defaultValue={namePlayer}
      />
      {namePlayerError && (
        <div
          className="px-2 mb-4 mt-2 text-sm text-red-600 rounded-lg bg-red-100 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <span className="font-medium">Erro!</span> Informe o nome.
        </div>
      )}
      <label
        htmlFor="floating_input_name"
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Nome
      </label>
    </div>
  );
}
