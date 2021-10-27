import React from 'react'

export const TodosListItems = ({ passTodosListItems, passOnDeleteItems }) => {
    return (
        <div>
            <h5>{ passTodosListItems.title }</h5>
            <h5 >{ passTodosListItems.notes }</h5>
            <button className="btn
            my-1
            btn-sm 
            btn-danger" onClick={() => passOnDeleteItems(passTodosListItems)}>
            Delete</button>
        </div>
    )
}
