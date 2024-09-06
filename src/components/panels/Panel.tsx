import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, IconButton, Tab, Tooltip } from "@mui/material"
import { ReactElement, useState } from "react";

export type PanelProps ={
    labels: String[];
    contents: ReactElement[];
    actions?: Action[];
}
type Action = {
    component: ReactElement;
    label?:String
}
export const Panel:React.FC<PanelProps> = ({labels,contents, actions}) => {
     const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
    return <Box sx={{ width: '100%', typography: 'body1' }} >
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} >
            {labels.map((x,index) => (
                <Tab key={index} label={x} value ={`${index+1}`}  />
            ))}
            <div className="actions">
                {actions?.map((x,index) => 
                    <Tooltip key={index } title={x.label}>
                        <IconButton >{x.component}</IconButton>
                    </Tooltip>
                )}
            </div>
            </TabList>
        </Box>
        {contents.map((x,index) => (
            <TabPanel key={index} value={`${index+1}`}>{x}</TabPanel>
        ))}
    </TabContext>
    </Box>
}