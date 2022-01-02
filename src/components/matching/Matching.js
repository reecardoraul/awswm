import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from "axios";
import {useEffect, useState} from "react";
import MatchingLessons from "./MatchingLessons";
import CircularProgress from "@mui/material/CircularProgress";

async function getYearInfo(set_lessons) {
    axios.get("/yearinfo")
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
    const {children, value, index, ...other} = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
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

    const [yearInfo, setYearInfo] = useState([]);

    useEffect(() => {
        if (yearInfo && yearInfo.length === 0)
            getYearInfo(setYearInfo)
    }, [yearInfo]);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const onSave = (saved) => {

    }

    const tabPanel = () => {
        return <Box sx={{width: '100%'}}>
            <Typography variant='caption' sx={{fontSize: 24}} color="text.secondary" gutterBottom>Matching
                - {yearInfo.year}</Typography>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
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
                <MatchingLessons onSave={onSave()}
                                 lesson_master={yearInfo.lesson_master}
                                 peeps={yearInfo.people}
                                 lessons={yearInfo.lessons.filter(lesson => lesson.timeslot === "TUE")}
                />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <MatchingLessons onSave={onSave()}
                                 lesson_master={yearInfo.lesson_master}
                                 peeps={yearInfo.people}
                                 lessons={yearInfo.lessons.filter(lesson => lesson.timeslot === "WED")}
                />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <MatchingLessons onSave={onSave()}
                                 lesson_master={yearInfo.lesson_master}
                                 peeps={yearInfo.people}
                                 lessons={yearInfo.lessons.filter(lesson => lesson.timeslot === "THU")}
                />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <MatchingLessons onSave={onSave()}
                                 lesson_master={yearInfo.lesson_master}
                                 peeps={yearInfo.people}
                                 lessons={yearInfo.lessons.filter(lesson => lesson.timeslot === "SUN1")}
                />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <MatchingLessons onSave={onSave()}
                                 lesson_master={yearInfo.lesson_master}
                                 peeps={yearInfo.people}
                                 lessons={yearInfo.lessons.filter(lesson => lesson.timeslot === "SUN2")}
                />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <MatchingLessons onSave={onSave()}
                                 lesson_master={yearInfo.lesson_master}
                                 peeps={yearInfo.people}
                                 lessons={yearInfo.lessons.filter(lesson => lesson.timeslot === "SUN3")}
                />
            </TabPanel>
        </Box>
    }

    if (yearInfo && yearInfo.length === 0){
        return <CircularProgress />
    }else {
        return tabPanel();
    }
}