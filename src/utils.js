const mapStateToProps = (state) => {
    return { ...state }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateInputField: (event) => dispatch({ type: "UPDATE_INPUT_FIELD", e: event }),
        updateCheckbox: (event, taskid) => dispatch({ type: "UPDATE_CHECKBOX", e: event, taskid}),
        addToList: (event) => dispatch({ type: "ADD_TO_LIST", e: event }),
        removeFromList: (event, taskid) => dispatch({ type: "REMOVE_FROM_LIST", taskid, e: event })
    }
}

export { mapStateToProps, mapDispatchToProps }