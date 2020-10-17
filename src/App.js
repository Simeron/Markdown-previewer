import React, { useState } from 'react';
import './App.css';
let marked = require("marked");

const placeholdertext = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

export default function App (props) {

  const [markdown, setMarkdown] = useState(" ");
  const [markdownpreview] = useState(placeholdertext);


  const updateMarkdown = (markdown) => {
    setMarkdown(markdown);
  }


  function cleartheeditor() {
    const textarea = document.querySelector('.input-style');
    textarea.value = ' ';
  }

  function resetplaceholdertext() {
    const textarea = document.querySelector('.input-style');
    textarea.value = placeholdertext;
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
              <textarea className="input-style" defaultValue={markdownpreview} onChange={(e) => {updateMarkdown(e.target.value)}}>
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
          <button onClick={() => cleartheeditor()}>Clear notes</button>
          <button onClick={() => resetplaceholdertext()}>Reset place holder text</button>
        </div>
      </div>
    );
  }

//I have added the default value as the state I made for the markdown preview 
//I have commented out the children values for the time being
//markdown preview isn't currently show anything for default value which I have set so look into this
//defaultValue={markdownpreview} this is what I removed from the markdown text area the first one
//markdown now showing in preview till change happens
//tomorrow look up how to wireup a button to the editor 