import { Route } from "react-router-dom"
import { Fragment } from "react"

const Welcome = () => {
    return (
        <Fragment>
            <h1>Welcome page</h1>
            <Route path="/welcome/newUser">
                <p>Welcome New User.</p>
            </Route>
        </Fragment>
    )
}
export default Welcome
