import React, { Component } from "react";
import { CSVLink } from "react-csv";

const headers = [
  { label: "Question", key: "label" },
  { label: "Response", key: "response" },
];

const responses = [];

class ToCSV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.csvLinkEl = React.createRef();
  }

  getUserList = () => {
    return fetch("http://localhost:3080/responses").then((res) => res.json());
  };

  downloadReport = async () => {
    const posts = await this.getUserList();
    posts.forEach((d) => {
      d.forEach((r) => {
        responses.push(r);
      });
    });

    this.setState({ data: responses }, () => {
      setTimeout(() => {
        this.csvLinkEl.current.link.click();
      });
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <button
          type="button"
          type="button"
          className="btn btn-primary"
          onClick={this.downloadReport}
        >
          <CSVLink
            headers={headers}
            filename="Report.csv"
            data={data}
            ref={this.csvLinkEl}
          />
          Export to CSV
        </button>
      </div>
    );
  }
}

export default ToCSV;
