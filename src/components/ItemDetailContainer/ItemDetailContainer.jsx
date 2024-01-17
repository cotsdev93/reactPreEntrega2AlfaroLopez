import { useState, useEffect } from "react"
import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"
const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)

    const {productId} = useParams()

    useEffect(() => {
        getProductsById(productId)
            .then(product => {
                setProduct(product)
            })
    }, [productId])

    return (
        <div>
            <h4 className="tituloDetail">detalle de producto</h4>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer