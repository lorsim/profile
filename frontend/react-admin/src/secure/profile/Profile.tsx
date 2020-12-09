import React, {Component, SyntheticEvent} from 'react';
import Wrapper from '../Wrapper';
import ImageUpload from '../components/ImageUpload';
import axios from 'axios';


class Profile extends Component {
    state = {
        nickname:'',
        image:'',
    }

    nickname='';
    image='';

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

    imageChanged =(image:string)=>{
        this.image = image;

        this.setState(state=>({...state,
            image:this.image
        }))
    }



    render() {
        return (
            <div>
                <Wrapper>
                    <h1>Welcome, {this.state.nickname}</h1>
                    <h4>Update Profile Information</h4>
                    <hr/>
                    <form onSubmit={this.updateInfo}>
                        <div className="form-group">
                            <label>NickName </label>
                            <input type="text" name="nickname"
                               defaultValue={this.nickname = this.state.nickname}
                              onChange={e=> this.nickname =e.target.value}/>
                        </div>
                        <button className="btn btn-primary">Save</button>
                    </form>
                    <br/>

                    <hr/>
                        <div className="form-group">
                            <label>Profile Image</label>
                            <ImageUpload value={this.image = this.state.image}
                                 imageChanged ={this.imageChanged} />

                        </div>
                </Wrapper>
            </div>
        );
    }
}

export default Profile;