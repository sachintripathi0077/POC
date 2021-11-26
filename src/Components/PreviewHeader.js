import React, { Component } from "react";
import { connect } from "react-redux";

class PreviewHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImg: props.headerContent ? props.headerContent.profileImg : "",
      title: props.headerContent ? props.headerContent.title : "",
      desc: props.headerContent ? props.headerContent.desc : "",
    };
  }

  renderHeader() {
    if (!this.state.profileImg) {
      return (
        <div className="headerContainer">
          <div className="titleCont">
            <div className="headDescriptionPos">
              <h1>{this.state.title}</h1>
              <h4>{this.state.desc}</h4>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="headerContainer">
          <div className="imageContainer">
            <div className="img-holder">
              <img
                src={this.state.profileImg}
                id="img"
                className="img"
                onError={(event) => (event.target.style.display = "none")}
                onLoad={(event) =>
                  (event.target.style.display = "inline-block")
                }
              />
            </div>
          </div>
          <div className="titleContainer">
            <h1>{this.state.title}</h1>
            <h4>{this.state.desc}</h4>
          </div>
        </div>
      );
    }
  }
  render() {
    return <div>{this.renderHeader()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    headerContent: state.headerContent,
  };
};
export default connect(mapStateToProps)(PreviewHeader);
