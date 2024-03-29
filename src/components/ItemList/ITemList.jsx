import Item from "../Item/Item"
import "../ItemList/ItemList.css"

const ItemList = ({products}) => {
    return (
        <div className="itemList">
            {
                products.map(prod => {
                    return <Item key={prod.id} {... prod}/>
                })
            }
        </div>
    )
}

export default ItemList