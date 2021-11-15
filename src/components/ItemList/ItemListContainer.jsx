import ItemCount from "../ItemCount/itemCount"
import "./itemListContainer.css"

const ItemListContainer = (props) => {
    return(
        <>
        <div className="greeting-page">
            <h1 className="greeting"> {props.greeting}</h1>
            <ItemCount />
        </div>
        </>
    )
}

export default ItemListContainer