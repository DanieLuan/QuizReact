import Welcome from './components/Welcome/Welcome';
import Question from './components/Question/Question';

import { useContext, useEffect } from 'react';
import { quizContext } from './context/quiz';

import './App.css'


function App() {
  const [quizState, dispatch] = useContext(quizContext);

  useEffect(() =>{
    dispatch({ type: "REORDER_QUESTIONS" })
  }, [])

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Question/>}
    </div>
  );
}

export default App;