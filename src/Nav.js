import React, {Component} from 'react'
import { 
    BrowserRouter as Router, 
    Route, 
    Link
} from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    background: #F66663;
    padding: 0.5rem;
    flex-direction: row;
    margin: 0.2rem;
    text-decoration: none;
    color: white;
`

const LinkWrapper = styled.div`
    display: flex;
`

class Nav extends Component {
    render () {
        return (
            <div>
                <LinkWrapper>
                    <StyledLink to="/">Home</StyledLink><br/>
                    <StyledLink to="/about">About</StyledLink>
                </LinkWrapper>
            </div>
        )
    }
}

export default Nav