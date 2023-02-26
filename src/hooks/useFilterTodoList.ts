import { useState } from 'react'

export function useFilterTodoList() {
  const [filter, setFilter] = useState('')

  return {
    filter,
    setFilter
  }
}
