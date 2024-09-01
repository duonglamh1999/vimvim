"use client";
import 'react-resizable/css/styles.css';
import './index.css'
import { ResizeBar } from './ResizeBar';
// import {Tab} from './Tab';
import { ReactElement, useState } from 'react';
import { Panel } from './Panel';
import ReplayIcon from '@mui/icons-material/Replay';
export default function LeetCodeStyleEditor() {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const leftPanel = ["Prompt", "Solution", "Discussion"]
  const rightPanel = ["Vim","Expected"]
  const contents = [
  <>One</>,
  <>two</>,
]
const actions = [
{component: <ReplayIcon/>,
label:"Reset to default"
 }
]
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        <ResizeBar >
            <Panel labels={leftPanel} contents={contents}></Panel>
        </ResizeBar>
      <div className={"panel"} style={{flex:1}}>
            <Panel labels={rightPanel} contents={contents} actions={actions}></Panel>
      </div>
    </div>
  );
}

