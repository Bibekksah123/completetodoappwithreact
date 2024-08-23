import Todonmae from "./assets/component/Todo-name"
import Todoitem from "./assets/component/Todoitem"
import Eror from "./assets/component/Eror"
import Todocontainer from "./Todocontainer"
import './App.css'
import { useState } from "react"
function App() {
  // let itemtodoitemlist=[
  //   {
  //     name:"Buy milk",
  //     date:'2024/04/05'
  //   },
  //   {
  //     name:"go to school",
  //     date:"2024/04/06"
  //   },
  //   {
  //     name:"go to bank for money",
  //     date:"2024/04/07"
  //   }
  // ]
  const [todoitemlist,settodoitemlist] = useState([]);
  const newitem=(itemname,itemdata)=>{
    console.log(`new item:${itemname} date:${itemdata}`);
    const newvariable=[...todoitemlist,{name:itemname,date:itemdata}];
    settodoitemlist(newvariable);
  }
  const handledete=(itemdelte)=>{
   let newitemset=todoitemlist.filter(fil=>fil.name !=itemdelte);
   settodoitemlist(newitemset);
  }
  return (
<center className="todo-contianer">
  <Todonmae></Todonmae>
  
  <Todoitem handlebtn={newitem}></Todoitem>
  {todoitemlist==0&&<Eror></Eror>}
  <Todocontainer todoitemlist={todoitemlist} ondelteitem={handledete}></Todocontainer>
</center>
  
  )
}

export default App
