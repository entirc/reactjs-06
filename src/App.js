import React, {Component} from 'react'
import {render} from 'react-dom'
import { 
    BrowserRouter as Router, 
    Route, 
    Link
} from 'react-router-dom'
import styled from 'styled-components'

import Routes from './routes'

render(
    <Router>
        <div>
            { Routes }
        </div>
    </Router>, 
    document.querySelector('#app')
)