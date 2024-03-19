import React, { createContext, useState } from 'react'

const QuizContext = createContext()
const Questions = [
  {
    question :"who is the current P.M of India",
    a : 'Rahul Ghandhi',
    b : 'Amit Sah',
    c : 'Narendra Modi',
    d : 'Adityanath yogi',
    ans : 'c'
  },
  {
    question :"who is the current richest man in the world",
    a : 'Mark Zuckerberg',
    b : 'Elon Musk',
    c : 'jeff Bezos',
    d : 'Arnault & family',
    ans : 'd'
  },
  {
    question :"who is the founder of microsoft",
    a : 'Mark Zuckerberg',
    b : 'Bill Gates',
    c : 'jeff Bezos',
    d : 'Elon Musk',
    ans : 'b'
  },
  {
    question :"how many bit in 1 byte?",
    a : 16,
    b : 4,
    c : 8,
    d : 2,
    ans : 'c'
  },
  {
    question :"what is the brain of the computer",
    a : 'Moniter',
    b : 'Keybord',
    c : 'Cpu',
    d : 'Mouse',
    ans : 'c'
  },

]

const QuizHolder = (props) => {
  const[start, setStart] = useState(false)
  const[exit, setExit] = useState(false)
  const[correct, setCorrect] = useState(0);
  const[wrong, setWrong] = useState(0); 
  return (
    <>
        <QuizContext.Provider value={{start, exit, setStart, setExit, Questions, correct, setCorrect, wrong, setWrong}}>
            {props.children}
        </QuizContext.Provider>
    </>
  )
}

export default QuizHolder;
export {QuizContext}