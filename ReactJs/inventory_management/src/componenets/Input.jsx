import "../App.css";

export const Input=({text,setText,handleFinalList,handleOrderdList})=>{
    return <div className="main">
         <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} placeholder="Add Items" />
        <button onClick={()=>{handleFinalList({text},false)}}>Add to Current List</button>
        <button onClick={()=>{handleOrderdList()}}>Add to Ordered List</button>
    </div>
}