import _ from 'lodash';
import React from 'react';
import Table from '../Components/dumbComponents/Table'
import ToDoInput from '../Components/dumbComponents/ToDoInput'
//import client from '../graphql';
import store from '../store';


export default class ToDo extends React.Component {
    constructor() {
        super()
        this.state = {
            toDos: [],
            partialTodo: "",
            partialEditTodo: "",
            editStatus: false,
        }
        this.toDoId = 0;
    }

    AddToDo(e) {
        e.preventDefault()

        // If the  
        if (this.state.partialTodo == "") return;

        // Create the new todo object
        this.toDoId = this.toDoId + 1

        var todo = {
            id: this.toDoId,
            name: this.state.partialTodo,
            status: "Not Started",
            editMode: false,
        }

        // push the todo in to the toDos array
        var updatedToDos = this.state.toDos;
        updatedToDos.push(todo)

        this.setState(prev => {
            return { toDos: updatedToDos, partialTodo: "" }
        });
    }


    AddUnconfirmedState(e) {
        this.setState({ partialTodo: e })
    }

    DeleteToDo(id) {
        this.setState(prev => {
            return {
                toDos: prev.toDos.filter(x => {
                    return x.id !== id
                })
            }
        })

        //Check to see if the item that is being deleted was in edit mode if so the set the editStatus to true so that the user can edit other items
        this.state.toDos.forEach(item => {
            if (item.id == id) {
                this.setState({editStatus : false})
            }
        })

    }

    EditToDo(id) {

        this.setState(prev => {
            return {
                toDos: prev.toDos.map(x => {
                    if (x.id == id) {
                        x.name = prev.partialEditTodo
                        x.editMode = false
                    }
                    return x;
                })
            }
        })

        this.setState({ editStatus: false })
    }

    AddToEditToDo(e) {
        this.setState({ partialEditTodo: e })
    }

    SetToDoInEditMode(id) {
        // Check to see if editStatus is true if so it means there is already an item in edit mode and there can only be one item in edit mode at a time
        if (this.state.editStatus) {
            return alert("There is already an item in edit mode please finish editing the item attemting another action.")
        }
        else {
            this.setState({ editStatus: true })
        }


        this.setState(prev => {
            return {
                toDos: prev.toDos.map(x => {
                    if (x.id == id) {
                        x.editMode = true
                    }
                    return x;
                }),
            }
        })

        this.setState(prev => {
            var value = "to be changed";
            prev.toDos.map(x => {
                if (x.id == id) {
                    value = x.name
                }
            })
            return { partialEditTodo: value }
        })

    }

    render() {
        return (
            <div>
                <br />
                <form>
                    <ToDoInput addUnconfirmedState={this.AddUnconfirmedState.bind(this) } partialTodo ={this.state.partialTodo} />
                    <a onClick={this.AddToDo.bind(this) } class="btn btn-success">Add To Do</a>
                </form>
                <Table addUnconfirmedState={this.AddUnconfirmedState.bind(this) }
                    partialTodo ={this.state.partialTodo}
                    setToDoInEditMode={this.SetToDoInEditMode.bind(this) }
                    deleteToDo={this.DeleteToDo.bind(this) }
                    toDos={this.state.toDos}
                    editToDo={this.EditToDo.bind(this) }
                    addToEditToDo={this.AddToEditToDo.bind(this) }
                    partialEditTodo={this.state.partialEditTodo}/>
            </div>
        )
    }
}