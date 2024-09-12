import "./App.css";
import React, { useState, useEffect } from "react";
import Editor from "./editor";
function App() {
  const initialHtml = localStorage.getItem("html") || "";
  const initialCss = localStorage.getItem("css") || "";
  const initialJs = localStorage.getItem("js") || "";

  const [html, sethtml] = useState(initialHtml);
  const [css, setcss] = useState(initialCss);
  const [js, setjs] = useState(initialJs);
  const [source, setSource] = useState(`
  <html>
    <body>${initialHtml}</body>
    <style>${initialCss}</style>
    <script>${initialJs}</script>
  </html>`);
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
  useEffect(() => {
    localStorage.setItem("html", html);
  }, [html]);
  useEffect(() => {
    localStorage.setItem("js", js);
  }, [js]);
  useEffect(() => {
    localStorage.setItem("css", css);
  }, [css]);

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
      <h2>Output:</h2>
      <div className="panel">
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
