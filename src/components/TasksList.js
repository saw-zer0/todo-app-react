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
                <li style={{listStyle: "none"}} className="row p-1 m-1 border bg-secondary text-light">
                    <label className="col">
                        <input
                            type="checkbox"
                            checked={task.done}
                            taskid={task.id}
                            onChange={(e) => updateCheckbox(e)}
                            className="mx-2 "
                        />
                        {task.title}
                    </label>
                    <button onClick={(e) => removeFromList(e, task.id)} className="btn-danger mx-4 col-1">x</button>
                </li>
            </>
        )
    }
}

