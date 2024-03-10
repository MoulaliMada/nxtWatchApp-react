import LoginForm from './components/LoginForm'
import Home from './components/Home'
import {Route, Switch} from 'react-router-dom'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
  </Switch>
)

export default App
