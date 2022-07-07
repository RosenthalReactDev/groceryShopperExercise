const SimpleCart = (props) => {
    const {
        miles_from_store,
        items,
        item_count,
        buyer
    } = props.cart

    const { index } = props

    // minutes would be calculated with shopper props data and items

    return(
        <div className="simplified-cart-container">
            <div>Cart #{index}</div>
            <div className="cart-contents">
                minutes
            </div>
        </div>
    )
}

export default SimpleCart