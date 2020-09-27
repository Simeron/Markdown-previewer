import React, { useState } from 'react';
import './App.css';
let marked = require("marked");

export default function App (props) {

  const [markdown, setMarkdown] = useState(" ");

  const updateMarkdown = (markdown) => {
    setMarkdown(markdown);
  }

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
              <textarea className="input-style" value={markdown} onChange={(e) => {updateMarkdown(e.target.value) }}>
                {" "}
                {console.log(markdown)}
              </textarea>
            </div>

            <div className="display-box">
              {" "}
              <h4>
                Preview
                </h4>
              <div className="output-style" dangerouslySetInnerHTML={{ __html: marked(markdown), }}></div>
            </div>
          </div>
        </div>
      </div>
    );
}

