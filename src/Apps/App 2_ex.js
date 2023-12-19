import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PricingPage from '../Component/PricingPage'

const Text = ({style = {}}) => (
    <p style={{...style, fontFamily:"Inter"}}>
        Hello
    </p>
)
const StyledText = withStyles(Text);//new component

function withStyles() {
    return (props) => {
        const style = {
            color: "red",
            fontSize:"1em",
            ...props.style,
        };
    };
    return <Component {...props} style = {style}/>;
};

function Welcome(myName) {
    return ( 
        <section>
            <h1>
                Hello, <span>{myName}</span>
            </h1>
        </section>
     );
}

export default function MyApp() {
    return ( 
        <div className='App'>
            <Welcome myName="ThiDK"/>
            <Text />
            <StyledText/>
            <PricingPage/>
        </div>
     );
}

