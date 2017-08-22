
import React, {Component} from 'react'
import {render} from 'react-dom'
import { Route } from 'react-router-dom'
import { routes } from '../components'

const Routes = routes.map( (route, index) => {
        return (
            <Route 
                key= { index }
                exact = { route.exact }
                path = { route.path } 
                component = { route.component }
            />
        )
    }
)

export default Routes