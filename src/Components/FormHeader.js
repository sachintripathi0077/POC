import React, { Component } from "react";
import { postFormHeader } from "../Redux/actions";
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


class FormHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImg: "",
      title: '',
      desc: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
//_____________________________________________________________________________________
  // getData(){
  //   if(this.props.headerContent.title === "" || this.props.headerContent.profileImg === "" || this.props.headerContent.desc === ""){
  //     this.setState({title:this.props.headerContent.title, profileImg:this.props.headerContent.profileImg, desc:this.props.headerContent.desc},() => (this.props.headerContent(this.state)))
  //     console.log(this.state.title)
  //   }
  // }
  // componentDidMount(){
  //   this.getData();
  // }
//_____________________________________________________________________________________


  handleImage = (event) => {
    var url = URL.createObjectURL(event.target.files[0]);
    this.setState({
      profileImg: url,
    }, () => (this.props.headerContent(this.state)));
  };

  handleChange = (e) => {
    const titl = e.target.value
    // console.log(e.target.value);
    this.setState({ title: e.target.value }, () => (this.props.headerContent(this.state)))
    // this.setState({ title: e.target.value });
  };
  // setTitle = (titl) => {
  //   this.setState({ title: titl });
  //   this.props.headerContent(this.state);
  // }

  handleDesc = (e) => {
    this.setState({ desc: e.target.value }, () => (this.props.headerContent(this.state)));
    console.log(this.state.desc);
    this.props.headerContent(this.state);
  }

  render() {
    // const { profileImg } = this.state
    return (
      <div className="headerContainer">
        <div className="imageContainer">
          <div className="img-holder">
            <img
              src={this.state.profileImg}
              id="img"
              className="img"
              onError={(event) => event.target.style.display = 'none'}
              onLoad={(event) => event.target.style.display = 'inline-block'}
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
            <label className="btn btn-primary" htmlFor="input">
              Choose Image
            </label>
          </div>
        </div>
        <div className="titleContainer">
          <div class="input-group input-group-lg">
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
          <div class="input-group input-group-sm">
            <input type="text" class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Description"
              onChange={this.handleDesc}
              value={this.state.desc}
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