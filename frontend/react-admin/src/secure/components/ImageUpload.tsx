import React, {Component} from 'react';
import axios from 'axios';


class ImageUpload extends Component<{value:string, imageChanged:any}>{
    image ='';

    upload = async (files: FileList | null) =>{
        if (files === null) return;

        const data = new FormData();
        data.append('image', files[0]);

        const response = await axios.post('upload', data);

        this.image = response.data.url;

        this.props.imageChanged(this.image);
    }

    render() {
        return(
            <div className="form-group">
               <img src={"http://localhost:8000" + this.props.value} width="100" />
                 <input type="text" name="image"
                       value={this.image = this.props.value}
                       onChange={e => {
                             this.image = e.target.value;
                             this.props.imageChanged(this.image);
                       }} />

                <div className="form-group">
                    <label className="btn btn-primary">
                        Upload <input type="file" hidden onChange={e=> this.upload(e.target.files)} />
                    </label>
                </div>
            </div>
        );
    }
}

export default ImageUpload;