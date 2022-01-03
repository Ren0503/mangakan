import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {
    HomeScreen,
    SearchInputScreen,
} from 'screens/Home'

export default function HomeRoutes() {
    return (
        <Switch>
            <Route exact path='/advanced-search' component={SearchInputScreen} />
            <Route exact path='/search/:keyword' component={HomeScreen} />
            <Route exact path='/page/:pageNumber' component={HomeScreen} />
            <Route
                exact
                path='/search/:keyword/page/:pageNumber'
                component={HomeScreen}
            />
            <Route exact path='/' component={HomeScreen} />
        </Switch>
    )
};