import React from 'react';
import CreateTodos from './create-todos';
import TodosList from './todos-list';


const todos = [

{
	task: 'make React tutorial',
	isCompleted: false
},
{
	task: 'eat dinner',
	isCompleted: true
}
];
 export default class App extends React.Component {
   constructor(props) {
   	super(props);

   	this.state ={
   		todos

   	};
   }


 	render(){
 		return (
 			<div>
                <h1>React Todos App</h1>
                <CreateTodos todos={this.state.todos} createTask={this.createTask.bind(this)}/>
                <TodosList 
                todos={this.state.todos}
                toggleTask={this.toggleTask.bind(this)}
                saveTask={this.saveTask.bind(this)}
                deleteTask={this.deleteTask.bind(this)}
                
                />
 			</div>
 			);
 	}
  toggleTask(task){
    const foundTodo = _.find(this.state.todos, todo =>todo.task ===task);
    foundTodo.isCompleted =foundTodo.isCompleted;
    this.setState({todos: this.state.todos});
  }
  createTask(task){
    this.state.todos.push({
      task,
      isCompleted: false
    });
    this.setState({todos: this.state.todos});
  }
  saveTask(oldTask, newTask){
    const foundTodo =_.find(this.state.todos, todo =>todo.task === oldTask);

    foundTodo.task = newTask;
    this.setState({ todos: this.state.todos});
  }
  deleteTask(taskTodelete){
    _.remove(this.state.todos, todo => todo.task === taskTodelete);
    this.setState({ todos: this.state.todos});
  }
 }