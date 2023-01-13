import { Link } from "react-router-dom"

const Products = () => {
    return (
        <section>
            <h1>Products page</h1>
            <ul>
                <li>
                    <Link to="/products/p1">book</Link>
                </li>
                <li>
                    <Link to="/products/p2">movie</Link>
                </li>
                <li>
                    <Link to="/products/p3">book</Link>
                </li>
            </ul>
        </section>
    )
}

export default Products
