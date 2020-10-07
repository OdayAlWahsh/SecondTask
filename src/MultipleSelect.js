import React, { useState, useEffect } from 'react'
import { Select, Typography, Divider ,Row,Button} from 'antd';
import MultiSelect from "react-multi-select-component";
import { Link } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';


const { Title } = Typography;


const MultipleSelect = () => {
    const [options, setOptions] = useState([
        { label: "Budget", value: "Budget", disabled: false },
        { label: "Food allergies", value: "FoodAllergies", disabled: false },
        { label: "Number of people", value: "NumberOfPeople", disabled: false },
        { label: "special restricrions", value: "specialRestricrions", disabled: false },
    ]);


    const [selected, setSelected] = useState([]);


    function select(e) {
        try {
            e.find(x => x.disabled == false).disabled = true
            setSelected(e)
        } catch (e) {

        }

    }
    return (
        <>
            <Row justify="start" style={{ marginTop: '2%' }}><Link to="/"><Button type="link" ><LeftOutlined style={{ fontSize: '13px', color: '#BDBBBB' }} /> Back to Home </Button></Link></Row>

            <div style={{ textAlign: 'center', width: '70%', marginLeft: '10%' }}>

                <Title level={3}>Multiple Select</Title>
                <pre> Added List{JSON.stringify(options.filter(x => x.disabled == true))}</pre>
                <MultiSelect
                    options={options}
                    value={selected}
                    onChange={select}
                    labelledBy={"Select"}
                    hasSelectAll={false}

                />


            </div>
        </>
    )
}

export default MultipleSelect
