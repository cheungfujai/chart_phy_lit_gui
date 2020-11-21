import React, { Component, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function ButtonNext ({pageNumber}) {

    const history = useHistory();
    const toPageOnClick = (pageNumber: string) => {
        history.push(pageNumber);
    }

    return (
        <Button variant="contained" color="primary" size="large" style={{ margin: "auto", display: "block", alignItems: "center"}}
            onClick = {() => toPageOnClick(pageNumber)} > Next 
        </Button>
    )
}