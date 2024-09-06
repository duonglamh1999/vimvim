import { useEffect, useState } from "react";
import { ResizableBox } from "react-resizable";

export const ResizeBar:React.FC<React.PropsWithChildren<{}>> = ({children}) => {
    const [width, setWidth] = useState(0); // Initial width of the left pane
    useEffect(() => {
        const initialWidth = window.innerWidth * 0.5;
        setWidth(initialWidth);
    }, []);
    const onResize = (_event: any, { size}: any) => {
    setWidth(size.width);
  };

    return <ResizableBox 
        className="panel"
        width={width}
        height={Infinity}
        axis="x"
        resizeHandles={['e']}
        onResize={onResize}
        handle={
          <div
            className="resizable-handle"
            style={{
              position: 'absolute',
              right: "-6px",
              top: 0,
              bottom: 0,
              width: '2px',
              cursor: 'col-resize'
            }}
            />}
        >
            {children}
        </ResizableBox>
}