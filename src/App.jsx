import "./App.css";
import React, { useState, useEffect } from "react";
import Editor from "./editor";
function App() {
  const [html, sethtml] = useState("");
  const [css, setcss] = useState("");
  const [js, setjs] = useState("");
  const [source, setSource] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSource(`
  <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
  </html>`);
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <div className="panel top-panel">
        <Editor
          language="xml"
          dispName="HTML"
          value={html}
          onChange={sethtml}
        />
        <Editor language="css" dispName="CSS" value={css} onChange={setcss} />
        <Editor
          language="javascript"
          dispName="Javascript"
          value={js}
          onChange={setjs}
        />
      </div>
      <div className="panel">
        <h2>Output:</h2>
        <iframe
          srcDoc={source}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
