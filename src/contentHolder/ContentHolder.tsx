import { HistoryOutlined } from '@ant-design/icons'
import { Timeline } from 'antd'
import './ContentHolder.css'

export default function ContentHolder() {
    const teste = () => <div>
        <span>Hello</span>
        <br />
        <span>world!</span>
    </div>
    return (
        <div className='content_holder'>
            <Timeline
                items={[
                    {
                        dot: <HistoryOutlined style={{ fontSize: '16px' }} />,
                        children: <br />
                    },
                    {
                    children: teste(),
                    },
                    {
                    children: 'Solve initial network problems 2015-09-01',
                    },
                    {
                    children: 'Technical testing 2015-09-01',
                    },
                    {
                    children: 'Network problems being solved 2015-09-01',
                    },
                ]}
            />
            <Timeline
                items={[
                    {
                    children: 'Create a services site 2015-09-01',
                    },
                    {
                    children: 'Solve initial network problems 2015-09-01',
                    },
                    {
                    children: 'Technical testing 2015-09-01',
                    },
                    {
                    children: 'Network problems being solved 2015-09-01',
                    },
                ]}
            />
        </div>
    )
}