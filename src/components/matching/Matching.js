import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from "axios";
import {useEffect, useState} from "react";
import LessonMatching from "./LessonMatching";

async function getLessons(set_lessons) {
    axios.get("/lessons")
        .catch(error => alert(error.message))
        .then(data => {
            if (data != null) {
                set_lessons(data.data);
            } else {
                alert("Unable to fetch Lessons!");
            }
        });
}


function TabPanel(props) {
    const { children, value, index, ...other } = props;


    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        if (lessons && lessons.length === 0)
            getLessons(setLessons)
    }, [lessons]);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const onSave = (saved) =>{

    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="TUE" {...a11yProps(0)} />
                    <Tab label="WED" {...a11yProps(1)} />
                    <Tab label="THU" {...a11yProps(2)} />
                    <Tab label="SUN1" {...a11yProps(3)} />
                    <Tab label="SUN2" {...a11yProps(4)} />
                    <Tab label="SUN3" {...a11yProps(5)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                {
                    lessons.map( lesson =>
                        <LessonMatching key={"lesson-" + lesson.id } lesson={lesson} onSave={onSave}/>
                    )
                }
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </Box>
    );
}