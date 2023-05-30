import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const CodeEditorWindow = ({ onChange, language, theme, code }) => {
  const [value, setValue] = useState(code || "");
  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height="90vh"
        width={`100%`}
        language={language || "C"}
        value={value}
        theme={theme}
        defaultValue="//comments"
        onChange={handleEditorChange}
      />
    </div>
  );
};
export default CodeEditorWindow;
