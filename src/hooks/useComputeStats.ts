import { useMemo } from 'react'
import { TodoItem } from '../types/TodoItemInterface'

export const useComputeStats = ( items: TodoItem[]) => {
    return useMemo( () => {
        const doneCount = items.reduce( (acc, curr) => {
            if (curr.done) {
                return acc + 1;
            }
            return acc
        }, 0)

        return {
            done: doneCount,
            remaining: items.length - doneCount,
            total: items.length
        }
    }, [items])
}