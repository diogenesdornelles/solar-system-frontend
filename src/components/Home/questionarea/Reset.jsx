import { HiOutlineX } from 'react-icons/hi';
import AppActions from '../../../context/AppActions';
import { AppContext } from '../../../context/AppContext';
import { useContext } from 'react';

function Reset() {
  const appContext = useContext(AppContext);
  const { dispatch } = appContext;
  const handleClick = () => {
    dispatch({
      type: AppActions.RESET,
    });
  };
  return (
    <HiOutlineX size={60} onClick={handleClick} className="fancy-pointer absolute right-6 top-6 text-white" />
  );
}

export default Reset;
