import React ,{Component} from 'react';
import Todoitem from './Todoitem';


class Todos extends Component {
  render() {
     //console.log(this.props.todos)
    return this.props.todos.map((todo)=> (
        <Todoitem todo={todo}/>
    ));
    

}
}

export default Todos;
