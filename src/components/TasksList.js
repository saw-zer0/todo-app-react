import React, { Component } from "react"
import {connect} from "react-redux"
import {mapStateToProps, mapDispatchToProps} from "../utils"


class TaskList extends Component {
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
                            onChange={(e) => updateCheckbox(e, task.id)}
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
TaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList);

export default TaskList;