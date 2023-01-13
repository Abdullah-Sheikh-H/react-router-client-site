import { Redirect, Route, Switch } from "react-router-dom"
import Welcome from "./pages/Welcome"
import Products from "./pages/Products"
import MainHeader from "./components/MainHeader"
import { Fragment } from "react"
import ProductDetails from "./components/ProductDetails"

function App() {
    return (
        <Fragment>
            <header>
                <MainHeader />
            </header>
            <main>
                <div>
                    <Switch>
                        <Route path="/" exact>
                            <Redirect to="/welcome" />
                        </Route>
                        <Route path="/welcome">
                            <Welcome />
                        </Route>
                        <Route path="/products" exact>
                            <Products />
                        </Route>
                        <Route path="/products/:id">
                            <ProductDetails />
                        </Route>
                    </Switch>
                </div>
            </main>
        </Fragment>
    )
}

export default App
