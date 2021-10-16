import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Home from 'Routes/Home/index'
import TV from 'Routes/TV/index'
import Search from 'Routes/Search/index'
import Header from './Header'

const Router = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/tv' component={TV} />
            <Route path='/search' component={Search} />
            <Redirect from="*" to="/" />
        </Switch>
    </BrowserRouter>
)

export default Router;