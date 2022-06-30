const Cart = (props) => {
    const {
        miles_from_store,
        items,
        item_count,
        buyer
    } = props.cart

    const { index } = props

    const getItems = () => {
        return items.map((item, index) => <li key={`item-${index}`}>{item.name} ({item["sub-type"]})</li>)
    }

    return(
        <div className="unassigned-container-cart" onClick={props.clickHandler}>
            <div className="cart-info">
                <div>Cart {index}</div>
                <div>{miles_from_store} miles</div>
                <div>{item_count} items</div>
            </div>
            <div className="cart-contents">
                <ul className="grocery-list">
                    {getItems()}
                </ul>
            </div>
        </div>
    )
}

export default Cart