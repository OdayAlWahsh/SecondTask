import Title from 'antd/lib/skeleton/Title';
import React, { useState, useEffect } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Button, Typography, Row, AutoComplete, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';

const PhoneComponent = () => {
    const { Title } = Typography;


    const [phone, SetPhone] = useState();
    useEffect(() => {
        console.log("Phone" + phone);
    }, [phone])
    const options = [
        { value: '+1', label: 'United States (+1)' },
        { value: '+32', label: 'Belgium (+32)'},
        { value: '+91', label: 'India (+91)'},
        { value: '+44', label: 'England (+44)'},
        { value: '+33', label: 'France (+33)'},
        { value: '+46', label: 'Sweden (+46)'},
        { value: '+963', label: 'Syria (+963)'},
        { value: '+970', label: 'Palestine (+970)'},
        { value: '+962', label: 'Jordan (+962)'},
    ];
    function onChange(value) {
        console.log(`selected ${value}`);
      }
    return (
        <>
            <Row justify="start" style={{ marginTop: '2%' }}><Link to="/"><Button type="link" ><LeftOutlined style={{ fontSize: '13px', color: '#BDBBBB' }} /> Back to Home </Button></Link></Row>
            <div style={{ width: '20%', marginLeft: '38%', marginTop: '40px' }}>
            <Title level={4}>Phone</Title>
                <AutoComplete
                    style={{ width: 300 }}
                    options={options}
                    placeholder="Search"
                    onChange={onChange}
                    filterOption={(inputValue, option) =>
                        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                >

                </AutoComplete>

            </div>
            <Divider style={{  marginTop: '140px' }}/>
            <div style={{ width: '20%', marginLeft: '38%', marginTop: '70px' }}>
            <Title level={4}>Another design (optional)</Title>
                <PhoneInput
                    country={'us'}
                    value={phone}
                    onChange={phone => SetPhone(phone)}
                />
                <Title level={5}>Phone Number is : +{phone}</Title>
            </div>
            


        </>
    )
}

export default PhoneComponent

