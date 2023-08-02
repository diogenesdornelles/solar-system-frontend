import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Background from '../components/Home/background/Background';
import Sidebar from '../components/Home/sidebar/SideBar';
import PainelStart from '../components/Home/painelstart/PainelStart';
import Planets from '../components/Home/planets/Planets';
import QuestionArea from '../components/Home/questionarea/QuestionArea';
import Nav from '../components/templates/Nav';
import Result from '../components/Home/result/Result';
import 'animate.css';
import '../assets/css/Home/home.css';

function Home() {
  const appContext = useContext(AppContext);
  const {
    appState: { gameStarted, showResult },
  } = appContext;
  return (
    <>
      <Nav />
      <Background />
      {!showResult && !gameStarted && <PainelStart />}
      {!showResult && !gameStarted && <Sidebar />}
      <div className="flex flex-col items-center h-fit justify-around mt-12">
        {!showResult && gameStarted && <QuestionArea />}
        {!showResult && gameStarted && <Planets />}
      </div>
      {!gameStarted && showResult && <Result />}
    </>
  );
}

export default Home;
