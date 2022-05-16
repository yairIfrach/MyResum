import { createStyles, makeStyles } from '@material-ui/core';
import React from 'react';
import LinkedProfile from './linked-profile/linked-profile';
import StaticProfile from './static-profile/static-profile';

const useStyles = makeStyles(() => createStyles({
    about: {
        display: 'flex',
        flexDirection: 'column',
        flex: 2,
        margin: '10px 0 0 80px',
    },
    aboutStatic: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '10px',
    },
    aboutLinked: {
        display: 'flex',
    },
}))

const About = () => {
    const classes = useStyles()
    return (
        <div className={classes.about}>
            <div className={classes.aboutStatic}>
                <StaticProfile name="Yair.ifrach2000@gmail.com" imgSource="/images/email.png" title="Email Address" />
                <StaticProfile name="31 / 07 / 1996" imgSource="/images/age.png" title="Birth Date" />
                <StaticProfile name="05558856756" imgSource="/images/phon.jpg" title="Phon" />
                <StaticProfile name="Israel" imgSource="/images/location.png" title="Country" />
            </div>
            <div className={classes.aboutLinked}>
                <LinkedProfile link="https://www.linkedin.com/in/yair-ifrach-877372106/" imgSource="/images/linkedin.png" title="LinkedIn" />
                <LinkedProfile link="mnmn" imgSource="/images/imagePdf.png" title="Downold C.V." />
                <LinkedProfile link="https://github.com/yairIfrach" imgSource="/images/github.png" title="GitHub" />
            </div>
        </div>
    );
}

export default About;