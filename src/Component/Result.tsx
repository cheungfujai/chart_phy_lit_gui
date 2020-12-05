import React, {useEffect}from 'react';
import Box from '@material-ui/core/Box';
import ChartPhyButtonGroup from './ChartPhyButton';
import RadarChart from '../Component/Chart/RadarChart/RadarChart';

export default function Result() {

    /// [POST] /v1/result/
    useEffect(()=>{

    })

    return (
        <Box color="text.primary" style={{ padding: "20px", }}>
            <h1>Result</h1>
            <RadarChart />
        </Box>        
    );
}