import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {

  Modal,
 

} from 'reactstrap';
import { FaRegHeart,FaSearch } from "react-icons/fa";
import {BsBag } from "react-icons/bs";

import './sty.css';

class Navbar extends Component{
    constructor()
    {
       super();
        this.state = {
            show:false,
            setShow:false,
        }
    }
    
    Show=()=>
    {
      this.setState({show:!this.state.show})
    }
    setShow=()=>
    {
      this.setState({setShow:!this.state.setShow})
    }
    render(){
       
        return(
            <>
       

           
             
              <Modal  isOpen={this.state.show} toggle={this.Show} fade={false} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                size="lg" style={{maxWidth: '450px', width: '100%',marginTop:'80px'}} >
                 
             
                    <div style={{display:'flex',flexDirection:'column',alignItems: 'center',paddingTop:'30px',  justifyContent: 'center'}} >

                   <div style={{display:'flex',width:'270px',marginLeft:'130px',justifyContent:'space-between',alignSelf:'right'}}>  
                   <img  src="./t.PNG"/>
                    <button className=" bt" onClick={this.Show} style={{alignSelf:'right'}}>X</button>
            
            </div>
  <br/>
                               <p style={{fontFamily:"fantasy"}}>YOUR ACCOUNT FOR<br/>&nbsp;&nbsp;EVERYTHING NIKE</p>
                             
                               <input style={{width:"300px",height:"40px"}} type="text" placeholder="Email Address"/><br/>
                               <input style={{width:"300px",height:"40px"}} type="password" placeholder="Password"/><br/>
                               <div><input type="checkbox" />&nbsp;&nbsp;&nbsp;<span>Keep me signed in &nbsp;&nbsp; forgot passsword?</span> </div>
                               
                              <br/>
                              <p>By logging in, you agree to Nike's <u>Privacy Policy</u><br/> and <u>Terms of Use.</u></p>
                                    <button  style={{width:"300px",height:"40px",backgroundColor:"black",color:"white"}}>Signin</button><br/>
                                    <p>Not a Member? <u>Join Us.</u></p>

                </div>

           
                </Modal>
          
               
              <Modal  isOpen={this.state.setShow} toggle={this.setShow} fade={false} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                size="lg" style={{maxWidth: '100%',marginTop:'0px',height:'20vh'}} >
                 <div>
                 <img className="jordann"  src="./t.PNG"/>
                 <FaSearch  style={{height:'35px',width:'35px',padding:'8px'}} />
                       
                        <input type="text"className="bt" placeholder="search"/>
                    <button className=" bt left" onClick={this.setShow} style={{alignSelf:'right'}}>X</button>
                    </div>
            <div style={{height:'20vh'}}></div>
          
  <br/>
  
  

               

           
                </Modal>
               
        

        
        
        
         <div className="d-sm-none d-md-block  "> 
        <img  className="jordan" src="./../j.PNG" width="30px" />
        <span className="left">
        <button className="bt">Help</button> |
        <button className="bt" >Join Us</button> |
        <button className="bt"onClick={this.Show}>Sign In</button>
        </span>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light ">
        <img  className="jordann" src="./../t.PNG"  />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div  style={{flex:1,justifyContent: "center",alignItems: "center"}} className="collapse navbar-collapse" id="navbarSupportedContent" >
  
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#"  style={{color:'black'}}>Men </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" style={{color:'black'}} href="#">Women</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" style={{color:'black'}} href="#">Kids</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" style={{color:'black'}} href="#">Customise</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" style={{color:'black'}} href="#">Sales</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" style={{color:'black'}} href="#">SNKRS</a>
      </li>
     
     
    </ul>
  <div className="left">
    <FaSearch  style={{height:'35px',width:'35px',padding:'8px'}} />
    <input class="bt" type="text" placeholder="Search" onClick={this.setShow} />
    <FaRegHeart  style={{height:'35px',width:'35px',padding:'8px'}} />
    <BsBag style={{height:'35px',width:'35px',padding:'8px'}}/>
</div>
  </div>
</nav>

       </>

    );
        }
    
}
export default withRouter(Navbar);