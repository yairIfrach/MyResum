import { createStyles, makeStyles } from '@material-ui/core';

export const onStyleButton = makeStyles(() => createStyles({
    righetButton: {
        textTransform: 'inherit',
        color: 'green'
    },
    leftButton: {
        textTransform: 'inherit',
        color: 'red'
    }
}), { flip: false })