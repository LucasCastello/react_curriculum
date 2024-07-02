import ProfilePicture from '../assets/Foto de Perfil.jpeg'
import './PersonalInfo.css'
import {  Button } from '@mui/material'

function PersonalInfo () {
    return (
        <div className="personal_info">
            <div className='title'>
                <span className='name'>Lucas Castello</span>
                <br/>
                <span className='role'>Developer</span>
            </div>

            <img src={ProfilePicture} alt="Profile picture" />
            <div className='infos'>
                <span className='email'>E-mail: lucas.castello314@gmail.com</span>
                <br/>
                <span>LinkedIn: </span>
                <a href='https://www.linkedin.com/in/lucastello/' className='linkedin'>lucastello</a>
                <br/>
                <span>GitHub: </span>
                <a href='https://github.com/LucasCastello' className='github'>LucasCastello</a>
            </div>
            <Button className='download_button' variant='contained'>Download CV</Button>
        </div>
    )
}

export default PersonalInfo