// import React, { Component } from 'react';
// import './App.css';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';

// class App extends  Component {
//   state = {
//     username: 'SuperJohn'
//   }


//   usernameChangedHandler = (event) => {

//     this.setState({username: event.target.value });

//   }

//   render() {
//     return (
//       <div className="App">
//         <UserInput  
//         changed={this.usernameChangedHandler}
//         currentName={this.state.username}  />
//         <UserOutput 
//         userName={this.usernameChangedHandler}  />
//         <UserOutput 
//         userName={this.state.username} />
//         <UserOutput 
//         userName="John" />
//       </div>
//     );
//   }
// }

// export default App;













import React, { Component } from 'react';
import './App.css';
import person from './Persons/Person';


import Person from './Persons/Person';


class App extends Component{
  state = {
    persons: [
      { name: 'Janasyl', age: 18, hobbies: 'Cinema'},
      { name: 'Mairabek', age: 18 },
      { name: 'Asel', age: 18, hobbies: 'Playning to cat'},
    ],
    otherState: 'Some other value',
    showPersons: false
  }

  switchNameHanbler = () => {

    this.setState({  
      persons: [
      { name: 'Janasyl Duishenbaev', 
        age: 18, 
        hobbies: 'Cinema'},
      { 
        name: 'Mairambek Beishenbekov', 
        age: 18 },
      { 
        name: 'Asel Shakirova', 
        age: 19, 
        hobbies: 'Playning to cat'},
    ]
    } )
  }

nameChangdedHandler = (event) => {
  this.setState( {  
    persons: [
    { 
      name: 'Janasyl Duishenbaev', 
      age: 18, 
      hobbies: 'Cinema'},
    { name: event.target.value, 
      age: 18 },
    { 
      name: 'Asel Shakirova', 
      age: 19, 
      hobbies: 'Playning to cat'},
  ]
  }  )
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

  render() {
    const style = {
      backgroundColor: '#0e6f9c',
      font: 'inherit',
      color: 'white',
      borderRadius: '5px',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (

        <div>
          {this.state.persons.map(person =>{

            return 

          })}
         <Person

          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          hobbies={this.state.persons[0].hobbies}
          click={this.switchNameHanbler} />
   
   
   
         <Person
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          changed={this.nameChangdedHandler}  />
   
   
         <Person
         name={this.state.persons[2].name} 
         age={this.state.persons[2].age} 
         hobbies={this.state.persons[2].hobbies} />
       
       </div>
      );
    }

    return (
      <div className = "App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>


      <button 
      
      onClick={this.togglePersonsHandler} 
      style={style}>Switch Name</button>
        {persons}

      </div>
     
    );

    // return React.createElement('div', {className:  'App'},  React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
