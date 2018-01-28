import React from 'react';
import Person from '../playground/Person';

class ContentLeft extends React.Component {
   state = {
      persons: [
         {name: 'Max', age: 55},
         {name: 'Eimaer', age: 25},
         {name: 'Tore', age: 60}
      ]
   }

   switchNameHandler = () => {
      console.log('was clicked')
   }

   render () {
      return (
          <div className="large left">
            <button onClick={ this.switchNameHandler }> Change Name </button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}  />
            <Person name="Tore" age="60" />
            <Person name="Eimear" age="25"> My hobbies, Racing </Person>
            <Person />
         </div>


      );
   }
}

export default ContentLeft;