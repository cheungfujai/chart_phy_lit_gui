import React, { useEffect } from 'react';
import * as Chart from 'chart.js';
import classes from './RadarChart.module.css';
import { Profile } from '../../../types/store/QuestionStore';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducer';

//Hiding Chart Legend:
Chart.defaults.global.legend.display = false;

const updateScore = (oriScore:Profile):number[]=>{
    return Object.values(oriScore);
}

export default  function RadarChart  (receivedScore){   
    // received score
    // const receivedScore: Profile = {
    //     motivation: 10,
    //     confidence: 20,
    //     competence: 55,
    //     knowledge: 100  
    // };

    // change receivedScore from object into array
    

    useEffect(() =>{
        console.log(receivedScore);
        const finalScore: number[] = updateScore(receivedScore.receivedScore);
        console.log("hi" + finalScore);
        let ctx = document.getElementById('myChart');
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
                    backgroundColor: [
                        'rgba(0, 255, 0, 0.5)',
                        'rgba(192, 192, 192, 0.5)',
                        'rgba(0, 0, 255, 0.5)',
                        'rgba(230, 126, 34, 0.5)',        
                    ],
                    borderColor: [
                        'rgba(0, 255, 0, 1)',
                        'rgba(192, 192, 192, 1)',
                        'rgba(0, 0, 255, 1)',
                        'rgba(230, 126, 34, 1)',
                    ],
                    // result border width
                    borderWidth: 1,
                    pointRadius: 4,
                    pointHoverRadius: 5,

                }]
            },
            //Customize chart option
            options: {
                scale: {
                    ticks: {
                        min:0,
                        suggestedMin: 15,
                        suggestedMax: 50,
                        stepSize: 10,
                    },
                    pointLabels: {
                        display: true,
                        fontSize: 15,
                        fontColor: '#666'
                    }
                }
            }
        });
    });

    return (
        <div className={classes.chartContainer}>
            <canvas id="myChart" />
        </div>
    );
}