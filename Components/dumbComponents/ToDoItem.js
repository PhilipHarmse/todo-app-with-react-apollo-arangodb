
import React from 'react';



export default class ToDoItem extends React.Component{
    handleDeleteEvent(){        
        this.props.deleteToDo(this.props.item.id);
    }

    handleEditEvent(){
        this.props.setToDoInEditMode(this.props.item.id)
    }

    render(){
        return(            
                <tr>
                    <td> {this.props.item.name}</td>
                    <td> {this.props.item.status}</td>
                    <td>
                        <button onClick={this.handleDeleteEvent.bind(this)} class="btn btn-sm btn-danger">delete</button> 
                        <button onClick={this.handleEditEvent.bind(this)} class="btn btn-sm btn-danger">edit</button>
                    </td>
                </tr>                               
        )
    }
}