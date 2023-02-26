import React, { ReactElement, ReactNode } from 'react';
import { Container, Stack, Paper, Typography } from '@mui/material';

type Props = {
    header: ReactNode,
    list: ReactNode,
    footer: ReactNode,
};

export const TodoLayout = (props : Props) : ReactElement => {
    const { header, list, footer } = props;

    return (
        <Container maxWidth="sm">
            <Typography variant="h4">
                Todo list
            </Typography>
            <Stack sx={{ width: 300, gap: 3, height: '100vh' }}>
                {header}
                {list}
                {footer}
            </Stack>
        </Container>
    );
}