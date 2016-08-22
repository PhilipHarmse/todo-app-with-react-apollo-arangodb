
import React from 'react';
import EditToDoInput from './EditToDoInput'



export default class ToDoItemInEditMode extends React.Component{
    handleDeleteEvent(){        
        this.props.deleteToDo(this.props.item.id);
    }

    handleEditEvent(){
        this.props.editToDo(this.props.item.id)
    }

    render(){
        return(            
                <tr>
                    <td><EditToDoInput 
                            addToEditToDo={this.props.addToEditToDo} 
                            partialEditTodo ={this.props.partialEditTodo} /> 
                    </td>
                    <td> {this.props.item.status}</td>
                    <td>
                        <button onClick={this.handleDeleteEvent.bind(this)} class="btn btn-sm btn-danger">delete</button> 
                        <button onClick={this.handleEditEvent.bind(this)} class="btn btn-sm btn-success">save</button>
                    </td>
                </tr>                               
        )
    }
}