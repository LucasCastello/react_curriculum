import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import './RoutingBar.css'

function RoutingBar() {
    enum Styles {
        LIGHT = 'lightSelector',
        DARK = 'darkSelector'
    }
    const [homeStyle, setHomeStyle] = useState<Styles>(Styles.LIGHT)
    const [resumeStyle, setResumeStyle] = useState<Styles>(Styles.DARK)
    const [portfolioStyle, setPortfolioStyle] = useState<Styles>(Styles.DARK)

    function changeStyles(lightStyleSetter: (style: Styles)=> void) {
        setHomeStyle(Styles.DARK)
        setResumeStyle(Styles.DARK)
        setPortfolioStyle(Styles.DARK)

        lightStyleSetter(Styles.LIGHT)
    }
    return (
        <div className='routing_bar'>
            <Link to={'/'}>
                <Button className={homeStyle} type='text' onClick={() => {changeStyles(setHomeStyle)}}>
                    About me
                </Button>
            </Link>
            <Link to={'/resume'}>
                <Button className={resumeStyle} type='text' onClick={() => {changeStyles(setResumeStyle)}}>
                    Curriculum
                </Button>
            </Link>
            <Link to={'/portfolio'}>
                <Button className={portfolioStyle} type='text' onClick={() => {changeStyles(setPortfolioStyle)}}>
                    Portfolio
                </Button>
            </Link>
        </div>
    )
}

export default RoutingBar