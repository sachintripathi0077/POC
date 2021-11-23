
import React, { Component } from "react";
import { postFormHeader } from "../Redux/actions";
import { connect } from "react-redux";

class FormHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImg: "",
      title: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  

  handleImage = (event) => {
    var url = URL.createObjectURL(event.target.files[0]);
    this.setState({
      profileImg: url,
    });
    this.state.profileImg = url;
    console.log(this.state.profileImg);
    this.props.headerContent(this.state);
  };

  handleChange = (e) => {
    this.setState({ title: e.target.value });
    console.log(this.state.title);
    this.props.headerContent(this.state);
  };
  render() {
    // const { profileImg } = this.state
    return (
      <div className="headerContainer">
        <div className="imageContainer">
          <div className="img-holder">
            <img
              src={this.state.profileImg}
              alt="Add Image"
              id="img"
              className="img"
            />
          </div>
          <input
            type="file"
            accept="image/*"
            name="image-upload"
            id="input"
            onChange={this.handleImage}
          />
          <div className="label">
            <label className="btn btn-outline-primary" htmlFor="input">
              Choose Image
            </label>
          </div>
        </div>
        <div className="titleContainer">
          <div class="input-group input-group-lg">
            {/* <span className="input-group-text" id="inputGroup-sizing-lg"></span> */}
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              placeholder="Form Title Here"
              onChange={this.handleChange}
              value={this.state.title}
            ></input>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    headerContent: (headerContent) => dispatch(postFormHeader(headerContent)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormHeader);
