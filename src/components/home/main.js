import React, { Component } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

class Home extends Component {
    render() {
        return (
            <div>Home
            {/*
                <Nav/>
                <HomeWrapper>
                    <h2>E.N.T.I Rio Claro - Hangout: Aprendendo React #6</h2>
                    
                    <ul>
                        <li>
                            <a 
                                href="https://github.com/entirc/react-webpack-babel-template" 
                                target="_blank"
                            >
                                ENTIRC - React Template (React, WebPack, Webpack DevServer, Babel)
                            </a>
                        </li>
                        <li>SPA Simples</li>
                        <li>
                            <a 
                                href="https://reacttraining.com/react-router"
                                target="_blank"
                            >
                                React Router Versão 4
                            </a>
                            <ul>
                                <li>Router</li>
                                <li>Route</li>
                                <li>Link</li>
                            </ul>
                        </li>
                        <li>
                            Organização de Pastas/Arquivos
                        </li>
                    </ul>
                </HomeWrapper>
            */}
            </div>
        )
    }
}

export default Home