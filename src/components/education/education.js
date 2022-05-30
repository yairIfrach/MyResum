import React from 'react';
import { createStyles, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => createStyles({
    education: {
        width: '50%',
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
        width: ' 300px',
        marginLeft: '10px',
    },
    certDescription: {
        marginLeft: '10px',
        marginBottom: '-20px',
        fontStyle: 'oblique',
        color: '#2b2e2e',
        fontWeight: 'bold'
    },
    crtTitle: {
        display: 'flex',
        textDecoration: 'underline',
        fontWeight: 'bold',
        fontSize: '17px',
    },
}))

const Education = () => {
    const classes = useStyles()
    const titlesItems = [
        {
            'title': 'M.A.',
            'descreption': 'Law for computer engineer',
            'organization': 'Bar - Ilan university',
            'expTime': '2022 – ',
        },
        {
            'title': 'M.A.',
            'descreption': 'Security and Diplomacy, Political Science and Government',
            'organization': 'Tel - Aviv university',
            'expTime': '2020 – 2021',
        },
        {
            'title': 'B.Sc',
            'descreption': 'Computer Science',
            'organization': 'College of management',
            'expTime': '2016 – 2020',
        }
    ];

    const certificatesItems = [
        {
            'title': 'Python for developer',
            'org': 'MAMRAM Computer school',
            'date': '2020'
        },
        {
            'title': 'Java for developer',
            'org': 'MAMRAM Computer school',
            'date': '2019'
        },
        {
            'title': 'Communication networks',
            'org': 'MAMRAM Computer school',
            'date': '2018'
        },
        {
            'title': 'Cyber WarFare',
            'org': 'John Bryce',
            'date': '2017'
        },
        {
            'title': 'Design Pattern for software developers',
            'org': 'HackerU',
            'date': '2017'
        },
    ];

    const educationTitle = <div className={classes.title}>
        <img className={classes.image} src="/images/education.png" alt="education" />
        Education
    </div>
    const titleItemsCopm = titlesItems.map((item, index) =>
        <ListItem key={index}>
            <ListItemText
                primary={
                    <div className={classes.expTitle}>
                        <span className={classes.primeryColor}>{item.title} | </span>
                        <span className={classes.seconderyColor}>{item.organization}</span>
                    </div>}
                secondary={
                    <>
                        <span className={classes.subtitle}>{item.expTime}</span>
                        <strong className={classes.description}>{item.descreption}</strong>
                    </>
                }
            />
        </ListItem>
    );

    const certTitle = <span className={classes.crtTitle}>Certificates</span>
    const certItemsComp = certificatesItems.map((item, index) =>
        <ListItem className={classes.certDescription} key={index}>
            <ListItemText 
                primary={
                    <div key={index}>{item.title} | {item.org} ({item.date})</div>
                }
            />
        </ListItem>
    );

    return (
        <List className={classes.education}>
            {educationTitle}
            {titleItemsCopm}
            {certTitle}
            {certItemsComp}
        </List>
    );
}

export default Education;