import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Nav from './Nav'

const routes = [
    {
        path: '/',
        component: Home,
        exact : true
    },
    {
        path: '/about',
        component: About,
        exact : true
    }
]

const Routes = routes.map( (route, index) => {
    return (
        <Route
            key= { index }
            path = { route.path } 
            exact = { route.exact }
            component = { route.component }
        />
    )
}
)

export default Routes