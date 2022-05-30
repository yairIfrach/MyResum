import React, { useState } from 'react';
import { Chip, createStyles, makeStyles } from '@material-ui/core';
import { DialogTitle, Dialog, Button, DialogContent, DialogActions } from '@material-ui/core';

const useStyles = makeStyles(() => createStyles({
    skills: {
        flex: '1.8'
    },
    skillsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    title: {
        display: 'flex',
        textDecoration: 'underline',
        fontWeight: 'bold',
        fontSize: '23px',
        marginTop: '11px',
    },
    image: {
        marginLeft: '-10px',
        width: '25px',
        height: '25px',
    },
    skill: {
        backgroundColor: '#fdcb6e',
        margin: '5px',
        color: '#7B524C',
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: "#ffffff",
            border: `2px solid #fdcb6e`,
        },
    },
    objective: {
        fontSize: '15px',
        fontStyle: 'italic',
        color: '#7B524C',
        fontWeight: 'bold'
    },
    chineseMasegge:{
        fontSize: '23px',
        color: '#546de7',
        fontStyle: 'italic',
        textAlign:'center',
    },
}))

const Skills = () => {
    const classes = useStyles()
    const skillsNames = ['Web Development', 'Software Development',
        'Javascript', 'Typescript', 'React', 'React-Hooks', 'NodeJS', 'PostgreSQL', 'GraphQL', 'SQL',
        'Git', 'Docker', 'Openshift', 'C#', '.Net Framework', 'OOP', 'Cpp'];

    const [openDialog, setOpenDialog] = useState(false);
    const [oldManMasegge, setOldManMasegge] = useState();
    const handleClickDialog = (event) => setOpenDialog(!event);

    const handleClick = () => {
        const wisdomSentences = ['Skill is no burden.', 'Skill and confidence are an unconquered army.', 'True mastery of any skill takes a lifetime.',
            'He is a negotiator of considerable skill.', 'Making small models requires manual skill.', 'The writer showed great rhetorical skill.'];
        setOldManMasegge(wisdomSentences[Math.floor(Math.random() * wisdomSentences.length)])
        handleClickDialog()
    }

    const chipsComp = skillsNames.map((skill, index) =>
        <Chip className={classes.skill} label={skill} key={index} onClick={handleClick} />
    )

    return (
        <div className={classes.skills}>
            <span className={classes.objective}>
                Software engineer with 4 years of experience,<br />
                eager to learn more technologies and become a better developer.
            </span>
            <div className={classes.title}>
                <img className={classes.image} src="/images/skills.png" alt="skills" />
                Skills
            </div>
            <div className={classes.skillsContainer}>
                {chipsComp}
            </div>
            <Dialog
                open={openDialog}
                onClose={handleClickDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Take a random wisdom sentence. It's free!
                </DialogTitle>
                <DialogContent>
                    We talk a lot about ability, talent, experience and skill...
                    An old Chinese man said:
                </DialogContent>
                <DialogContent className={classes.chineseMasegge}>
                    {oldManMasegge}
                </DialogContent>
                <DialogActions >
                    <Button onClick={handleClickDialog}  > Thanks!</Button>
                    <Button onClick={handleClickDialog} href='https://sentencedict.com/skill.html' >I want to hear more</Button>
                </DialogActions>

            </Dialog>
        </div>
    );
}

export default Skills;