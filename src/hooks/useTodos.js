import { useMemo } from "react";

export const useTodos = (todos, filterQuery) => {
    const filteredTodos = useMemo(() => {
        const filters = {
            "all": [true, false],
            "active": [false],
            "completed": [true]
        };
        return todos.filter(todo => filters[filterQuery].some(f => f === todo.isComplete));
    }, [todos, filterQuery]);
    return filteredTodos;
}
