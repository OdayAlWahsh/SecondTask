import { Button, Col, Row } from 'antd'
import Title from 'antd/lib/skeleton/Title'
import React from 'react'
import { Link } from 'react-router-dom'
const Home=()=>{
    return(<>
  <Col span={24} style={{ marginTop: '100px',textAlign:'center' }}>
    
    
   <Row justify="center" style={{ marginTop: '50px' }}><Link to={"/phone"}><Button type="primary" >Phone component</Button></Link></Row>
   <Row justify="center" style={{ marginTop: '50px' }}><Link to="/date"><Button type="primary">Date component</Button></Link></Row>
   <Row justify="center" style={{ marginTop: '50px' }}><Link to="/multipleselect"><Button type="primary">multiple select component</Button></Link></Row> 

 </Col></>)
}
export default Home