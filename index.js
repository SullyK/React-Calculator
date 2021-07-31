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
      
    }
    // this.handleAddition = this.handleAddition.bind(this);  // not necessary if I store the operand too.
    // this.handleSubtraction = this.handleSubtraction.bind(this);
    // this.handleDivison = this.handleDivison.bind(this);
    // this.handleMultiplication = this.handleMultiplication.bind(this);
        this.handleEquals = this.handleEquals.bind(this);
        this.handlenumberOne = this.handlenumberOne.bind(this)
        this.handlenumberTwo = this.handlenumberTwo.bind(this)
        this.handlenumberThree = this.handlenumberThree.bind(this)
        this.handlenumberFour = this.handlenumberFour.bind(this)
        this.handlenumberFive = this.handlenumberFive.bind(this)
        this.handlenumberSix = this.handlenumberSix.bind(this)
        this.handlenumberSeven= this.handlenumberSeven.bind(this)
        this.handlenumberEight= this.handlenumberEight.bind(this) 
        this.handlenumberNine= this.handlenumberNine.bind(this) ;
        this.handlenumberZero= this.handlenumberZero.bind(this);
       
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDivison = this.handleDivison.bind(this);
        this.handleMultiplication  = this.handleMultiplication.bind(this);
        this.handleSubtraction = this.handleSubtraction.bind(this);


        this.handleClear = this.handleClear.bind(this);

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


  handlenumberOne(){
    this.setState(state =>({cleanInput: state.cleanInput.concat('1')}));
  }

  handlenumberTwo(){
    this.setState(state =>({cleanInput: state.cleanInput.concat('2')}));
  }


  handlenumberThree(){
    this.setState(state =>({cleanInput: state.cleanInput.concat('3')}));
  }

  handlenumberFour(){
    this.setState(state =>({cleanInput: state.cleanInput.concat('4')}));
  }

  handlenumberFive(){
    this.setState(state =>({cleanInput: state.cleanInput.concat('5')}));
  }
  

  handlenumberSix(){
    this.setState(state =>({cleanInput: state.cleanInput.concat('6')}));
  }
  

  handlenumberSeven(){
    this.setState(state =>({cleanInput: state.cleanInput.concat('7')}));
  }
  
  handlenumberEight(){
    this.setState(state =>({cleanInput: state.cleanInput.concat('8')}));
  }

  handlenumberNine(){
    this.setState(state =>({cleanInput: state.cleanInput.concat('9')}));
  }

  handlenumberZero(){
    this.setState(state =>({cleanInput: state.cleanInput.concat('0')}));
  }




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

        <button onClick={this.handlenumberOne}>
        1
        </button>

        <button onClick={this.handlenumberTwo}>
        2
        </button>

        <button onClick={this.handlenumberThree}>
        3
        </button>
        <br></br>

        <button onClick={this.handlenumberFour}>
        4
        </button>
        <button onClick={this.handlenumberFive}>
        5
        </button>
        
        <button onClick={this.handlenumberSix}>
        6
        </button>
        <br></br><button onClick={this.handlenumberSeven}>
        7
        </button>
        <button onClick={this.handlenumberEight}>
        8
        </button>
       <button onClick={this.handlenumberNine}>
        9
        </button>
      <button onClick={this.handlenumberZero}>
        0
        </button>
        <br></br>

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

         <h2>Current cleanInput array contains {this.state.cleanInput}</h2>
         <h2>Current operand contains {this.state.operand}</h2>
         <h2>Current firstNumber contains {this.state.firstNumber}</h2>
         <h2>Current secondNumber contains {this.state.secondNumber}</h2>
         <h1>Display RESULT: {this.state.result}</h1>


      </div>
    )
  }

}














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




ReactDOM.render(
  <CalcApp/>,
  document.getElementById('root')
);
