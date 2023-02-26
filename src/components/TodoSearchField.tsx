import React, { ReactElement, useEffect, useCallback, useRef, ChangeEvent, KeyboardEvent } from 'react';
import { TextField } from '@mui/material';

interface Props {
    onSubmit: (title: string) => void,
    filter: string,
    onChangeFilter: (valid: string) => void
}

export const TodoSearchField = (props: Props) : ReactElement => {
    const { filter, onChangeFilter, onSubmit } = props;

    const rFilter = useRef(filter)
        useEffect(() => {
            rFilter.current = filter
    }, [filter]);

    const handleOnChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            onChangeFilter(event.target.value)
        },
        [onChangeFilter]
    )

    const keyDownFunction = useCallback(
        (event: KeyboardEvent<HTMLInputElement>) => {
            if (event.code === 'Enter') {
                onSubmit(rFilter.current);
                onChangeFilter('');
            }
        }, 
        [onSubmit, onChangeFilter]
    )

    return (
        <TextField  
            id="outlined-basic" 
            placeholder="Filter todos (enter to add a new one)"
            variant="outlined"
            fullWidth
            onKeyDown={keyDownFunction}
            onChange={handleOnChange}
        />
    );
}
