import React from "react"

export default class NewTaskForm extends React.Component{

    constructor(props){
        super(props)
        this.props = props
    }

    render(){
        const {inputValue, addToList, updateInputField} = this.props

        return (
        
            <form onSubmit={(e) => addToList(e)} className="mx-auto w-25 row">
                <textarea
                    rows="2"
                    placeholder="add your task"
                    name="task-input"
                    value={inputValue}
                    onChange={(e) => updateInputField(e)}
                    className="col-8 gap-2 mx-1"
                />
                <input type="submit" className="col-3 btn-info" />
            </form>
        )
    }
}

