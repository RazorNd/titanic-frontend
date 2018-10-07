import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import {indigo} from "@material-ui/core/colors";
import * as React from 'react';
import './App.css';
import {Titanic} from "./components";
import Question from "./components/Question";

const myTheme = createMuiTheme({
    palette: {
        background: {
            default: '#082f57',
            paper: indigo[900]
        },
        type: "dark"
    },
});

class App extends React.Component {
    private questionRef: HTMLElement | null;

    public render() {
        return (
            <MuiThemeProvider theme={myTheme}>
                <Titanic onButtonClick={this.scrollToQuestion}/>
                <Question reference={this.setQuestionRef}/>
            </MuiThemeProvider>
        );
    }

    private setQuestionRef = (section: HTMLElement | null) => this.questionRef = section;

    private scrollToQuestion = () => {
        const current = this.questionRef;

        if (current === null) {
            return;
        }

        window.scroll({
            behavior: "smooth",
            top: current.offsetHeight
        });
    };
}

export default App;
