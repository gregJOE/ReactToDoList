import React, { type ReactElement }  from 'react';
import { Card, Box, Typography, Stack, Button } from '@mui/material';

import { TodoItem } from '../types/TodoItemInterface';
import { TodoItemElement } from './TodoItemElement';
import { Stats } from './Stats';


interface Props {
    onCheckAll: () => void,
    onUncheckAll: () => void,

    itemsTotal: number,
    itemsCompleted: number,
    itemsUncompleted: number
}

export const TodoListFooter = (props : Props) : ReactElement => {
    const { onCheckAll, onUncheckAll, itemsTotal, itemsCompleted, itemsUncompleted } = props;

    return (
        <Stack
            direction='column'
            spacing={2}
        >
            <Stats
                onCheckAll={onCheckAll}
                onUncheckAll={onUncheckAll}
                itemsTotal={itemsTotal}
                itemsCompleted={itemsCompleted}
                itemsUncompleted={itemsUncompleted}
            />
        </Stack>
    );
}
/*
                    <div>
                        <div>
                            # Done
                        </div>

                        <div>
                            # Remaining
                        </div>

                        <div>
                            Check All
                        </div>

                        <div>
                            UnCheck All
                        </div>  
                    </div>
                    */