import React, { type ReactElement }  from 'react';
import { Box, Chip } from '@mui/material';
import { Done, Close } from '@mui/icons-material';

interface Props {
    onCheckAll: () => void,
    onUncheckAll: () => void,

    itemsTotal: number,
    itemsCompleted: number,
    itemsUncompleted: number
}

export const Stats = (props : Props) : ReactElement => {
    const { onCheckAll, onUncheckAll, itemsTotal, itemsCompleted, itemsUncompleted } = props;

    return (
        <Box
            display="flex"
            justifyContent="space-between"
        >
            <Chip
                label={`Done: ${itemsCompleted}/${itemsTotal}`}
                onDelete={onCheckAll}
                deleteIcon={<Done />}
            />

            <Chip
                label={`Remaining: ${itemsUncompleted}/${itemsTotal}`}
                onDelete={onUncheckAll}
                deleteIcon={<Close />}
            />
        </Box>
    );
}