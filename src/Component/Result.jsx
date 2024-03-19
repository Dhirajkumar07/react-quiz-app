import React, { useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder'

const Start = () => {
    const { correct, setCorrect, Questions, setExit, setStart, setWrong } = useContext(QuizContext)
    const playagainHandler = ()=>{
         setExit(false)
         setStart(false)
         setCorrect(0)
         setWrong(0)
    }
  return (
    <>
        <div className="box" style={{display:"flex", justifyContent:"center", alignItems:"center", height:'100vh',}}>
            <div className="container" style={{width:'400px',height:'200px', display:'flex',flexDirection:'column', borderRadius:'10px', display:'flex', justifyContent:'center',alignItems:'center', backgroundColor:'white',boxShadow:'2px  2px  5px '}}>
               <h2 style={{padding:'5px',backgroundColor:'white'}}>Result</h2>
               <h2 style={{backgroundColor:'white',paddingBottom:'5px'}}>{correct}/{Questions.length}</h2>
               <button onClick={playagainHandler} style={{ padding:'5px 15px', fontWeight:'bold', border:'1px solid black', borderRadius:'10px',fontSize:'1.5rem', cursor:'pointer', backgroundColor:'yellow',}}>play again</button>
            </div>
        </div>
    </>
  )
}

export default Start