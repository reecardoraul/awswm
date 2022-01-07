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
import Backdrop from "@mui/material/Backdrop";

async function getYearInfo(set_lessons, set_loading) {
    axios.get("/yearinfo")
        .catch(error => alert(error.message))
        .then(data => {
            if (data != null) {
                set_lessons(data.data);
                set_loading(false);
            } else {
                alert("Unable to fetch Lessons!");
            }
        });
}

async function add_new_lesson(lesson, callback) {
    let wrapper = { lesson: lesson };
    axios.post("/lessons", wrapper )
        .catch(error => alert(error.message))
        .then(data => {
            if (data != null) {
                callback(data.data);
            } else {
                alert("Unable to save new lesson");
            }
        });
}

async function save_lesson(lesson, callback) {
    let wrapper = { lesson: lesson };
    axios.put("/lessons/" + lesson.id, wrapper )
        .catch(error => alert(error.message))
        .then(data => {
            if (data != null) {
                callback(data.data);
            } else {
                alert("Unable to update lesson");
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
                    {children}
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
    const [loading, set_loading] = React.useState(true);
    const [value, setValue] = React.useState(0);

    const [yearInfo, setYearInfo] = useState([]);

    useEffect(() => {
        if (yearInfo && yearInfo.length === 0) {
            set_loading(true);
            getYearInfo(setYearInfo, set_loading)
        }
    }, [yearInfo, loading]);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const afterLessonSaved = () => {
        getYearInfo(setYearInfo, set_loading);
    }


    const onSave = (saved) => {
        saved.year = yearInfo.year;
        set_loading(true);
        if( saved.id ){
            save_lesson(saved, afterLessonSaved)
        }else {
            add_new_lesson(saved, afterLessonSaved)
        }
    }

    const tabPanel = () => {
        return <Box sx={{width: '100%'}}>
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={loading}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
            <Typography variant='caption' sx={{fontSize: 24}} color="text.secondary">Matching
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
                <MatchingLessons
                    timeslot="TUE"
                    onSave={onSave}
                    yearInfo={yearInfo}
                />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <MatchingLessons timeslot="WED" onSave={onSave}
                                 yearInfo={yearInfo}
                />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <MatchingLessons timeslot="THU" onSave={onSave}
                                 yearInfo={yearInfo}
                />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <MatchingLessons timeslot="SUN1"
                                 onSave={onSave}
                                 yearInfo={yearInfo}
                />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <MatchingLessons timeslot="SUN2" onSave={onSave}
                                 yearInfo={yearInfo}
                />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <MatchingLessons timeslot="SUN3" onSave={onSave}
                                 yearInfo={yearInfo}
                />
            </TabPanel>
        </Box>
    }

    if (yearInfo && yearInfo.length === 0) {
        return <CircularProgress/>
    } else {
        return tabPanel();
    }
}