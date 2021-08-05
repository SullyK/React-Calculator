import React from "react";
import ReactDOM from "react-dom";
import './index.css';

class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cleanInput: [],
      firstNumber: "",
      secondNumber: "",
      result: "",
      operand: "",
      numberPressed: "",
    };

    this.handleEquals = this.handleEquals.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handlenumbers = this.handlenumbers.bind(this);
    this.handleOperators = this.handleOperators.bind(this);
  }

  handlenumbers = (content) => {
    if (content === "1") {
      this.setState((state) => ({ cleanInput: state.cleanInput.concat("1") }));
    }
    if (content === "2") {
      this.setState((state) => ({ cleanInput: state.cleanInput.concat("2") }));
    }

    if (content === "3") {
      this.setState((state) => ({ cleanInput: state.cleanInput.concat("3") }));
    }

    if (content === "4") {
      this.setState((state) => ({ cleanInput: state.cleanInput.concat("4") }));
    }
    if (content === "5") {
      this.setState((state) => ({ cleanInput: state.cleanInput.concat("5") }));
    }
    if (content === "6") {
      this.setState((state) => ({ cleanInput: state.cleanInput.concat("6") }));
    }
    if (content === "7") {
      this.setState((state) => ({ cleanInput: state.cleanInput.concat("7") }));
    }
    if (content === "8") {
      this.setState((state) => ({ cleanInput: state.cleanInput.concat("8") }));
    }
    if (content === "9") {
      this.setState((state) => ({ cleanInput: state.cleanInput.concat("9") }));
    }
    if (content === "0") {
      this.setState((state) => ({ cleanInput: state.cleanInput.concat("0") }));
    }
  };

  handleEquals() {
    this.setState((state) => ({ secondNumber: state.cleanInput.join("") }));
    if (this.state.operand === "+") {
      this.setState((state) => ({
        result: +state.firstNumber + +state.secondNumber,
        userInput: [],
      }));
    }
    if (this.state.operand === "/") {
      this.setState((state) => ({
        result: +state.firstNumber / +state.secondNumber,
        userInput: [],
      }));
    }
    if (this.state.operand === "*") {
      this.setState((state) => ({
        result: +state.firstNumber * +state.secondNumber,
        userInput: [],
      }));
    }

    if (this.state.operand === "-") {
      this.setState((state) => ({
        result: +state.firstNumber - +state.secondNumber,
        userInput: [],
      }));
    }
  }

  handleOperators = (content) => {
    if (content === "+") {
      this.setState((state) => ({
        operand: "+",
        firstNumber: state.cleanInput.join(""),
        cleanInput: [],
      }));
    }

    if (content === "-") {
      this.setState((state) => ({
        operand: "-",
        firstNumber: state.cleanInput.join(""),
        cleanInput: [],
      }));
    }

    if (content === "*") {
      this.setState((state) => ({
        operand: "*",
        firstNumber: state.cleanInput.join(""),
        cleanInput: [],
      }));
    }

    if (content === "/") {
      this.setState((state) => ({
        operand: "/",
        firstNumber: state.cleanInput.join(""),
        cleanInput: [],
      }));
    }
  };

  handleClear() {
    this.setState((state) => ({
      cleanInput: [],
      firstNumber: "",
      secondNumber: "",
      result: "",
      operand: "",
    }));
  }

  render() {
    return (
      <div>
        <h1>Calculator</h1>
        <br></br>

        {/* Want to put this into a keypad but can't seem to understand how */}
      
<div className = "calc-skeleton">
<Display
          result={this.state.result}
          operand={this.state.operand}
          cleanInput={this.state.cleanInput}
          firstNumber={this.state.firstNumber}
          secondNumber={this.state.secondNumber}
        />  
    
      <div className = "num-pad">
      <button className='clickable-key-special' onClick={this.handleClear}>AC</button>

        <NumberButton content="e" onClick={this.handlenumbers}/>
        <NumberButton content="e" onClick={this.handlenumbers}/>
        <OperatorButton content="/" onClick={this.handleOperators}/>

        <NumberButton content="7" onClick={this.handlenumbers}/>
        <NumberButton content="8" onClick={this.handlenumbers}/>
        <NumberButton content="9" onClick={this.handlenumbers}/>
        <OperatorButton content="*" onClick={this.handleOperators}/>


        <NumberButton content="4" onClick={this.handlenumbers}/>
        <NumberButton content="5" onClick={this.handlenumbers}/>
        <NumberButton content="6" onClick={this.handlenumbers}/>
        <OperatorButton content="-" onClick={this.handleOperators}/>

        <NumberButton content="1" onClick={this.handlenumbers}/>
        <NumberButton content="2" onClick={this.handlenumbers}/>
        <NumberButton content="3" onClick={this.handlenumbers}/>
        <OperatorButton content="+" onClick={this.handleOperators}/>          
        <NumberButtonZero content="0" onClick={this.handlenumbers}/>

        <NumberButton content="e" onClick={this.handlenumbers}/>
        <button className='clickable-key-operator' onClick={this.handleEquals}>=</button>

        </div>

       
        </div>

       

      </div>
    );
  }
}

// class Keypad extends React.Component{

//   render(){
//     return(
//       <CustomButton  onClick ={this.props.onClick(this.props.content)}/>

//     )
//   }
// }

class NumberButton extends React.Component {
  render() {
    return (
      <React.Fragment>
      <button className='clickable-key-number' onClick={() => this.props.onClick(this.props.content)}>
          {this.props.content}
        </button>
        {/*  need to figure out fully why this onClick= {() => works} */}
        </React.Fragment>
    );
  }
}

class NumberButtonZero extends React.Component {
  render() {
    return (
      <React.Fragment>
      <button className='clickable-key-zero' onClick={() => this.props.onClick(this.props.content)}>
          {this.props.content}
        </button>
        {/*  need to figure out fully why this onClick= {() => works} */}
        </React.Fragment>
    );
  }
}

class OperatorButton extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button className='clickable-key-operator' onClick={() => this.props.onClick(this.props.content)}>
          {this.props.content}
        </button>
        </React.Fragment>
    );
  }
}

class Display extends React.Component {
  render() {
    return (

      <div className="results-text">
        
        {/* <h2>Current cleanInput array contains {this.props.cleanInput}</h2>
        <h2>Current operand contains {this.props.operand}</h2>
        <h2>Current firstNumber contains {this.props.firstNumber}</h2>
        <h2>Current secondNumber contains {this.props.secondNumber}</h2> */}
{this.props.result}
</div>
    );
  }
}

ReactDOM.render(<CalcApp />, document.getElementById("root"));
