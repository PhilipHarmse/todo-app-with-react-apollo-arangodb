import _ from 'lodash';
import React from 'react';
import Table from '../Components/dumbComponents/Table'
import ToDoInput from '../Components/dumbComponents/ToDoInput'
//import client from '../graphql';
import store from '../store';


export default class ToDo extends React.Component{
    constructor(){
        super()
        this.state = {
            toDos : [],            
            partialTodo : "",
            partialEditTodo: "",
        }        
        this.toDoId = 0;
    }

    AddToDo (e){    
        e.preventDefault()
        
        // If the  
        if(this.state.partialTodo == "")return;  
        
        // Create the new todo object
        this.toDoId = this.toDoId + 1

        var todo = {
            id : this.toDoId,
            name : this.state.partialTodo,
            status : "Not Started", 
            editMode : false,                     
        }   
        
        // push the todo in to the toDos array
        var updatedToDos = this.state.toDos;
        updatedToDos.push(todo)

        this.setState(prev => {
            return {toDos: updatedToDos, partialTodo: ""}
        });   
    }


    AddUnconfirmedState(e){      
        this.setState({partialTodo: e}) 
    }

    DeleteToDo(id){        
        this.setState(prev => {
            return {
                toDos: prev.toDos.filter(x => x.id !== id)
            }
        })               
    }

    EditToDo(id){     
        this.setState(prev => {
            return {
                toDos: prev.toDos.map(x => {
                    if(x.id == id){
                        x.name = prev.partialEditTodo 
                        x.editMode= false     
                    }  
                    return x;
                })                
            }
        })       
    }

    AddToEditToDo (e){
        this.setState({partialEditTodo:e})
    }

    SetToDoInEditMode(id){   
        this.setState(prev => {
            return {
                toDos: prev.toDos.map(x => {
                    if(x.id == id){
                        x.editMode = true                                                     
                    } 
                    return x; 
                }),   
            }
        })

        this.setState(prev => {             
            var value = "to be changed";
            prev.toDos.map(x => {                    
                if(x.id == id){                        
                    value = x.name                    
                }
            })
            return{partialEditTodo:value}
        }) 
        
    }

    render() {        
        return (
            <div>
                <br />
                <form>
                    <ToDoInput addUnconfirmedState={this.AddUnconfirmedState.bind(this)} partialTodo ={this.state.partialTodo} /> 
                    <a onClick={this.AddToDo.bind(this)} class="btn btn-success">Add To Do</a>                   
                </form>
                <Table addUnconfirmedState={this.AddUnconfirmedState.bind(this)} 
                    partialTodo ={this.state.partialTodo} 
                    setToDoInEditMode={this.SetToDoInEditMode.bind(this)} 
                    deleteToDo={this.DeleteToDo.bind(this)}  
                    toDos={this.state.toDos}
                    editToDo={this.EditToDo.bind(this)}
                    addToEditToDo={this.AddToEditToDo.bind(this)}
                    partialEditTodo={this.state.partialEditTodo}/>                             
            </div>
        )
    }
}