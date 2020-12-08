import React, {Component, SyntheticEvent} from 'react';
import Wrapper from '../Wrapper';
import axios from 'axios';


class Profile extends Component {
    state = {
        nickname:''
    }

    nickname='';

    componentDidMount =async() =>{
        const response = await axios.get('user');

        const user = response.data.data
        this.setState(state=>({...state,
            nickname: user.nickname,
        }))
    }

    updateInfo = async(e: SyntheticEvent)=>{
        e.preventDefault();
         await axios.put('users/info', {
            nickname: this.nickname,
        });

    }

    render() {
        return (
            <div>
                <Wrapper>
                    <h2>Profile Information</h2>
                    <hr/>
                    <form onSubmit={this.updateInfo}>
                        <div className="form-group">
                            <label>NickName </label>
                            <input type="text" name="nickname"
                               defaultValue={this.nickname = this.state.nickname}
                              onChange={e=> this.nickname =e.target.value}/>
                        </div>
                        <button className="btn btn-outline-secondary">Save</button>
                    </form>
                </Wrapper>
            </div>
        );
    }
}

export default Profile;