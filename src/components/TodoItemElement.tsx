import React, { useCallback, type ReactElement } from 'react';
import { ListItem,
    IconButton,
    ListItemButton,
    ListItemIcon,
    Checkbox,
    ListItemText
} from '@mui/material';

import { Delete } from '@mui/icons-material'

import { TodoItem } from '../types/TodoItemInterface';

interface Props {
    item: TodoItem,
    key: number,
    deleteItemFn: (id:  number) => void,
    toggleItemFn: (id:  number) => void
}

export const TodoItemElement = (props : Props) : ReactElement => {
    const { item, deleteItemFn, toggleItemFn } = props;
    const { id: itemId } = item;

    const handleOnDelete = useCallback(() => {
        deleteItemFn(itemId)
    }, [itemId, deleteItemFn]);

    const handleOnToggle = useCallback(() => {
        toggleItemFn(itemId)
    }, [itemId, toggleItemFn]);

    return (
        <ListItem
            key={item.id}
            secondaryAction={
                <IconButton onClick={handleOnDelete} edge="end" aria-label="delete">
                    <Delete />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton onClick={handleOnToggle} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={item.done}
                        tabIndex={-1}
                        disableRipple
                    />
                </ListItemIcon>
                <ListItemText primary={item.title} />
            </ListItemButton>
        </ListItem>
    )
}