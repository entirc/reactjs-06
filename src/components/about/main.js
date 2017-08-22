import React, { Component } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import { 
    BrowserRouter as Router, 
    Route, 
    Link
} from 'react-router-dom'
import Nav from './nav'

class About extends Component {
    render() {
        return (
            <div>
                <Nav/>
            </div>
        )
    }
}

export default About