let initialState={
    TaskList:[],
}
function inputReducer(state=initialState,action){
    console.log(state);
      switch(action.type){
          case "add_task":
              //store update
              console.log(action.payload);
              let newTaskList={
                
                  TaskList:[  ...state.TaskList,
                     {task:action.payload,id:state.TaskList.length},
                   
                  ]
                            }
                            console.log(newTaskList);
                            return newTaskList;
            case "delete_task":
                console.log("action",action.payload);
                let deleteTaskList= {
                     TaskList:state.TaskList.filter( function (Task){
                         console.log("taskid",Task.id);
                          return Task.id!==action.payload;
                      })
                        
                }
                console.log("delete task",deleteTaskList);
                return deleteTaskList;
                                    
                            default:
                                return state;
                        

      }

}
export default inputReducer;