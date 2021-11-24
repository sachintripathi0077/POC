import React, { Component } from "react";
import { connect } from "react-redux";

class PreviewHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImg: props.headerContent ? props.headerContent.profileImg : "",
      title: props.headerContent ? props.headerContent.title : "",
    };
  }
  componentDidMount() {
    console.log(this.props.headerContent);
  }
  // headerContent = state.headerContent;
  render() {
    return (
      <div>
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
          </div>
          <div className="titleContainer">
            <h1>{this.state.title}</h1>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    headerContent: state.headerContent,
  };
};
export default connect(mapStateToProps)(PreviewHeader);
