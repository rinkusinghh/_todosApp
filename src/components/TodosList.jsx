import { TodosListItems } from './TodosListItems';
export const TodosList = ({ passTodosList, passOnDelete }) => {
    return(
        <div className="container my-3">
            <h1>Todo-List</h1>

           {passTodosList.length === 0 ? "No todoslist display here!" :
            passTodosList.map((val) => {
                return <TodosListItems passTodosListItems={val}
                passOnDeleteItems={passOnDelete} />
            })}
        </div>
    )
}