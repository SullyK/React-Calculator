import React from 'react';
import ReactDOM from 'react-dom';
import log from 'loglevel';

// import './index.css';



//Architecture for calculator

// button when clicked has a function
// keypad - an array of these buttons
// screen - display for the user to see inputs/results
// app which has the array of these button and display and controls the logic(with functions)


  // handleDelete(e){
  //   e.preventDefault();
  //   this.setState(state => ( {
  //     list: state.list.slice(0, -1),
  //     userText: '',

  //   }))
  // }

// might add the capability to go back in time if I keep them in arrays of operations later...

class CalcApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cleanInput: [],
      firstNumber: '',
      secondNumber: '',
      result: '',
      operand: '',
      numberPressed: '',
      
      
    }
    // this.handleAddition = this.handleAddition.bind(this);  // not necessary if I store the operand too.
    // this.handleSubtraction = this.handleSubtraction.bind(this);
    // this.handleDivison = this.handleDivison.bind(this);
    // this.handleMultiplication = this.handleMultiplication.bind(this);
        this.handleEquals = this.handleEquals.bind(this);
        // this.handlenumberOne = this.handlenumberOne.bind(this)
        // this.handlenumberTwo = this.handlenumberTwo.bind(this)
        // this.handlenumberThree = this.handlenumberThree.bind(this)
        // this.handlenumberFour = this.handlenumberFour.bind(this)
        // this.handlenumberFive = this.handlenumberFive.bind(this)
        // this.handlenumberSix = this.handlenumberSix.bind(this)
        // this.handlenumberSeven= this.handlenumberSeven.bind(this)
        // this.handlenumberEight= this.handlenumberEight.bind(this) 
        // this.handlenumberNine= this.handlenumberNine.bind(this) ;
        // this.handlenumberZero= this.handlenumberZero.bind(this);
       
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDivison = this.handleDivison.bind(this);
        this.handleMultiplication  = this.handleMultiplication.bind(this);
        this.handleSubtraction = this.handleSubtraction.bind(this);


        this.handleClear = this.handleClear.bind(this);
        this.handlenumbers = this.handlenumbers.bind(this);
  

  }
  

  handlenumbers = (content) => {
         return () => {
          if(content === '1'){
    this.setState(state =>({cleanInput: state.cleanInput.concat('1')}));
}
if(content === '2'){
  this.setState(state =>({cleanInput: state.cleanInput.concat('2')}));
}

if(content === '3'){
  this.setState(state =>({cleanInput: state.cleanInput.concat('3')}));
}

if(content === '4'){
  this.setState(state =>({cleanInput: state.cleanInput.concat('4')}));
}
if(content === '5'){
  this.setState(state =>({cleanInput: state.cleanInput.concat('5')}));
}
if(content === '6'){
  this.setState(state =>({cleanInput: state.cleanInput.concat('6')}));
}
if(content === '7'){
  this.setState(state =>({cleanInput: state.cleanInput.concat('7')}));
}
if(content === '8'){
  this.setState(state =>({cleanInput: state.cleanInput.concat('8')}));
}
if(content === '9'){
  this.setState(state =>({cleanInput: state.cleanInput.concat('9')}));
}
if(content === '0'){
  this.setState(state =>({cleanInput: state.cleanInput.concat('0')}));
}
        
    }
  }




  handleEquals(){

    this.setState(state => ({secondNumber: state.cleanInput.join("")}))
    if(this.state.operand === '+'){
      this.setState(state => ({result: +state.firstNumber + +state.secondNumber,
      userInput: [],
     }))
    }
    if(this.state.operand === '/'){
      this.setState(state => ({result: +state.firstNumber / +state.secondNumber,
        userInput: []
    }))
    }
    if(this.state.operand === '*'){
      this.setState(state => ({result: +state.firstNumber * +state.secondNumber,
        userInput: []
    }))
    }

    if(this.state.operand === '-'){
      this.setState(state => ({result: +state.firstNumber - +state.secondNumber,
        userInput: []
    }))
    }

  }



  // handleMath(){}  // Stopped here carry on later


  handleAddition(){
    this.setState(state =>({
      operand: '+',
      firstNumber: state.cleanInput.join(""),
      cleanInput: []
    }))
  }

  
  handleDivison(){
    this.setState(state =>({
      operand: '/',
      firstNumber: state.cleanInput.join(""),
      cleanInput: []
    }))
  }

  handleMultiplication(){
    this.setState(state =>({
      operand: '*',
      firstNumber: state.cleanInput.join(""),
      cleanInput: []
    }))
  }

  handleSubtraction(){
    this.setState(state => ({
      operand: '-',
      firstNumber: state.cleanInput.join(""),
      cleanInput: []
    }))
  }

 

  handleClear(){
    this.setState(state =>({ 
      cleanInput: [],
      firstNumber: '',
      secondNumber: '',
      result: '',
      operand: '',}))
  }




  render(){
    return(
      <div>
        <h1>Calculator</h1>
        <br></br>

     
             {/* Want to put this into a keypad but can't seem to understand how */}

        <NumberButton content="1" onClick={this.handlenumbers}> </NumberButton>
        <NumberButton content="2" onClick={this.handlenumbers}> </NumberButton>
        <NumberButton content="3" onClick={this.handlenumbers}> </NumberButton>
        <NumberButton content="4" onClick={this.handlenumbers}> </NumberButton>
        <NumberButton content="5" onClick={this.handlenumbers}> </NumberButton>
        <NumberButton content="6" onClick={this.handlenumbers}> </NumberButton>
        <NumberButton content="7" onClick={this.handlenumbers}> </NumberButton>
        <NumberButton content="8" onClick={this.handlenumbers}> </NumberButton>
        <NumberButton content="9" onClick={this.handlenumbers}> </NumberButton>
        <NumberButton content="0" onClick={this.handlenumbers}> </NumberButton>  


        <button onClick={this.handleAddition}>
        +

        </button>

        <button onClick={this.handleSubtraction}>
        -

        </button>
        <button onClick={this.handleDivison}>
        /

        </button>

        <button onClick={this.handleMultiplication}>
        *

        </button>
        <button onClick={this.handleEquals}>
        =
        </button>
        <br></br>

        <button onClick={this.handleClear}>
        CLEAR
        </button>


        <Display 
        result = {this.state.result}
        operand = {this.state.operand}
        cleanInput = {this.state.cleanInput}
        firstNumber = {this.state.firstNumber}
        secondNumber = {this.state.secondNumber}
        />
      </div>
    )
  }

}


