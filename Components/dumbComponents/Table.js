import React from 'react';
import ToDoItem from './ToDoItem';
import ToDoItemInEditMode from './ToDoItemInEditMode';

export default class Table extends React.Component{
    render(){
        return(
            <table class="table table-bordered">       
                <caption>Still to do!!</caption>  
                <thead>
                    <tr>
                        <th>Itme</th>
                        <th>Status</th>
                        <th>Modify</th>
                    </tr> 
                </thead>
                <tbody>                                      
                    {
                        this.props.toDos.map(item=> { 
                                if(item.editMode == false)
                                {
                                   return(<ToDoItem 
                                        setToDoInEditMode={this.props.setToDoInEditMode} 
                                        deleteToDo={this.props.deleteToDo} 
                                        key={item.id} 
                                        item={item} />)
                                }
                                else
                                {
                                    return (<ToDoItemInEditMode 
                                        editToDo={this.props.editToDo} 
                                        deleteToDo={this.props.deleteToDo} 
                                        key={item.id} 
                                        item={item} 
                                        addUnconfirmedState={this.props.AddUnconfirmedState} 
                                        partialTodo ={this.props.partialTodo}
                                        addToEditToDo={this.props.addToEditToDo}
                                        partialEditTodo={this.props.partialEditTodo}/>)
                                }
                        })
                    }
                </tbody>                        
            </table>       
        )
    }
}