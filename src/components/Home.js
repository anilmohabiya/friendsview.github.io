import React,{Component} from 'react';
import {Navbar, Nav} from "react-bootstrap"

   
import NavBarMenu from "./NavBarMenu"
import image from './image.jpg';
class Home extends Component{
      constructor()
    {
     super()
        this.state={
             name:null,
            message:null,
            message1:null,
        }
    }
    
  create()
    {
        {
        fetch("http://localhost:3000/inbox",{
          method:"Post",
            headers:{
              'Content-Type':'application/json'  
            },
          body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
              alert('your message is send ')
            })

        })
             
    }
    }
       
    render(){
        return(
      <div className="h5">
             
             <NavBarMenu/>
             <img  src={image}alt="anil" /> <br/><br/>
              
             <input onChange={(event)=>{this.setState({name:event.target.value}) }} placeholder="Enter your name"/> <br/><br/>
            <textarea name="message" onChange={(event)=>{this.setState({message:event.target.value}) }} placeholder="Enter your message"/> <br/><br/>
            <textarea name="message" onChange={(event)=>{this.setState({message1:event.target.value}) }} placeholder="I am your"/> <br/><br/>
            <button onClick={()=>{this.create()}} >send</button> 
         
            </div>
        );
    }
} 
export default Home; 