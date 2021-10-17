import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Home from 'Routes/Home/index'
import TV from 'Routes/TV/index'
import Search from 'Routes/Search/index'
import Detail from 'Routes/Detail/index'
import Header from './Header'

const Router = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/tv' component={TV} />
            <Route path='/search' component={Search} />
            <Route path="/movie/:id" component={Detail} />
            <Route path="/show/:id" component={Detail} />
            <Redirect from="*" to="/" />
        </Switch>
    </BrowserRouter>
)

export default Router;