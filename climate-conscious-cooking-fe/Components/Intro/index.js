import React from 'react'
import css from './Intro.module.css'
import { Row } from 'react-bootstrap'


const Banner = () => {
    return (
        <Row l={12} className={css.Banner}>
            <p>save the planet</p>
        </Row>
    )
}

export default Banner