import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AboutScreen } from './AboutScreen'
import { LoginScreen } from './LoginScreen'
import { HomeScreen } from './HomeScreen'

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/about" component={AboutScreen} exact />
          <Route path="/login" component={LoginScreen} exact />
        </Switch>
      </div>
    </Router>
  )
}
