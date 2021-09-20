import React, { Component } from "react"

export default class TaskList extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        const { updateCheckbox, task, removeFromList } = this.props

        return (
            <>
                <li style={{listStyle: "none"}}>
                    <label>
                        <input
                            type="checkbox"
                            checked={task.done}
                            taskid={task.id}
                            onChange={(e) => updateCheckbox(e)}
                            className="mx-2"
                        />
                        {task.title}
                    </label>
                    <button onClick={(e) => removeFromList(e, task.id)}>x</button>
                </li>
            </>
        )
    }
}

