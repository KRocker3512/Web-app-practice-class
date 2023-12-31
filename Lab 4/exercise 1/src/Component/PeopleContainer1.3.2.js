import Media from 'react-media'
import {Redirect, Route, Switch} from 'react-router-dom'
import Person from './Person1.3.2'
import PeopleList from './PeopleList1.3.2'
import people from './People'

const PeopleContainer = () => {
  return (
    <Media 
        queries={{
            small: '(max-width: 700px)',
        }}
    >
        {(size) => size.small ? (
            <Switch>
                <Route path="/people/:id">
                    <Person/>
                </Route>
                <PeopleList/>
            </Switch>
        ) : (
            <div style={{display: 'flex'}}>
                <PeopleList/>
                <Switch>
                    <Route path="/people/:id">
                        <Person/>
                    </Route>
                </Switch>
            </div>
        )}
    </Media>
  )
}

export default PeopleContainer