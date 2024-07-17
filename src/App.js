import React ,{useState} from 'react';
import './App.css';

function App() {
  

  const [todos,setTodos]=useState([]);
  const [todo,setTodo]=useState('');
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's a Holiday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" value={todo}  onChange={(e)=>setTodo([e.target.value])} placeholder="🖊️ What do you want to add..." />
        <i onClick ={()=>setTodos([...todos,{id:Date.now(),text:todo,status:false}])}  className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          todos.map((value,index)=>
          {
            return(
              <div className="todo" key={index}>
              <div className="left">
                <input onChange={(e)=>{
                   console.log(e.target.value);
                   console.log(value);

                   setTodos(todos.filter(obj=>
                  {
                    if(value.id===obj.id)
                    {
                      obj.status=e.target.checked
                    }
                    return obj;
                  }
                )
              )


                }} type="checkbox" value={value.status} name="" id="" />
                <p>{value.text}</p>
              </div>
              <div className="right">
                <i  onClick={(e)=>{
                  console.log(value);
                  setTodos(todos.filter(obj=>
                  {
                    if(obj.id!==value.id)
                    {
                      return obj;
                    }
                    return null
                  }
                  ))
                

                }}
                className="fas fa-times"></i>
              </div>
            </div>
            );
          })
        }
      </div>




      <div className='activetodo'>
        {
          todos.map((value)=>
          {
            if(value.status)
            {
              return(
                <h1>{value.text}</h1>
              )
            }
            return null;

            

          }
        )
        }


      </div>
    </div>
  );
}

export default App;