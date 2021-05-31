import React, { useEffect } from 'react';
import * as Chart from 'chart.js';
import classes from './RadarChart.module.css';
import { Profile } from '../../../types/store/QuestionStore';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducer';
import { Box, Button, Typography } from '@material-ui/core';
import { Fade } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

//Hiding Chart Legend:
Chart.defaults.global.legend.display = false;

const updateScore = (oriScore:Profile):number[]=>{
    return Object.values(oriScore).map(v => v+3);
}

export default  function RadarChart  (receivedScore){   
    const history = useHistory();
    // received score
    const receivedScoreTest: Profile = {
        motivation: 34,
        confidence: 22,
        competence: 46,
        knowledge: 57 
    };
    const levelThreshold = {
        9: "Unaware",
        21: "Exploring",
        33: "Developing",
        45: "Consolidating",
        // 57: "Maximising"
        1000: "Maximising"
    }
    const levelThresholdName = ["", "Exploring", "Developing", "Consolidating", "Maximising", ""]

    // change receivedScore from object into array
    
    function createRadialGradient3(context, colors: string[]) {
        const chartArea = context.chart.chartArea;
        if (!chartArea) {
          // This case happens on initial chart load
          return null;
        }
      
        // const chartWidth = chartArea.right - chartArea.left;
        // const chartHeight = chartArea.bottom - chartArea.top;

        // const width = chartWidth;
        // const height = chartHeight;
        const centerX = (chartArea.left + chartArea.right) / 2;
        const centerY = (chartArea.top + chartArea.bottom) / 2;
        const r = Math.min(
            (chartArea.right - chartArea.left) * 0.8,
            (chartArea.bottom - chartArea.top) * 0.8
        );
        var ctx = context.chart.ctx;
        
        const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, r);
        colors.map((value, index) => {
            gradient.addColorStop(1/colors.length*index, value);
        })

        return gradient;
    }
      
    useEffect(() =>{
        // console.log(receivedScore);
        const finalScore: number[] = updateScore(receivedScore.receivedScore);
        // const finalScore: number[] = updateScore(receivedScoreTest);
        // console.log("hi" + finalScore);

        const backgroundGradient = ['#667db67A','#0082c87A','#0082c87A','#0082c87A']
        const borderGradient = ['#0F20277A','#203A437A']

        let ctx = (document.getElementById('myChart') as unknown) as HTMLCanvasElement;
        let myChart = new Chart(ctx, {
            type: 'radar',
            data: {
            // start from 12 o'clock, clockwise displayed
                labels: [
                    'Motivation', 
                    'Confidence', 
                    'Physical Competence', 
                    'Knowledge and understanding'],
            //dataset settings
                datasets: [{
                    label: 'Score',
                    data: finalScore, // [, , ,]
                    fill: true,
                    pointBackgroundColor: [
                        'rgba(71, 145, 219, 1)',
                        'rgba(277, 51, 113, 1)',
                        'rgba(255, 183, 77, 1)',
                        'rgba(129, 199, 132, 1)'
                    ],
                    backgroundColor: (context) => { return createRadialGradient3(context, backgroundGradient) },
                    borderColor: (context) => { return createRadialGradient3(context, borderGradient) },
                    // result border width
                    borderWidth: 1,
                    pointRadius: 8,
                    pointHoverRadius: 12,
                }]
            },
            //Customize chart option
            options: {
                responsive: true,
                tooltips: {
                    callbacks: {
                      title: function(tooltipItem, data) {
                        return data['labels'][tooltipItem[0]['index']];
                      },
                      label: function(tooltipItem, data) {
                        var level = "";
                        Object.keys(levelThreshold).map((e, i) => {
                            var score = data['datasets'][0]['data'][tooltipItem['index']];
                            if(parseInt(score) <= parseInt(e) && level === "")
                            {
                                level = levelThreshold[e];
                            }
                        })
                        return `${level} (${data['datasets'][0]['data'][tooltipItem['index']]-3})`;
                      },
                    },
                    backgroundColor: '#FFFFFF7A',
                    titleFontSize: 12,
                    titleFontColor: '#3f51b5',
                    bodyFontColor: '#000',
                    bodyFontSize: 16,
                    displayColors: false,
                    intersect: false
                },
                scale: {
                    ticks: {
                        callback: function(value, index, values) {
                            return `${levelThresholdName[index]} (${value-2})`;
                        },
                        min:0,
                        max:59,
                        // suggestedMin: -,
                        // suggestedMax: 57,
                        stepSize: 12,
                    },
                    pointLabels: {
                        fontSize: 16,
                        fontColor: '#666',
                        fontFamily: "'Poppins','sans-serif'",
                    },
                    gridLines: {
                        color: '#2196f359'
                    },
                    angleLines: {
                        color: '#e91e5140'
                    }
                },
                layout: {
                    padding: 16
                },
            }
        });
    });

    return (
        <Fade in timeout={{enter: 3000, exit: 1000}}>
            <div className={classes.chartContainer}>
                <Box mt={5}>
                    <canvas id="myChart" />
                    <Box mt={2} style={{textAlign: "center"}}>
                        <Button onClick={() => {history.push("/")}} style={{minWidth: "160px"}} variant="outlined" color="primary" size="small" > Back to start </Button>
                    </Box>

                    <Typography variant="caption" display="block" style={{marginTop: "12px", textAlign:"center",width:"100%"}} >
                        Powered by The Chinese University of Hong Kong 2021 
                    </Typography>
                </Box>
            </div>
        </Fade>
    );
}