const GroceryItem = (props) => {
    return (
        <div className="a-view-item-info">
            <span>{`${props.itemName} (${props.itemSubType})`}</span>
            <span>{props.itemType}</span>
        </div>
    )
}

export default GroceryItem