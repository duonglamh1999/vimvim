"use client";
import { Panels } from '@/components/panels';
import { PanelProps } from '@/components/panels/Panel';
import LevelDropDown from '@/components/levelDropdown';
import VimEditor from '@/components/vimEditor';
import TextEditor from '@/components/textEditor';
import { TextField } from '@mui/material';
export default function CreatePage() { 
  const contents = [
  <PromptContent/>,
  <TextEditor content="Solution?? What's that?"/>, 
  <>Coming Soon :(</>,
]

  const left:PanelProps = {
    labels:["Prompt", "Solution", "Discussion"],
    contents : contents,
    actions:[{component:<LevelDropDown/>}]
  }
  const right:PanelProps = {
    labels: ["Vim","Expected"],
    contents : [
    <VimEditor contents='Thou shall show them the begining'/>,
    <VimEditor contents='Thou shall show them the end result'/>,
],
  }
  return (
    <Panels left={left} right={right}></Panels>
  );
}

const PromptContent  = ({diable=false}) => {
    return <>
    <TextField label="Title"/>
    <TextEditor content='May the prompt be with you'/>
    </>
}
