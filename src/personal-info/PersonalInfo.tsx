import { Button } from 'antd'
import { MailFilled, LinkedinFilled, GithubFilled } from '@ant-design/icons'
import FaceImage from '../assets/Face.jpeg'
// import ProfilePicture from './ProfilePicture';
import Resume from '../assets/LucasCastelloResume.pdf'
import './PersonalInfo.css'

export default function PersonalInfo () {
    const openTab = (url : string) => {window.open(url, "_blank", "noreferrer")}
    const copyToClipboard = (str : string) => {
        navigator.clipboard.writeText(str)
        alert("Copied email to clipboard ")
    }
    
    return (
        <div className="personal_info">
            <div className='title'>
                <span className='name'>Lucas Castello</span>
                <br/>
                <span className='role'>Developer</span>
            </div>
            <img src={FaceImage} alt="Profile picture" />
            {/* <ProfilePicture showFace={true}/> */}
            <div className='contact_buttons'>
                <div>
                    <Button type='text' icon={<MailFilled style={{fontSize: '20px'}}/>} onClick={() => copyToClipboard('lucas.castello314@gmail.com')}/>
                    <Button type='text' icon={<GithubFilled style={{fontSize: '20px'}}/>} onClick={() => openTab('https://www.linkedin.com/in/lucastello/')}/>
                    <Button type='text' icon={<LinkedinFilled style={{fontSize: '20px'}}/>} onClick={() => openTab('https://github.com/LucasCastello')}/>
                </div>
                <a href={Resume} download="LucasCastelloResume" target='_blank'>
                    <Button>Download CV</Button>
                </a>
            </div>
        </div>
    )
}