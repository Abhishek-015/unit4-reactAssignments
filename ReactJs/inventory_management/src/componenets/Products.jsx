import axios from "axios"
import { useState } from "react"
import { Input } from "./Input"
import { ShowAll } from "./ShowData"

export const Products=()=>{

    const [text,setText]=useState("")
    const [data,setData]=useState([])
    const [toggle,setToggle]=useState(false)
    

    const getData= async (params)=>{
        const {data}= await axios.get(`http://localhost:3001/${params}`)
        setData(data)
        setToggle((previous)=>!previous)
    }

    const handleFinalList= async ({text},status)=>{
        if(text===""){
            alert("Input feild cannot be empty")
        }else{
            console.log("awaiting")
            await axios.post("http://localhost:3001/currentlist",{
                title:text,
                status:status
            });
            setText("")
        }
        
    }
    const handleOrderdList= async ()=>{
        if(text===""){
            alert("Input feild cannot be empty")
        }else{
            console.log("awaiting")
            await axios.post("http://localhost:3001/orderedlist",{
                title:text,
                status:true
            });
            setText("")
        }
        
    }
    const orderedList=async({id,title,status})=>{
             await axios.delete(`http://localhost:3001/orderedlist/${id}`)
             getData("orderedlist");

             await axios.post("http://localhost:3001/currentlist",{
                 title:title,
                 status:!status
             })
    }

    const currentList=async({id})=>{
        await axios.patch(`http://localhost:3001/currentlist/${id}`,{
            status:"stockOut"
        })
        setText("");
        getData("currentlist")
    }

    const deleteItems=async(id,params)=>{
       await axios.delete(`http://localhost:3001/${params}/${id}`)
         getData(params)
    }
  return <div className="product">
        <h1>Inventory Management</h1>
        <Input text={text} setText={setText}handleFinalList={handleFinalList} handleOrderdList={handleOrderdList}/>
        <ShowAll getData={getData} orderedList={orderedList} currentList={currentList} data={data} deleteItems={deleteItems} toggle={toggle} />
    </div>
}