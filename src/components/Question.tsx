import {
    Button,
    Card,
    MenuItem,
    StyledComponentProps,
    StyleRulesCallback,
    TextField,
    Theme,
    withStyles
} from "@material-ui/core";
import * as React from "react";
import {ChangeEventHandler, Component, Ref} from "react";
import {Survived} from "./Survived";

const styles: StyleRulesCallback = (theme: Theme) => ({
    card: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '70vh',
        justifyContent: 'space-around',
        overflowY: 'auto'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '80vw'
    },
    menu: {
        width: 200,
    },
    section: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200
    },
});

type TicketClass = 'FIRST' | 'SECOND' | 'THIRD';

const ticketClasses: Array<{ label: string, value: TicketClass }> = [
    {
        label: 'First',
        value: 'FIRST'
    },
    {
        label: 'Second',
        value: 'SECOND'
    },
    {
        label: 'Third',
        value: 'THIRD'
    },
];

type Sex = 'MALE' | 'FEMALE';

const sexLabels: Array<{ label: string, value: Sex }> = [
    {
        label: 'Male',
        value: 'MALE'
    },
    {
        label: 'Female',
        value: 'FEMALE'
    }
];

type PortEmbarkation = 'CHERBOURG' | 'QUEENSTOWN' | 'SOUTHAMPTON';

const portEmbarkationLabels: Array<{ label: string, value: PortEmbarkation }> = [
    {
        label: 'Cherbourg',
        value: 'CHERBOURG'
    },
    {
        label: 'Queenstown',
        value: 'QUEENSTOWN'
    },
    {
        label: 'Southampton',
        value: 'SOUTHAMPTON'
    }
];

interface IProps extends StyledComponentProps {
    reference: Ref<HTMLElement>
}

interface IPassenger {
    ticketClass?: TicketClass,
    sex?: Sex;
    age?: number
    sibsp?: number;
    parch?: number;
    fare?: number;
    portEmbarkation?: PortEmbarkation;
}

interface IState {
    model: IPassenger,
    survivedOpen: boolean,
    isSurvived: boolean,
}

class Question extends Component<IProps, IState> {

    private static getUrl() {
        if (process.env.NODE_ENV === 'production') {
            return '/api/random-forest/survived';
        }
        return 'http://localhost:8080/api/random-forest/survived'
    }
    constructor(props: IProps) {
        super(props);
        this.state = {
            isSurvived: false,
            model: {
                age: 25,
                fare: 20,
                parch: 0,
                portEmbarkation: 'CHERBOURG',
                sex: 'MALE',
                sibsp: 0,
                ticketClass: 'FIRST',
            },
            survivedOpen: false
        };
    }

    public render() {
        const classes = this.props.classes;

        if (classes == null) {
            return;
        }

        return (
            <section className={classes.section} ref={this.props.reference}>
                <Card className={classes.card} raised={true}>
                    <form className={classes.container}>
                        <TextField
                            select={true}
                            label="Ticket Class"
                            className={classes.textField}
                            value={this.state.model.ticketClass}
                            onChange={this.onTicketClassChange}
                            SelectProps={{
                                MenuProps: {
                                    className: classes.menu,
                                },
                            }}
                            helperText="Please select your ticket class"
                            margin="normal"
                            variant="outlined"
                        >
                            {ticketClasses.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            select={true}
                            label="Sex"
                            className={classes.textField}
                            value={this.state.model.sex}
                            onChange={this.onSexChange}
                            SelectProps={{
                                MenuProps: {
                                    className: classes.menu,
                                },
                            }}
                            helperText="Please select your sex"
                            margin="normal"
                            variant="outlined"
                        >
                            {sexLabels.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            label="Age"
                            value={this.state.model.age}
                            onChange={this.onAgeChange}
                            type="number"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            helperText="Please select your age"
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            label="Siblings / Spouses aboard"
                            value={this.state.model.sibsp}
                            onChange={this.onSibspChange}
                            type="number"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            helperText="Please select your Siblings / Spouses aboard"
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            label="Parents / Children aboard"
                            value={this.state.model.parch}
                            onChange={this.onParchChange}
                            type="number"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            helperText="Please select your Parents / Children aboard"
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            label="Passenger fare"
                            value={this.state.model.fare}
                            onChange={this.onFareChange}
                            type="number"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            helperText="Please select your Passenger fare"
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            select={true}
                            label="Port of Embarkation"
                            className={classes.textField}
                            value={this.state.model.portEmbarkation}
                            onChange={this.onPortEmbarkationChange}
                            SelectProps={{
                                MenuProps: {
                                    className: classes.menu,
                                },
                            }}
                            helperText="Please select your Port of Embarkation"
                            margin="normal"
                            variant="outlined"
                        >
                            {portEmbarkationLabels.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </form>

                    <Button variant="outlined" size="large" onClick={this.onCheckClick}>Check</Button>
                </Card>

                <Survived survived={this.state.isSurvived} isOpen={this.state.survivedOpen}
                          closeCallback={this.handleCloseSurvived}/>
            </section>
        );
    }

    private setModel(model: IPassenger) {
        this.setState({
            model: {
                ...this.state.model,
                ...model
            }
        });
    }

    private onTicketClassChange: ChangeEventHandler<HTMLSelectElement> = (event) =>
        this.setModel({ticketClass: event.target.value as TicketClass});

    private onSexChange: ChangeEventHandler<HTMLSelectElement> = (event) =>
        this.setModel({sex: event.target.value as Sex});

    private onAgeChange: ChangeEventHandler<HTMLInputElement> = (event) =>
        this.setModel({age: parseInt(event.target.value, 10)});

    private onSibspChange: ChangeEventHandler<HTMLInputElement> = (event) =>
        this.setModel({sibsp: parseInt(event.target.value, 10)});

    private onParchChange: ChangeEventHandler<HTMLInputElement> = (event) =>
        this.setModel({parch: parseInt(event.target.value, 10)});

    private onFareChange: ChangeEventHandler<HTMLInputElement> = (event) =>
        this.setModel({fare: parseInt(event.target.value, 10)});

    private onPortEmbarkationChange: ChangeEventHandler<HTMLSelectElement> = (event) =>
        this.setModel({portEmbarkation: event.target.value as PortEmbarkation});

    private handleCloseSurvived = () => this.setState({survivedOpen: false});

    private onCheckClick = async () => {
        const url = Question.getUrl();

        const result = await fetch(url, {
            body: JSON.stringify(this.state.model),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST'
        });

        const {survived} = await result.json();

        this.setState({isSurvived: survived, survivedOpen: true});
    };
}

export default withStyles(styles)(Question);