// class Keypad extends React.Component{
  
//   render(){
//     return(
//       <CustomButton  onClick ={this.props.onClick(this.props.content)}/>

//     )
//   }
// }



class NumberButton extends React.Component{
  render(){
      return(
        <div>
        <button  onClick={this.props.onClick(this.props.content)}>{this.props.content}</button>

        </div>
        )
      }
  }


  class OperatorButton extends React.Component{
    render(){
        return(
          <div>
          <button  onClick={this.props.onClick(this.props.content)}>{this.props.content}</button>
  
          </div>
          )
        }
    }
  

  






class Display extends React.Component{
  render(){
      return(
        <div>    
          <h2>Current cleanInput array contains {this.props.cleanInput}</h2>
        <h2>Current operand contains {this.props.operand}</h2>
        <h2>Current firstNumber contains {this.props.firstNumber}</h2>
        <h2>Current secondNumber contains {this.props.secondNumber}</h2>
        <h1>Display RESULT: {this.props.result}</h1> 
          </div>
        )
      }
  }

  





ReactDOM.render(
  <CalcApp/>,
  document.getElementById('root')
);









// class WelcomeMessage extends React.Component{
//   render(){
//     return(
//       <div> Hello {this.props.name}</div>
//     );
//   }
// }






// class TodoApp extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//     list: [],
//     userText: '',
//     }

//     // We need to handle adding to a user entering text
//     // we need to handle pressing the submit button
//     // we need to hadnle pressing the delete(last one) button
    
//     this.handleText = this.handleText.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleDelete = this.handleDelete.bind(this);    
//   }

//   render(){
//     return(
//       <div>
//       <h1>Current need to dos</h1>
//       <TodoList list={this.state.list}/>
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Test:
//           <input type="text" value = {this.state.userText} onChange = {this.handleText}/>
          
//       <button >
//           Add me to the list
//           </button>
          
//         </label>

//       </form>

//       <button onClick ={this.handleDelete}>
//           Delete Last item
//           </button>

// <h4>There are {this.state.list.length} number of items in your list</h4>
//       </div>
//     )
//   }


//   handleDelete(e){
//     e.preventDefault();
//     this.setState(state => ( {
//       list: state.list.slice(0, -1),
//       userText: '',

//     }))
//   }

  
//   handleText(e){
//     this.setState({userText:  e.target.value})
//   }

//   handleSubmit(e){
//     //prevent empty list
//     e.preventDefault();

   

//     //make sure we end if there is 0 char
//     if(this.state.userText.length === 0){
//       return
//     }

//     const addedItem = {
//       id: Date.now(),
//       text: this.state.userText,  
//     }
    
//     this.setState(state => ( {
//       list: state.list.concat(addedItem),
//       userText: '',

//     }))

//   }


// }




// class TodoList extends React.Component{ //this should print out all the current to do items when given the array from parent
//   render(){
//     return(
//         <ul>
//         {this.props.list.map(list => (<li key={list.id}> {list.text}</li>))}
//         </ul>
//     )
//   }

// }





// class CountUp extends React.Component{

//   constructor(props){
//   super(props);
//   this.state = { //Can be thought of as an state for this CountUp Object?
//     seconds: this.props.start + 0, 
//     paused: false,
//     }

//   this.pauseClicked = this.pauseClicked.bind(this);
//   this.playClicked = this.playClicked.bind(this);
//   }



//   addSecondToState(){
//     this.setState(state => ({seconds: state.seconds + 1}));
//   }

//   pauseClicked(){
//     this.setState(() => ({paused: true}));
//   }

//   playClicked(){
//     this.setState(() => ({paused: false}));
//   }



//   componentDidMount() {
//     this.countSecond = setInterval(() => {
//       log.warn("inside componentMount but not set interval");

//       if(this.state.paused === false){this.addSecondToState()}
//       log.warn("inside false statement callback");

//     },1000);
    
//   }


//   render(){
//     return(
//       <div>Countup: {this.state.seconds}

//       <button onClick = {this.pauseClicked}>PAUSE</button>
//       <button onClick = {this.playClicked}> PLAY</button>

//       </div>

//     )
//   }

// }




