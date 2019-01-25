import React, { Component } from 'react'
import Items from '../reducers/Items'
    const reactElementsArray = Items.map((Items) => {
        return (
            <p>{Items}</p>
        );
    });
