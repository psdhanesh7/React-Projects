import React, {Component} from 'react';

class Addform extends Component{

    state = {
        content : ''
    }

    changeHandler = (e) => {
        this.setState({
          content : e.target.value
        })
      }


    submitHandler = (e) => {
        e.preventDefault();
        this.props.addTodos(this.state);
        this.setState({
            content : ''
        })
    }
    render(){
        return(
            <div>
                <form >
                    <label >Enter your todo's</label>
                    <input type="text" onChange = {this.changeHandler} value = {this.state.content} />
                    <button onClick = {this.submitHandler} >Submit</button>
                </form>
            </div>
        )
    }
}

export default Addform;