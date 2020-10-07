import React from 'react'
import { DatePicker, Tabs, Button, Row } from 'antd';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MMM-DD';

const { TabPane } = Tabs;



const DateComponent = () => {
    return (
        <>

            <Row justify="start" style={{ marginTop: '2%' }}><Link to="/"><Button type="link" ><LeftOutlined style={{ fontSize: '13px', color: '#BDBBBB' }} /> Back to Home </Button></Link></Row>

            <Tabs defaultActiveKey="1" centered >
                <TabPane tab="Specific" key="1">
                    <DatePicker  format={dateFormat} />
                </TabPane>
                <TabPane tab="Range" key="2">
                    <RangePicker
                        format={dateFormat}
                    />
                </TabPane>

            </Tabs>
        </>
    )
}

export default DateComponent
