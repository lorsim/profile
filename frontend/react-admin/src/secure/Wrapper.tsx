import React, {Component} from 'react';
import Nav from "./components/Nav";
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Wrapper extends Component {
  state ={
        redirect:false
  }

  componentDidMount = async()=>{
    try{
       const response = await axios.get('user');
       console.log(response);
    } catch(e) {
        this.setState(state=>({...state,
            redirect:true
        })
        );
    }

  }

  render(){
    if (this.state.redirect){
          return <Redirect to ='/login'/>;
    }
    return (
        <>
            <Nav/>

            <div className="container-fluid">
            <div className="row">
                {this.props.children}

            </div>
            </div>
        </>
    )
  }
}

export default Wrapper;