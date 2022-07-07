const AssignmentViewShopper = (props) => {
    console.log(props)
    const { 
        id,
        name,
        minutes_per_item,
        minutes_per_mile,
        favorite_meal,
        restrictions,
        overall_rating
    } = props.shopper;

    const { buyer, item_count, items, miles_from_store } = props.cart
    const shoppingTime = parseInt(minutes_per_item * items.length)
    const deliveryTime = parseInt(minutes_per_mile * miles_from_store)
    const totalMinutes = parseInt(shoppingTime + deliveryTime)
    let buttonColor
        // could be switch statement instead
        if(totalMinutes > 240 && totalMinutes < 300) {
            buttonColor = 'orange'
        } else if (totalMinutes > 300) {
            buttonColor = 'red'
        } else buttonColor =  'blue'

    const getRestrictions = () => {
        if (restrictions.length > 1) {
            return restrictions.join(', ')
        } else if (restrictions.length === 1) {
            return restrictions[0]
        } else return 'none'
    }

    // Buyer rating would be calulated via iterating through 
    // object to grab values, and calculating average. Average would be
    // calculated through dividing the sum of ratings over num of ratings

    return (
        <div className="a-view-shopper-container">
            <span className="center-title">{name}</span>
            <span className="align-text">Restrictions: {getRestrictions()}</span>
            <span className='no-wrap'>Shopping Time: {shoppingTime} minutes</span>
            <span className='no-wrap'>Delivery Time: {deliveryTime} minutes</span>
            <span className='no-wrap'>Overall Rating: {overall_rating}</span>
            <span className='no-wrap'>Buyer Rating: N/A</span>
            <button className={`select-shopper-button button-${buttonColor}`}>Select Shopper</button>
            <span className={'bold no-wrap'}>{totalMinutes} Minutes Assigned</span>
        </div> 
    )
}

export default AssignmentViewShopper