import React,{Component} from 'react';
        import NavBarMenu from "./NavBarMenu"
class Login extends Component{
    constructor(){
        super();
        this.state={
            name:'',
          //  password:''
        }
    }
    login()
    {
    console.warn(this.state)
     fetch ("http://localhost:3000/Login?q="+this.state.name)
            .then((data)=>{
             data.json().then((resp)=>{
                 console.warn("resp",resp)
                 if(resp.length>0)
                     {
                         localStorage.setItem('login' ,JSON.stringify(resp))
                         console.warn(this.props.history.push('list'))
                     }
                 
                 else
                 {
                     alert("please check username and password")
                 }
                
                 
             })
     })
          
    }
    render(){
        return(
        <div>
            <NavBarMenu/>
            
           
            <input type="text" placeholder="only admin can do" name="user" onChange={(event)=>this.setState({name:event.target.value})} /> <br/> <br/>
            {/* <input type="password" placeholder="enter password" name="password" onChange={(event)=>this.setState({password:event.target.value})} />   <br/> <br/>  */}
              <button onClick={()=>{this.login()}}> Login</button>
            </div>
        );
    }
} 
export default Login; 