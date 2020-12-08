import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Nav extends Component{
    state ={
        redirect:false
    }

    handleClick = async() =>{
        await axios.post('logout', {})

        this.setState(state=>({...state,
            redirect:true
        })
        );
    }

    render(){
        if (this.state.redirect){
          return <Redirect to ='/login'/>;
        }
        return(
            <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p--1">
            <a className="navbar-brand col-sm-4 col-md-2 mr-0" href="#">Social</a>
            <a className="nav-link"  href="#" onClick={this.handleClick}>Sign out</a>
            </nav>
        )
    }
}

export default Nav;