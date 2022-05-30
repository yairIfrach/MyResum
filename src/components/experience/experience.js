import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(() => createStyles({
    icon: {
        width: '34px',
        height: '27px',
        marginLeft: '-35px',
        marginBottom: '-7px',
    },
    experience: {
        flex: '2',
        margin: '10px 0 0 80px',
    },
    title: {
        display: 'flex',
        textDecoration: 'underline',
        fontWeight: 'bold',
        fontSize: '23px',
    },
    image: {
        marginLeft: '-25px',
        width: '25px',
        height: '25px',
    },
    expTitle: {
        fontWeight: 'bold',
    },
    primeryColor: {
        color: '#7B524C',
    },
    seconderyColor: {
        color: '#7f8c8d',
    },
    subtitle: {
        color: 'black',
        marginLeft: '10px',
        fontStyle: 'italic',
    },
    description: {
        width: '50%',
        marginLeft: '10px',
    }
}))

const Experience = () => {
    const classes = useStyles();
    const experienceItems = [
        {
            'icon': '/images/Mazpenlogo.png',
            'title': 'Team leader of web development team',
            'organization': 'Communication corps, IDF',
            'expTime': 'Jan 2020 – feb 2022',
            'descreption': `Lead web development team in high scale operational system.
                            Partnered with other teams and departments. I managed 6 programmers, Q.A. and product manager.
                            The team built from scratch new apps with a large amount of users, interfacing with other systems `
        },
        {
            'icon': '/images/Mazpenlogo.png',
            'title': 'FullStack Developer',
            'organization': 'Communication corps, IDF',
            'expTime': 'Jan 2019 – Jan 2020',
            'descreption': `Take part in breaking an old monolith project to micro-services.
                            Develop new projects from scratch and work with new technologies.
                            Develop API to many clients in different networks. Dealing with old and complex systems`
        },
        {
            'icon': '/images/Hatal.png',
            'title': 'C++ Developer, product officer',
            'organization': 'Technology Corps For land, IDF',
            'expTime': 'Oct 2017 – Jan 2019',
            'descreption': `I have led and designed complex technological systems in collaboration with the defense industries.
                             I developed my own app that supported the system and won the Creative Thinking Award`
        }
    ];

    const expItemCopm = experienceItems.map((item, index) =>
        <ListItem key={index} alignItems="flex-start">
            <ListItemText
                primary={
                    <div className={classes.expTitle}>
                        <img className={classes.icon} alt={item.title} src={item.icon}></img>
                        <span className={classes.primeryColor}>{item.title} | </span>
                        <span className={classes.seconderyColor}>{item.organization}</span>
                    </div>}
                secondary={
                    <>
                        <span className={classes.subtitle}>{item.expTime}</span>
                        <div className={classes.descreption}>{item.descreption}</div>
                    </>
                }
            />
        </ListItem>
    );

    return (
        <div className={classes.experience}>
            <div className={classes.title}>
                <img className={classes.image} src="/images/work.png" alt="work" />
                Experience
            </div>
            <List>
                {expItemCopm}
            </List>
        </div>
    );
}
export default Experience;