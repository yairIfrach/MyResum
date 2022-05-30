import { createStyles, makeStyles } from '@material-ui/core';

export const onStyleButton = makeStyles(() => createStyles({
    righetButton: {
        backgroundColor: '#01e552d1',
        color: 'white',
        borderRadius: '25px',        
        fontWeight: 'bold',
        textTransform: 'inherit',
        '&:hover': {
            backgroundColor: "#ffffff",
            outline: 'auto',
            color: '#000000',

        }
    },
    leftButton: {
        backgroundColor: '#ff0712d1',
        color: 'white',
        borderRadius: '25px',        
        fontWeight: 'bold',
        textTransform: 'inherit',
        '&:hover': {
            backgroundColor: "#ffffff",
            outline: 'auto',
            color: '#000000',

        }
    }
}), { flip: false })