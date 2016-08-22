
import React from 'react';




export default class ToDoItemInEditMode extends React.Component{
    handleDeleteEvent(){        
        this.props.deleteToDo(this.props.item.id);
    }

    handleEditEvent(){
        this.props.editToDo(this.props.item.id)
    }

    handleChange(e){
        this.props.addToEditToDo(e.target.value)
    }

    render(){
        return(            
                <tr>
                    <td>
                        <div class = "form-group">                            
                            <input onChange={this.handleChange.bind(this)} class="form-control" value ={this.props.partialEditTodo}/>
                        </div>
                    </td>
                    <td> {this.props.item.status}</td>
                    <td>
                    
                        <button type="button" onClick={this.handleDeleteEvent.bind(this)} class="btn btn-sm btn-danger">delete</button><span> </span>
                        <button type="button" onClick={this.handleEditEvent.bind(this)} class="btn btn-sm btn-success">save</button>
                    </td>
                </tr>                               
        )
    }
}