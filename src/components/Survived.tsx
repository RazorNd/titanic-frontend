import {Modal} from "@material-ui/core";
import * as React from 'react';
import {CSSProperties, ReactEventHandler} from 'react';
import died from './died.png';
import './Survived.css';
import survived from './survived.jpg';

interface IProps {
    survived: boolean,
    isOpen: boolean,
    closeCallback: ReactEventHandler<{}>
}

export function Survived(props: IProps) {
    const text = props.survived ? 'Congratulation! You Survived!!!' : 'Sorry... You died.';
    const image = props.survived ? survived : died;

    const background: CSSProperties = {
        background: `url("${image}") center`,
    };

    return (
        <Modal
            open={props.isOpen}
            onClose={props.closeCallback}
        >
            <div className="survived-modal">
                <div className="background" style={background}/>
                <div className="text">
                    <h1>{text}</h1>
                </div>
            </div>
        </Modal>
    );
}