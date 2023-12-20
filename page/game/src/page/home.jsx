import { useEffect, useState } from "react";
import Buttom from "../componen/buttom";
import Navbar from "../componen/navbar";
import { useNavigate } from "react-router-dom";

export default function Home(){
  const [username,setUsername] = useState('')

  function handlerSubmit(e){
    e.preventDefault()
    
  }

  // useEffect(()=>{
  //   handlerSubmit()
  // })

  return(
    <>
    <Navbar name='home'/>
      <div className="card d-flex bg-dark-subtle" style={{width:"45rem", height:"500px", margin:"60px auto", padding:"50px"}}>

        <div className="mb-3 p-7">
          <center><h1>Karapan Ketik</h1></center>
        </div>

        <div className="mb-3 ">
          <center>
            <img style={{blockSize:"150px"}} src="/game-ketik-crop.png"/>
          </center>
        </div>

      <form className="input-padding-x" onSubmit={handlerSubmit}>
        <div className="mb-3 p-1">
          <center>
            <label htmlFor="username" className="col form-label" >Username</label>
            <input onChange={(e)=> setUsername(e.target.value)} className="form-control" id="username" style={{width:"300px"}}/>
          </center>
        </div>
      </form>

        <div className="row">
          <div className="mb-3 p-2">
            
            <center>
            {/* <Buttom name='Start' action='/create'/> */}
            <Buttom name='Create' action='/create'/>
            <Buttom name='Join' action='/join'/>
            </center>
            
          </div>
        </div>

      </div>
    </>
  )
}