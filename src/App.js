import { useContext } from 'react';
import './App.css';
import Quiz from './Component/Quiz';
import Result from './Component/Result'; 
import Start from './Component/Start';
import { QuizContext } from './Context/QuizHolder';

function App() {
  const {start, exit} = useContext(QuizContext)
  return (
    <>
    {
      exit === false ?  
      <>
      {  start === true ? <Quiz/> : <Start/> }
      </>: <Result/>
    }
    </>
  )
}

export default App;
