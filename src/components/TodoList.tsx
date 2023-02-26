import React, { type ReactElement }  from 'react';
import { Box, Stack } from '@mui/material';

import { TodoItem as TodoItemDef } from '../types/TodoItemInterface';
import { TodoItemElement } from './TodoItemElement';


type Props = {
    items: TodoItemDef[],
    onDeleteItem: (id: number) => void,
    onToggleItem: (id: number) => void
}

export const TodoList = (props : Props) : ReactElement => {
    const { items, onDeleteItem, onToggleItem } = props;

    return (
        <Stack>
            {items.map( (item) => {
                return (
                    <TodoItemElement 
                        item={item} 
                        key={item.id}
                        deleteItemFn={onDeleteItem}
                        toggleItemFn={onToggleItem}
                    />
                )
            })}
        </Stack>
    );
}