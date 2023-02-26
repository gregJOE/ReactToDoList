import React from 'react';
import { TodoLayout } from './components/TodoLayout';
import { TodoSearchField } from './components/TodoSearchField';
import { TodoList } from './components/TodoList';
import { TodoListFooter } from './components/TodoListFooter';
import { useFilterTodoList } from './hooks/useFilterTodoList';
import { useTodoItems } from './hooks/useTodoItems';
import { useComputeStats } from './hooks/useComputeStats';


const TodoListApp = () => {
    const { filter, setFilter } = useFilterTodoList()
    
    const {
        items,
        addItem,
        deleteItem,
        selectAllItems,
        unSelectAllItems,
        toggleTodoItem,
        filteredItems
    } = useTodoItems(filter)
  
    const { done, remaining, total } = useComputeStats(items)
    
    return (
        <>
            <TodoLayout 
                header={
                    <TodoSearchField 
                        onSubmit={addItem}
                        filter={filter}
                        onChangeFilter={setFilter}
                    /> 
                }
                list={
                    <TodoList 
                        items={filteredItems}
                        onDeleteItem={deleteItem}
                        onToggleItem={toggleTodoItem}
                    />
                }
                footer={
                    <TodoListFooter 
                        onCheckAll={selectAllItems} 
                        onUncheckAll={unSelectAllItems}
                        itemsTotal={total}
                        itemsUncompleted={remaining} 
                        itemsCompleted={done}
                    />
                }
            />   
        </>    
    )
}

export default TodoListApp;