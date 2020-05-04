import React,{Component} from 'react';
import NavBarMenu from "./NavBarMenu"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'


class ResturentList extends Component{
    constructor()
    {
        super();
        this.state={
            list:null,
            
        }
    }
    componentDidMount(){
        this.getData()     //create a function that automaic refresh while delete
    }
    getData()
    {
        fetch("http://localhost:3000/resturent").then((response)=>{
            response.json().then((result)=>{
                //console.warn(result)....///it use for print the api value thats show in console
                this.setState({list:result})   //nd the value which is show in console used to setin a result
                 
            })
        })

        
    }
    delete(id)
    {
        fetch("http://localhost:3000/resturent/"+id,
              {
            method:"DELETE",
//            headers:{
//            'Content-Type':'application/json'  
//        },
//             
        }).then((result)=>{
            result.json().then((resp)=>{
              alert('Resturent has been Delete')
              this.getData() // for you want to refresh the page while delete the record
            })
        })       
             
            
    }
    render(){
       //console.warn(this.state) //use to print the object name in api
        return(
        <div>
            <NavBarMenu />
            <h1>Resturent List</h1>
            {
               this.state.list? // put a condition on it if value is present in a list
            <div>
             <Table striped bordered hover>
            <thead>
            <tr>
            <th>#</th>
            <th> Name</th>
            <th>Email</th>
            <th>Rating</th>
            <th>location</th>
            <th>operation</th>
            </tr>
            </thead>
             <tbody>
             {
              this.state.list.map((item,i)=> //list.map like while loop for printing the value
             <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.rating}</td>
            <td>{item.address}</td>
            <td><Link to={"/update/"+item.id}><FontAwesomeIcon icon={faEdit}color="green"/></Link>
            <span onClick={()=>{this.delete(item.id)}}> <FontAwesomeIcon icon={faTrash}color="orange"/></span></td> 
                  
             </tr>
        
          
             )
            }
             </tbody>
             </Table>
            
            </div>
            :<p>please wait...</p>
            }
        
            </div>
        );
    }
} 
export default ResturentList; 

