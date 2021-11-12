import "./itemListContainer.css"

const ItemListContainer = (props) => {
    return(
        <><div className="greeting-page">
            <h1 className="greeting"> {props.greeting}</h1>
        </div></>
    )
}

export default ItemListContainer