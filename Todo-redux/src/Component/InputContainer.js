import React, { useState } from 'react'
import { connect } from "react-redux";
function InputContainer(props){
    const[currTask,setCurrTask]=useState("");
    return (
        <>
        <div style={{display:"flex" ,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h1 style={{alignItems:'center',display:"flex",justifyContent:"center"}}>ToDO APP</h1>
            <div>
            <input value={currTask}
            style={{height:"25px",fontSize:"large",border:"none",outline:"none",borderBottom:"2px solid gainsboro",color:"gray"}}
            onChange={(e)=>{
                setCurrTask(e.target.value)
            }}></input>
            <button style={{ border:"none", marginLeft:"20px",outline:"none",background:"transparent", fontSize:"large",border:"2px solid gainsboro"}}onClick={()=>{props.setTask(currTask)
            setCurrTask("")}}> Add Task</button>
            </div>
        </div>
        <div >
            
              <ul>
                  {
                      
                      props.TaskList.map((taskObj)=>{
                          return (
                           <>  
                          <li key={taskObj.id}>
                              <div style={{display:"flex" ,alignItems:"center"}}>
                              <h4 style={{color:"#1f1d1d87"}}>{taskObj.task}</h4>
                           
                              <button style={{ border:"none",  height:"30px",marginLeft:"20px",outline:"none",background:"transparent", fontSize:"large",border:"2px solid gainsboro"}} onClick={()=>{props.setDelete(taskObj.id)}} >Delete Task</button>
                              </div>
                          </li>
                           
                          </>
                          )
                      })
                  }
                  </ul> 
                                
        </div>
        </>
    )


}

const mapStateToProps=store=>{
    console.log(" i m tasklist",store);
    return store.Input;
}
const mapDispatchtoProps=dispatch=>{
    console.log("chl rh hu ");
    return {
        setTask:(task)=>{
            console.log(" i m taks");
            dispatch({
                type:"add_task",
                payload:task
            })
        },
        setDelete:(taskObjId)=>{
            dispatch({
                        type:"delete_task",
                        payload:taskObjId                  

            })
    }
}
}
export default connect(mapStateToProps,mapDispatchtoProps)(InputContainer)
