import React, { useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder'

const Start = () => {
    const { setStart } = useContext(QuizContext)
  return (
    <>
        <div className="box" style={{display:"flex", justifyContent:"center", alignItems:"center", height:'100vh'}}>
            <div className="container" style={{width:'500px',height:'250px', borderRadius:'10px', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', backgroundColor:'white',boxShadow:'2px  2px  5px '}}>
                 <h1 style={{backgroundColor:'white',textAlign:'center', padding:'5px'}}>This is Quiz App click the start button to play quiz</h1>
                <button onClick={()=>setStart(true)} style={{ padding:'5px 15px', border:'none', borderRadius:'10px',fontSize:'1.8rem', cursor:'pointer', color:'white'}}>Start</button>
            </div>
        </div>
    </>
  )
}

export default Start