import React from 'react';

export default class EditToDoInput extends React.Component{
    handleChange(e){
        this.props.addToEditToDo(e.target.value)
    }

    render(){
        return(
            <div>
                <div class = "form-group">                            
                        <input onChange={this.handleChange.bind(this)} class="form-control" value ={this.props.partialEditTodo}/>
                </div>    
            </div>
        )
    }
}