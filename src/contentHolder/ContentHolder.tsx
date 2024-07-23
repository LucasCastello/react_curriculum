import { HistoryOutlined } from '@ant-design/icons'
import { Timeline } from 'antd'
import './ContentHolder.css'
import ResumeContent from './ResumeContent'
import parse from 'html-react-parser';
import WorkIcon from '@mui/icons-material/Work';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Container, Grid } from '@mui/material';

export default function ContentHolder() {
    const Tsystems = () =>  <div className='tsystems'>
                                <h4 style={{margin: 0}}>{ResumeContent.tsystems.title}</h4>
                                <h6 style={{margin: 0}}>{ResumeContent.tsystems.date}</h6>
                                {/* <h6 style={{margin: 0}}>{ResumeContent.tsystems.description}</h6> */}
                                {/* <h5 style={{margin: 0}}>{ResumeContent.tsystems.job}</h5> */}
                                <p>{ResumeContent.tsystems.experience}</p>
                            </div>
    
    const Mywork = () =>    <div>
                                <h4 style={{margin: 0}}>{ResumeContent.tsystems.title}</h4>
                                {/* <h6 style={{margin: 0}}>Startup focused on HR solutions for small and medium-sized companies</h6> */}
                                {/* <h5 style={{margin: 0}}>Full-Stack Web Developer (Feb 2022 – Jun 2023)</h5> */}
                                <p>{ResumeContent.mywork.experience}</p>
                            </div>
    
    const Unicamp = () =>  <>
                                <h3 style={{margin: 0}}>State University of Campinas (UNICAMP, Campinas-SP)</h3>
                                <h5 style={{margin: 0}}>Computer Science and Computer Engineering (Mar 2019 – Dec 2023)</h5>
                                <p style={{margin: 0}}>Extra credits on digital images, machine learning, programming paradigms and advanced physics.</p>
                            </>
    
    const Embrapa = () =>  <>
                                <h4 style={{margin: 0}}>{ResumeContent.embrapa.title}</h4>
                                {/* <h6 style={{margin: 0}}>State corporation created to develop technologies aimed at agriculture</h6> */}
                                {/* <h5 style={{margin: 0}}>Undergraduate researcher (Sep 2021 – Feb 2022)</h5> */}
                                <p style={{margin: 0}}>{ResumeContent.embrapa.experience}</p>
                            </>
    
    const Eracing = () =>  <>
                                <h4 style={{margin: 0}}>{ResumeContent.eracing.title}</h4>
                                {/* <h6 style={{margin: 0}}>UNICAMP’s Formula SAE eletric team, starting an autonomous project at the time</h6> */}
                                {/* <h5 style={{margin: 0}}>Autonomous System Vision Leader (Jul 2021 – Dec 2021)</h5> */}
                                <p style={{margin: 0}}>Led a four member team to optmize the vision pipeline. Framerate increased by 4 times.</p>
                                <h5 style={{margin: 0}}>Developer I (Jan 2024 – Jun 2024)</h5>
                                <p style={{margin: 0}}>Implemented the server and client sides of an Intrusion Detection System for cars, using <b>C++</b>. Also developed a way for testing it using <b>Python</b>.</p>
                                <h5 style={{margin: 0}}>Developer I (Jan 2024 – Jun 2024)</h5>
                                <p style={{margin: 0}}>Implemented the server and client sides of an Intrusion Detection System for cars, using <b>C++</b>. Also developed a way for testing it using <b>Python</b>.</p>
                            </>
    
    return (
        <div className='content_holder'>
            <Grid item>
                <Grid container style={{justifyContent: 'space-evenly'}}>
                    <Grid item sm={12} md={5} style={{marginTop: '10px'}}>
                        <Timeline
                            items={[
                                {
                                    dot: <WorkIcon style={{ fontSize: '30px', color: 'black' }} />,
                                    children: <strong style={{fontSize: '1rem'}}>Working History</strong>
                                },
                                {
                                    children: <Tsystems/>,
                                },
                                {
                                children: <Mywork/>,
                                },
                                {
                                children: <Embrapa/>,
                                },
                                // {
                                // children: <Eracing/>,
                                // },
                            ]}
                        />
                    </Grid>
                    <Grid item sm={12} md={5} style={{marginTop: '15px'}}>
                        <Timeline
                            items={[
                                {
                                    dot: <MenuBookIcon style={{ fontSize: '30px', color: 'black' }} />,
                                    children: <strong style={{fontSize: '1rem'}}>Education History</strong>
                                },
                                {
                                    children: <Tsystems/>,
                                },
                                {
                                children: <Mywork/>,
                                },
                                {
                                children: <Embrapa/>,
                                },
                                // {
                                // children: <Eracing/>,
                                // },
                            ]}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}