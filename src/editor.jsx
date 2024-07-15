import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import { Controlled as ContolledContainer } from "react-codemirror2";

import { useState } from "react";
export default function Editor(props) {
  const { dispName, value, language, onChange } = props;

  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  const [open, setOpen] = useState(true);

  return (
    <div className={`editorContainer ${open ? `` : `collapsed`}`}>
      <div className="editorTitle">
        {dispName}
        <button
          type="button"
          className="expand-collapse-button"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <ContolledContainer
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "material",
          lineNumbers: true,
        }}
      />
    </div>
  );
}
