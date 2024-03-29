import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ITemList"
import "./itemListContainer.css"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(products => {
                setProducts(products)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <div>
           <h3 className="greeting">{greeting + (categoryId ? ` ${categoryId}` : '')}</h3>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer