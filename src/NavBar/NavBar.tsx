import { message } from 'antd';
import { MailFilled, LinkedinFilled, GithubFilled, DownloadOutlined } from '@ant-design/icons'
import logo from '../assets/castle_logo.png'
import resume from '../assets/LucasCastelloResume.pdf'
import './NavBar.css'

export default function NavBar() {
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
        <div className='routing_bar'>
            {contextHolder}
            <div>
                <button className='logo'>
                    <img src={logo} alt="logo" style={{height: 'inherit', width: 'inherit'}}/>
                </button>
            </div>
            <div className='right_side'>
                <div className='navigators'>
                    <button>Home</button>
                    <button>About me</button>
                    <button>Portfolio</button>
                </div>
                <div className='contacts'>
                    <button onClick={() => {navigator.clipboard.writeText('lucas.castello314@gmail.com'); displayInfo()}}><MailFilled/></button>
                    <button onClick={() => openTab('https://github.com/LucasCastello')}><GithubFilled /></button>
                    <button onClick={() => openTab('https://www.linkedin.com/in/lucastello/')}><LinkedinFilled /></button>
                </div>
                <a href={resume} download="LucasCastelloResume" target='_blank'>
                    <button className='resume_button'>Resume <DownloadOutlined /></button>
                </a>
            </div>
        </div>
    )
}
