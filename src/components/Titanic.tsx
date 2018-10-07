import Button from "@material-ui/core/Button/Button";
import * as React from "react";
import './Titanic.css';

interface ITitanicProps {
    onButtonClick: () => void
}

export function Titanic(props: ITitanicProps) {
    return <section className="titanic">
        <div className="background"/>
        <div className="text">
            <h1>Titanic</h1>
            <p>Machine Learning from Disaster</p>
            <Button variant="outlined" color="primary" onClick={props.onButtonClick}>Test</Button>
        </div>
    </section>;
}