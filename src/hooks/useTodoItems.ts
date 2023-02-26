import { useCallback, useMemo, useState } from 'react'
import { TodoItem } from '../types/TodoItemInterface';

function toggleAllItemInCollection(items: TodoItem[], forcedDone: boolean) {
    return items.map((item) => {
      return {
        ...item,
        done: forcedDone
      }
    })
  }

  function toggleItemInCollection(items: TodoItem[], todoId: number) {
    return items.map((item) => {
      if (item.id === todoId) {
        return {
          ...item,
          done: !item.done
        }
      }
  
      return item
    })
  }  

  function removeItemFromCollection(items: TodoItem[], todoId: number) {
    return items.reduce<TodoItem[]>((acc, curr) => {
      if (curr.id === todoId) return acc
      acc.push(curr)
      return acc
    }, [])
  }
  

const createGenerateIdFunction = () => {
    let lastIndex = 0
  
    return function generateId() {
      lastIndex++
      return lastIndex
    }
  }
  
  const generateNewListId = createGenerateIdFunction()
  
  function generateTodoItem(title: string): TodoItem {
    const newId = generateNewListId();

    return {
      title,
      id: newId,
      done: false
    }
  }
  
  function filterItems(items: TodoItem[], filter: string) {
    return items.reduce<TodoItem[]>((acc, curr) => {
      if (!curr.title.includes(filter)) {
        return acc;
      }
      acc.push(curr);

      return acc
    }, [])
  }
  

export const useTodoItems = (filter: string ) => {
    const [items, setItems] = useState<TodoItem[]>([]);

    const addItem = useCallback( (title: string) => {
        const newItem = generateTodoItem(title);
    
        setItems( (prev) => [...prev, newItem]);
    
    }, []);

    const deleteItem = useCallback( (id: number) => {
      setItems((prev) => removeItemFromCollection(prev, id))
    }, []);    

    
    const selectAllItems = useCallback( () => {
        setItems((prev) => toggleAllItemInCollection(prev, true))
    }, []);

    const unSelectAllItems = useCallback( () => {
        setItems((prev) => toggleAllItemInCollection(prev, false))
    }, []);

    const toggleTodoItem = useCallback( (todoId: number) => {
        setItems( (prev) => toggleItemInCollection(prev, todoId))
    }, []);
    
    const filteredItems = useMemo( () => {
        const newItems = filterItems(items, filter);
        return newItems;

    }, [items, filter]);

    return {
        items,
        addItem,
        deleteItem,
        selectAllItems,
        unSelectAllItems,
        toggleTodoItem,
        filteredItems
    };
}