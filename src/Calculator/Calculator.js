import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

class Calculator extends React.Component {
    constructor() {
        super()
        this.state = {
            number1: '',
            number2: '',
            result: null
        }

    }

    inputChangeHandler1(event) {
        console.log(event.target.value)
        this.setState({ number1: event.target.value })
    }

    inputChangeHandler2(event) {
        this.setState({ number2: event.target.value })
        console.log(this.state.number2)
    }

    sum() {
        this.setState({ result: Number(this.state.number1) + Number(this.state.number2) })
    }

    difference() {
        this.setState({ result: Number(this.state.number1) - Number(this.state.number2) })
    }

    divide() {
        this.setState({ result: Number(this.state.number1) * Number(this.state.number2) })
    }

    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '100px'
                }}
            >
                <div>
                    <TextField
                        style={{
                            margin: '20px'
                        }}
                        id="outlined-number"
                        label="Number 1"
                        value={this.state.number1}
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                        onChange={(event) => this.inputChangeHandler1(event)}
                    />
                    <TextField
                        style={{
                            margin: '20px'
                        }}
                        id="outlined-number"
                        label="Number 2"
                        value={this.state.number2}
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                        onChange={(event) => this.inputChangeHandler2(event)}
                    />
                </div>
                <div>
                    <Button
                        style={{
                            margin: '10px',
                            fontSize: '20px'
                        }}
                        variant="outlined"
                        color="primary"
                        onClick={() => this.sum()}
                    >
                        +
                </Button>
                    <Button
                        style={{
                            margin: '10px',
                            fontSize: '20px'
                        }}
                        variant="outlined"
                        color="primary"
                        onClick={() => this.difference()}
                    >
                        -
                </Button>
                    <Button
                        style={{
                            margin: '10px',
                            fontSize: '20px'
                        }}
                        variant="outlined"
                        color="primary"
                        onClick={() => this.divide()}
                    >
                        *
                </Button>
                </div>
                <p
                    style={{
                        fontSize: '25px'
                    }}
                >
                    {this.state.result}
                </p>
            </div>
        )
    }
}

export default Calculator