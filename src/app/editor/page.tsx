"use client";
import ReplayIcon from '@mui/icons-material/Replay';
import { Panels } from '@/components/panels';
import { PanelProps } from '@/components/panels/Panel';
export default function SolvingPage() { 
  const contents = [
  <>One</>,
  <>tw2222222o</>,
  <>Coming soon </>,
]
  const left:PanelProps = {
    labels:["Prompt", "Solution", "Discussion"],
    contents : contents,
  }
  const right:PanelProps = {
    labels: ["Vim","Expected"],
    contents : contents,
    actions:[
   {component: <ReplayIcon/>,
   label:"Reset to default"
    }]
  }
  return (
    <Panels left={left} right={right}></Panels>
  );
}

