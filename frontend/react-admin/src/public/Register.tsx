import React, {Component, SyntheticEvent} from 'react';
import './Public.css';
import axios from 'axios';

class Register extends Component {
    nickname='';
    email='';
    password='';
    password_confirm='';

    submit = async (e: SyntheticEvent)=>{
        e.preventDefault();
        const response = await axios.post('http://localhost:8000/api/register', {
            nickname: this.nickname,
            email: this.email,
            password: this.password,
            password_confirm: this.password_confirm,
        });
        console.log(response);
    }

    render(){
        return(
            <form className="form-signin" onSubmit={this.submit}>
              <h1 className="h3 mb-3 font-weight-normal">Please register in</h1>
              <label  htmlFor="nickName" className="sr-only">Nick Name</label>
              <input type="text" id="nickName" className="form-control" placeholder="Nick Name" required
                onChange={e=>this.nickname = e.target.value}/>

              <label  htmlFor="inputEmail" className="sr-only">Email address</label>
              <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required
                onChange={e=>this.email = e.target.value}/>

              <label  htmlFor="inputPassword" className="sr-only">Password</label>
              <input type="password" id="inputPassword" className="form-control" placeholder="Password" required
                onChange={e=>this.password = e.target.value}/>

              <label  htmlFor="passwordConfirm" className="sr-only">Password Confirm</label>
              <input type="password" id="passwordConfirm" className="form-control" placeholder="Password Confirm" required
                onChange={e=>this.password_confirm = e.target.value}/>

              <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
           </form>

        )
    }
}

export default Register;