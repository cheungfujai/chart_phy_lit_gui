import React, { Component, useEffect } from 'react';
import { Button, Grid } from '@material-ui/core';
import RadarChart from '../Component/Chart/RadarChart/RadarChart';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';


export default function Result() {
    const {profile} = useSelector((state: RootState) => state.question);
    useEffect(()=>{
        
        console.log(profile);
        //localStorage.clear();
    })
    return (   
        <>
        <RadarChart receivedScore={profile}/>
        </>
    );
}