import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import PeopleContainer from "../Component/PeopleContainer1.3.2"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/people">
          <PeopleContainer />
        </Route>
          <Link to="/people">People</Link>
        </Switch>
    </BrowserRouter>
  )
}
export default App;