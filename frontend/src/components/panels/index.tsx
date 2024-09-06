import { ResizeBar } from './ResizeBar';
import { Panel, PanelProps } from './Panel';
import 'react-resizable/css/styles.css';
import "./style.css"
type PanelsProps = {
    left: PanelProps;
    right: PanelProps;
}
export const Panels : React.FC<PanelsProps> = ({left,right})=> { 
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        <ResizeBar >
            <Panel labels={left.labels} contents={left.contents} actions={left.actions}></Panel>
        </ResizeBar>
      <div className={"panel"} style={{flex:1}}>
            <Panel labels={right.labels} contents={right.contents} actions={right.actions}></Panel>
      </div>
    </div>
  );
}
