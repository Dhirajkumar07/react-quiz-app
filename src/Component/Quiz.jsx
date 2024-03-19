import React, { useContext, useState } from 'react'
import { QuizContext } from '../Context/QuizHolder'

const Quiz = () => {
  const { Questions, correct, setCorrect, wrong, setWrong,  setExit, setStart } = useContext(QuizContext)
  const[currentQus, setCurrentQus] = useState(0)
  const[ans, setAns] = useState("")
  const saveAndNextHandler = ()=>{
    if(ans === Questions[currentQus].ans){
      setCorrect(correct+1)
    }else{setWrong(wrong+1)}
    setAns("")
    if(currentQus+1 < Questions.length){
    setCurrentQus(currentQus+1)
    }else{
      setExit(true) 
    }
  }
  const restartHandler =()=>{
    setCurrentQus(0)
    setCorrect(0)
    setWrong(0)
  }
  const exitHandler = ()=>{
    setStart(false)
    setCorrect(0)
    setWrong(0)
  }
  return (
    <>
     <div className="box" style={{display:"flex", justifyContent:"center", alignItems:"center", height:'100vh'}}>
     <div className="container" style={{width:'450px',MinHeight:'250px', display:'flex', flexDirection:'column', justifyContent:'space-between', backgroundColor:'white', border:'1px solid white'}}>
     <h2 style={{textAlign:'center',color:'white',border:'1px solid white',padding:'5px',}}>Right {correct}/{Questions.length} | Wrong {wrong}/{Questions.length}</h2>
         <h2 style={{padding:'5px', color:'white'}}>{currentQus+1}) {Questions[currentQus].question}</h2>
         <div className="options" style={{cursor:'pointer', fontWeight:'bold'}}>
            <div className="option" style={ans === 'a'? {backgroundColor:'lightblue'} : {backgroundColor:'white'}} onClick={()=>setAns("a")}>{Questions[currentQus].a}</div>
            <div className="option" style={ans === 'b'? {backgroundColor:'lightblue'} : {backgroundColor:'white'}} onClick={()=>setAns("b")}>{Questions[currentQus].b}</div>
            <div className="option" style={ans === 'c'? {backgroundColor:'lightblue'} : {backgroundColor:'white'}} onClick={()=>setAns("c")}>{Questions[currentQus].c}</div>
            <div className="option" style={ans === 'd'? {backgroundColor:'lightblue'} : {backgroundColor:'white'}} onClick={()=>setAns("d")}>{Questions[currentQus].d}</div>
         </div>
         <div className="buttons" style={{display:'flex', justifyContent:'space-between', padding:'5px',fontWeight:'bold'}}>
            <div className="button" onClick={restartHandler} style={{backgroundColor:'yellow', cursor:'pointer'}}>Restart</div>
            <div className="button" onClick={saveAndNextHandler} style={{backgroundColor:'green', color:'white', cursor:'pointer'}}>Save & Next</div>
            <div className="button" onClick={exitHandler} style={{backgroundColor:'red', color:'white', cursor:'pointer'}}>Exit</div>
         </div>
    </div>
</div>
    </>
    
  )
}
export default Quiz