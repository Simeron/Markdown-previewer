import React from 'react';
import './App.css';
let marked = require("marked");

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown: " ",
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }
  render() {

    return (
      <div className="App">
        <div className="app-container">
          <div className="heading-title">
            <h1>
              {" "}
                  Markdown Previewer
              </h1>
          </div>

          <div className="preview-boxes">
            <div className="display-box">
              {" "}
              <h4>
                Markdown Input
                </h4>
              <textarea className="input-style" value={this.state.markdown} onChange={(e) => { this.updateMarkdown(e.target.value) }}>
                {" "}
                {console.log(this.state.markdown)}
              </textarea>
            </div>

            <div className="display-box">
              {" "}
              <h4>
                Preview
                </h4>
              <div className="output-style" dangerouslySetInnerHTML={{ __html: marked(this.state.markdown), }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

