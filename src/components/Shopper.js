import SimpleCart from "./SimpleCart";

const Shopper = (props) => {
    console.log(props)
    const { 
        name,
        minutes_per_item,
        minutes_per_mile
    } = props.shopper;

    let totalMiles = 0;
    
    props.carts.forEach(cart => {
        totalMiles += cart.miles_from_store
    })

    const getSimplifiedCarts = () => {
        return props.carts.map((cart, index) => <SimpleCart key={index} cart={cart} index={index+1} clickHandler={() => props.cartClick(cart, index+1)} shopper={props.shopper}/>)
    }

    return (
        <div className="a-view-shopper-container">
            <span className="center-title">{name}</span>
            <div className="simplfied-carts-container">
                {getSimplifiedCarts()}
            </div>
            <div>
                <span className={'bold no-wrap'}>{parseInt(totalMiles)} Minutes Assigned</span>
            </div>
        </div> 
    )
}

export default Shopper