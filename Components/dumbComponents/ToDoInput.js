import React from 'react';

export default class ToDoInput extends React.Component{
    handleChange(e){
        this.props.addUnconfirmedState(e.target.value)
    }

    render(){
        return(
            <div>
                <div class = "form-group">
                            <lable for="writeToDo">Write your to-do</lable>
                            <input onChange={this.handleChange.bind(this)} class="form-control" id="writeToDo" value ={this.props.partialTodo}/>
                </div>    
            </div>
        )
    }
}