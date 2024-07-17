import { Button, message } from 'antd'
import { MailFilled, LinkedinFilled, GithubFilled, DownloadOutlined } from '@ant-design/icons'
import FaceImage from '../assets/Face.jpeg'
// import ProfilePicture from './ProfilePicture';
import Resume from '../assets/LucasCastelloResume.pdf'
import './PersonalInfo.css'

export default function PersonalInfo () {
    const [messageApi, contextHolder] = message.useMessage();
    const displayInfo = () => {
        messageApi.open({
            type: 'success',
            content: 'E-mail copied to clipboard',
            className: 'custom-class',
        });
    };
    const openTab = (url : string) => {window.open(url, "_blank", "noreferrer")}
    
    return (
        <div className="personal_info">
            {contextHolder}
            <div className='title'>
                <span className='name'>Lucas Castello</span>
                <br/>
                <span className='role'>Developer</span>
            </div>
            <img src={FaceImage} alt="Profile picture" />
            <div className='contact_buttons'>
                <div>
                    <Button type='text' icon={<MailFilled style={{fontSize: '20px'}}/>} onClick={() => {navigator.clipboard.writeText('lucas.castello314@gmail.com'); displayInfo()}}/>
                    <Button type='text' icon={<GithubFilled style={{fontSize: '20px'}}/>} onClick={() => openTab('https://www.linkedin.com/in/lucastello/')}/>
                    <Button type='text' icon={<LinkedinFilled style={{fontSize: '20px'}}/>} onClick={() => openTab('https://github.com/LucasCastello')}/>
                </div>
                <a href={Resume} download="LucasCastelloResume" target='_blank'>
                    <Button className='download_button'>
                        <span>Download CV</span>
                        <span><DownloadOutlined /></span>
                    </Button>
                </a>
            </div>
        </div>
    )
}