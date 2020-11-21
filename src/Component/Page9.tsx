import React, { Component, useState } from 'react';
import Box from '@material-ui/core/Box';
import ButtonNext from './ButtonNext';

export default function Page9() {
    return (
        <Box color="text.primary" style={{ padding: "20px", }}>
            <ButtonNext pageNumber={"/Page10"} />
        </Box>
    );
}