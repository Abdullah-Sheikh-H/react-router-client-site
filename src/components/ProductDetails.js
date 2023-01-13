import { useParams } from "react-router-dom"

const ProductDetails = () => {
    const params = useParams()

    return <h1>Detail Page for {params.id}</h1>
}

export default ProductDetails
