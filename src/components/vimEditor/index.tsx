import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-chrome";
import "ace-builds/src-noconflict/keybinding-vim"; // Import Vim keybinding
import './style.css'
type VimEditorProps = {
 contents?: string,
 disable?: boolean, 
}
const VimEditor:React.FC<VimEditorProps> = ({contents,disable=false}) => {
  return (
    <AceEditor
      theme="chrome"
      name="ace-vim-editor"
      height="80vh"
      width="100%"
      fontSize={14}
      value= {contents ??"Type here with Vim keybindings..."}
      readOnly = {disable}
      highlightActiveLine = {!disable}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        useWorker: false,
        showLineNumbers: true,
        tabSize: 2,
        keyboardHandler: "ace/keyboard/vim", // Enable Vim mode
      }}
      onChange={(value) => {
        console.log("Code changed:", value);
      }}
    />
  );
};

export default VimEditor;
