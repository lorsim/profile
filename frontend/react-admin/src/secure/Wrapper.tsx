import React, {Component} from 'react';
import Nav from "./components/Nav";

class Wrapper extends Component {
  render(){
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