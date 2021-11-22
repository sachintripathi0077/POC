import React, { Component } from 'react'

export default class FormHeader extends Component {
    state = {
        profileImg: ''
    }
    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({ profileImg: reader.result })
                console.log(reader.result)
            }
        }
        var url = URL.createObjectURL(e.target.files[0])
        console.log(url)
        reader.readAsDataURL(e.target.files[0])
    };
    render() {
        const { profileImg } = this.state
        return (
            <div className="headerContainer">
                <div className="imageContainer">
                    <div className="img-holder">
                        <img src={profileImg} alt="Add Image" id="img" className="img" />
                    </div>
                    <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
                    <div className="label">
                        <label className="btn btn-outline-primary" htmlFor="input">
                            Choose Image
                        </label>
                    </div>
                </div>
                <div className="titleContainer">
                    <div class="input-group input-group-lg">
                        {/* <span className="input-group-text" id="inputGroup-sizing-lg"></span> */}
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Form Title Here"></input>
                    </div></div>
            </div>
        );
    }
}