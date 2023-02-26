import React, { type ReactElement } from 'react';
import { Card, Box, Checkbox, Typography, Stack } from '@mui/material';

import { TodoItem } from './types/TodoItemInterface';

type Props = {
    item: TodoItemInterface,
    key: number
}

export const TodoItemElement = (props : Props) : ReactElement => {
    const { item, key} = props;

    const isChecked = item.done;

    return (
        <Box 
            sx={{
                width: 500,
                maxWidth: '100%',
            }}
        >
            {item ? (
                <Card 
                    variant="outlined" 
                    key={key}
                    sx={{
                        my: '3rem',
                        height: '4rem'
                    }}
                >
                    <Stack
                        direction="row" 
                        spacing={2}
                    >
                        <Box
                            sx={{
                                mr: '2rem',
                            }}              
                        >
                            <Checkbox defaultChecked={isChecked}                          
                            />
                        </Box>
                        <Typography variant='h5'>
                            {item.title} 
                        </Typography>                        
                    </Stack >                    
                </Card>
            ) : (
                null
            )}
        </Box>
    );
}