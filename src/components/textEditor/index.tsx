import  { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill's CSS
import "./style.css"
type TextEditorProps = {
    content: string,
    diable?: boolean
}
const TextEditor: React.FC<TextEditorProps> = ({content,diable=false}) => {
  const [value, setValue] = useState(content);

  return (
    <ReactQuill theme="snow" value={value} onChange={setValue} readOnly={diable} />
  );
};

export default TextEditor;
