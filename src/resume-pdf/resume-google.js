import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Avatar, SvgIcon, Typography } from '@material-ui/core';
import profilePic from './profile.jpeg';
import { Email, Phone } from '@material-ui/icons';
import { LinkedIn } from './linkedin';

function Resume() {
    return (
        <div className={css(styles.page)}>
            <div className={css(styles.headerDivWrapper)}>
                <div className={css(styles.headerDiv)}>
                    <div className={css(styles.profilePicWrapper)}>
                        <div className={css(styles.profilePic)}>
                            <img
                                src={profilePic}
                                className={css(styles.profileImage)}
                            />
                        </div>
                    </div>
                    <div className={css(styles.nameSection)}>
                        <Typography
                            variant='h4'
                            className={css(
                                styles.uppercaseText,
                                styles.emphasizedText,
                            )}
                        >
                            John T. Lehett
                        </Typography>
                        <Typography
                            variant='h6'
                            style={{ textAlign: 'left', color: 'white' }}
                            className={css(styles.uppercaseText)}
                        >
                            Software Developer
                        </Typography>
                    </div>
                    <div className={css(styles.contactSection)}>
                        <div className={css(styles.contactItem)}>
                            <Email className={css(styles.contactIcon)}/>
                            <Typography
                                variant='body1'
                                className={css(styles.contactText)}
                            >
                                jlehett117@knights.ucf.edu
                            </Typography>
                        </div>
                        <div className={css(styles.contactItem)}>
                            <Phone className={css(styles.contactIcon)}/>
                            <Typography
                                variant='body1'
                                className={css(styles.contactText)}
                            >
                                724-614-8499
                            </Typography>
                        </div>
                        <div className={css(styles.contactItem)}>
                            <SvgIcon style={{color: 'white', fontSize: '30px'}}>
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </SvgIcon>
                            <Typography
                                variant='body1'
                                className={css(styles.contactText)}
                            >
                                https://github.com/jlehett
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
            <div className={css(styles.resumeBodyWrapper)}>
                <div className={css(styles.resumeBody)}>
                    <div className={css(styles.bodyLeft)}>
                        <div className={css(styles.sectionHeader)}>
                            <Typography
                                variant='h6'
                                className={css(
                                    styles.uppercaseText,
                                    styles.sectionHeaderText,
                                )}
                            >
                                Education
                            </Typography>
                            <div className={css(styles.sectionUnderline)}/>
                        </div>
                        <div className={css(styles.sectionBody)}>
                            <div
                                style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', width: '100%' }}
                            >
                                <Typography variant='body1'>
                                    <b>University of Central Florida</b>
                                </Typography>
                                <Typography variant='body1'>
                                    May 2021
                                </Typography>
                            </div>
                            <div
                                style={{ marginTop: '8px', display: 'flex', justifyContent: 'space-between', width: '100%' }}
                            >
                                <Typography variant='body2'>
                                    <i>Bachelor's in Computer Science</i><br/>
                                    <i>Minor in Intelligent Robotic Systems</i>
                                </Typography>
                                <Typography variant='body2'>
                                    GPA: 3.98
                                </Typography>
                            </div>
                        </div>
                        <div className={css(styles.sectionDivider)}/>
                        <div className={css(styles.sectionHeader)}>
                            <Typography
                                variant='h6'
                                className={css(
                                    styles.uppercaseText,
                                    styles.sectionHeaderText,
                                )}
                            >
                                Main Projects
                            </Typography>
                            <div className={css(styles.sectionUnderline)}/>
                        </div>
                        <div className={css(styles.sectionBody)}>
                            <Typography
                                variant='body1'
                                style={{ marginTop: '16px' }}
                            >
                                <b>Senior Design - Reinforcement Learning</b>
                            </Typography>
                            <Typography
                                variant='body2'
                                style={{ marginTop: '2px' }}
                            >
                                Project Manager of Senior Design team
                                focused on developing reinforcement learning
                                algorithms for use in Lockheed Martin's
                                Everglades environment.
                                <div style={{ marginTop: '8px' }}/>
                                In charge of setting milestones, keeping
                                an up-to-date burndown chart to track progress,
                                hosting weekly standup meetings, and coordinating
                                development on a complex system in a team of 5.
                            </Typography>
                            <Typography
                                variant='body1'
                                style={{ marginTop: '16px' }}
                            >
                                <b>Ray Tracing Visualizer</b>
                            </Typography>
                            <Typography
                                variant='body2'
                                style={{ marginTop: '2px' }}
                            >
                                Worked with UCF professor to develop a web-based
                                ray tracing visualizer to help teach students.
                                <div style={{ marginTop: '8px' }}/>
                                Simulation allowed user to load in a 3D scene defined
                                in JSON, and display an outline of objects in the scene.
                                User was able to place lighting nodes in the scene,
                                and observe how lighting rays reach the object and
                                bounce toward a defined camera point.
                            </Typography>
                        </div>
                        <div className={css(styles.sectionDivider)}/>
                        <div className={css(styles.sectionHeader)}>
                            <Typography
                                variant='h6'
                                className={css(
                                    styles.uppercaseText,
                                    styles.sectionHeaderText,
                                )}
                            >
                                Experience
                            </Typography>
                            <div className={css(styles.sectionUnderline)}/>
                        </div>
                        <div className={css(styles.sectionBody)}>
                            <div
                                style={{ marginTop: '8px', display: 'flex', justifyContent: 'space-between', width: '100%' }}
                            >
                                <Typography variant='body1'>
                                    <b>Career Fair Plus - Internship</b>
                                </Typography>
                                <Typography variant='body1'>
                                    May 2020 - Present
                                </Typography>
                            </div>
                            <div
                                style={{ marginTop: '8px', display: 'flex', justifyContent: 'space-between', width: '100%' }}
                            >
                                <Typography
                                    variant='body2'
                                >
                                    Full-stack development of MEAN, MERN, and RN platforms, and
                                    supporting Firebase Functions.
                                    <div style={{ marginTop: '4px' }}/>
                                    Accelerated implementation of schedule creation feature
                                    by 75% by determining how to parallelize the required
                                    work on the task.
                                    <div style={{ marginTop: '4px' }}/>
                                    Responsible for creation of tech design document detailing
                                    various options for capturing and displaying live updates
                                    to users. 
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div className={css(styles.middleDivider)}/>
                    <div className={css(styles.bodyRight)}>
                        <div className={css(styles.sectionHeader)}>
                            <Typography
                                variant='h6'
                                className={css(
                                    styles.uppercaseText,
                                    styles.sectionHeaderText,
                                )}
                            >
                                Profile
                            </Typography>
                            <div className={css(styles.sectionUnderline)}/>
                        </div>
                        <Typography
                            variant='body2'
                            style={{ marginTop: '16px' }}
                        >
                            I am an aspiring AI and Web Developer,
                            and I love creating art with code.<br/>
                            <div style={{ marginTop: '8px' }}/>
                            My passion is developing automation
                            technologies that give people more time to do 
                            the things they love.
                        </Typography>
                        <div className={css(styles.sectionDivider)}/>
                        <div
                            className={css(styles.sectionHeader)}
                        >
                            <Typography
                                variant='h6'
                                className={css(
                                    styles.uppercaseText,
                                    styles.sectionHeaderText,
                                )}
                            >
                                Other Projects
                            </Typography>
                            <div className={css(styles.sectionUnderline)}/>
                        </div>
                        <Typography
                            variant='body1'
                            style={{ marginTop: '16px' }}
                        >
                            <b>Lehett.NET</b>
                        </Typography>
                        <Typography
                            variant='body2'
                            style={{ marginTop: '2px' }}
                        >
                            Personal website built to showcase projects I
                            have worked on. Hosted at www.lehett.net.
                        </Typography>
                        <Typography
                            variant='body1'
                            style={{ marginTop: '16px' }}
                        >
                            <b>PilePlan</b>
                        </Typography>
                        <Typography
                            variant='body2'
                            style={{ marginTop: '2px' }}
                        >
                            Utilized Socket.IO to develop a backend for an Agile poker
                            bidding website that assists in hosting remote Scrum meetings.
                        </Typography>
                        <Typography
                            variant='body1'
                            style={{ marginTop: '16px' }}
                        >
                            <b>Finger Detection Software</b>
                        </Typography>
                        <Typography
                            variant='body2'
                            style={{ marginTop: '2px' }}
                        >
                            Researched and implemented prototype finger
                            detection software that operates in real-time
                            using OpenCV and Keras.
                        </Typography>
                        <div className={css(styles.sectionDivider)}/>
                        <div
                            className={css(styles.sectionHeader)}
                        >
                            <Typography
                                variant='h6'
                                className={css(
                                    styles.uppercaseText,
                                    styles.sectionHeaderText,
                                )}
                            >
                                Knowledge
                            </Typography>
                            <div className={css(styles.sectionUnderline)}/>
                        </div>
                        <div style={{ marginTop: '12px' }}/>
                        <Typography variant='body2'>
                            <b>AI:</b>&nbsp;
                            Keras, NumPy, OpenCV, Pandas, PyTorch,
                            TensorFlow
                        </Typography>
                        <div style={{ marginTop: '8px' }}/>
                        <Typography variant='body2'>
                            <b>Web:</b>&nbsp;
                            Angular, Express,
                            MongoDB, MySQL, Node.js, React,
                            Socket.IO
                        </Typography>
                        <div style={{ marginTop: '8px' }}/>
                        <Typography variant='body2'>
                            <b>Project Management:</b>&nbsp;
                            Agile, Burndown Charts, Gantt Charts,
                            Jira, Tech Designs
                        </Typography>
                        <div style={{ marginTop: '8px' }}/>
                        <Typography variant='body2'>
                            <b>DevOps:</b>&nbsp;
                            AWS, Bash Scripting, BitBucket Pipelines,
                            Firebase, Git, Heroku
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

const emphasizedColor = '#e31b6d';
const backgroundColor = '#171e29';

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: '25px',
        background: '#ebedf0',
        color: '#626363',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    skillLevel: {
        width: '100%',
        height: '15px',
        background: '#cccccc',
    },
    activeSkill: {
        background: emphasizedColor,
        height: '100%',
        borderRight: '3px solid white',
    },
    sectionUnderline: {
        background: emphasizedColor,
        width: '60px',
        height: '6px',
    },
    sectionBody: {
        textAlign: 'left',
        width: '95%',
    },
    sectionDivider: {
        width: '96%',
        margin: '20px 0',
        height: '1px',
        background: 'rgba(0, 0, 0, 0.15)',
    },
    middleDivider: {
        background: 'rgba(0, 0, 0, 0.15)',
        width: '1px',
        height: '100%',
        alignSelf: 'center',
    },
    bodyLeft: {
        display: 'flex',
        flexDirection: 'column',
        width: '65%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    bodyRight: {
        width: '40%',
        marginLeft: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        textAlign: 'left',
    },
    resumeBodyWrapper: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    resumeBody: {
        display: 'flex',
        flexDirection: 'row',
        height: '93%',
        width: '89%',
        transform: 'translate(0, -10px)',
    },
    uppercaseText: {
        textTransform: 'uppercase',
    },
    sectionHeaderText: {
        fontWeight: '500',
        fontSize: '22px',
    },
    emphasizedText: {
        color: emphasizedColor,
        fontWeight: '500'
    },
    contactSection: {
        marginLeft: '40px',
        height: 'fit-content',
        marginTop: '-10px',
    },
    contactIcon: {
        color: 'white',
        fontSize: '30px',
    },
    contactText: {
        color: 'white',
        marginLeft: '10px',
        fontWeight: '600',
    },
    contactItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'fit-content',
        marginBottom: '12px',
    },
    page: {
        width: '794px',
        height: '1122px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    headerDivWrapper: {
        width: '100%',
        height: '200px',
        display: 'flex',
        alignItems: 'flex-end',
        background: backgroundColor,
        flexDirection: 'row',
    },
    headerDiv: {
        width: '100%',
        height: '130px',
        display: 'flex',
        flexDirection: 'row',
        borderBottom: '4px solid ' + emphasizedColor,
    },
    profilePicWrapper: {
        width: '100px',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'white',
        borderRadius: '50%',
        marginLeft: '55px',
    },
    profilePic: {
        width: '90px',
        height: '90px',
        borderRadius: '50%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        transform: 'scale(0.23) translate(0, 70px)',
        filter: 'saturate(0.8)',
    },
    nameSection: {
        height: 'fit-content',
        marginTop: '12px',
        marginLeft: '24px',
    },
});

export default Resume;
