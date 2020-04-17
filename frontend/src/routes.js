import React from 'react'
import { BrowserRouter,Route, Switch } from 'react-router-dom'

import Login from './pages/Login'
import Cadastrar from './pages/Cadastrar'
import Profile from './pages/Profile'
import NovoCaso from './pages/NovoCaso'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/cadastrar' component={Cadastrar} />
        <Route path='/profile' component={Profile} />
        <Route path='/casos/novo' component={NovoCaso} />
      </Switch>
    </BrowserRouter>
  )
} 
