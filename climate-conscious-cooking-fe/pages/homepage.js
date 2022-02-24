import React from 'react'
import Header from '../Components/Header'
import NavBar from '../Components/NavBar'
import {Row, Col} from 'react-bootstrap'
import css from '../styles/homepage.module.css'

const Homepage = () => {
    return (
        <div>
        <Row className={css.row}> <Header /></Row>
        <Row className={css.row}> <NavBar /></Row>
        <Row classNme={css.row}> banana </Row>
        <Row className={css.row}> 
        <Col className={css.col} xs={4}>cat</Col> 
        <Col className={css.col} xs={4}>mouse</Col>
        <Col className={css.col} xs={4}>mouse</Col>
        </Row>
        <Row></Row>

       
            
        </div>
    )
}

export default Homepage