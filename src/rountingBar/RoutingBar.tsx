import { Link } from 'react-router-dom'
import { Button } from 'antd'
import './RoutingBar.css'
import { HomeOutlined } from '@ant-design/icons'

function RoutingBar() {
    return (
        <div className='routing_bar'>
            <button className='home_button'>
                <Link to={'/'}>
                    <HomeOutlined style={{fontSize: '22px'}}/>
                </Link>
            </button>
            {/* <Button type='primary' size='large' icon={<HomeOutlined style={{fontSize: '22px'}}/>}/> */}
            <Button className='resume_button' type='text'>
                <Link to={'/resume'}>
                    Resume
                </Link>
            </Button>
            <Button className='portfolio_button' type='text'>
                <Link to={'/portfolio'}>
                    Portfolio
                </Link>
            </Button>
        </div>
    )
}

export default RoutingBar