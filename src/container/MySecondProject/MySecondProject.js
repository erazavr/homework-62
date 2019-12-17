import React, {Component} from 'react';
import nanoid from 'nanoid'
import AddTaskForm from "../../components/Form/AddTaskForm";
import Task from "../../components/Form/Task";


import './MeSecondProject.css'

class Tasks extends Component {
    state = {
        text: '',
        id: '',
        texts: [],

    };
    changeText = event => {
        this.setState({text: event.target.value});
    };
    addText = (e) => {
        e.preventDefault();
        const texts = [...this.state.texts];
        texts.push({name: this.state.text, id: nanoid()});
        this.setState({texts, text: ''});
    };
    removeTask = id => {
        const taskIndex = this.state.texts.findIndex(t => t.id === id);
        const task = [...this.state.texts];
        task.splice(taskIndex,1);
        this.setState({texts:task})
    };


    render() {
        return (
            <div className='main-block'>
                <AddTaskForm onChange = {this.changeText} text = {this.state.text} onsubmit = {this.addText}/>
                {this.state.texts.map((text) => (
                    <Task key = {text.id} text = {text.name} remove = {() => this.removeTask(text.id)}/>
                ))}
            </div>
        );
    }
}

export default Tasks;