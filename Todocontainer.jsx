import Todo from "./Tdoitem";

const Todocontainer=({todoitemlist,ondelteitem})=>{
  return(

    <div className="item-container">
      {todoitemlist.map(item=>
         <Todo itemlist1={item.name}  dateitem={item.date} key={item.name} ondelteitem={ondelteitem} ></Todo>
      )}
  </div>
  )
}
export default Todocontainer;