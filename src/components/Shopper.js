import Cart from "./Cart"

const Shopper = (props) => {
    const { 
        id,
        name,
        minute_per_item,
        minute_per_mile,
        favorite_meal,
        restrictions,
        overall_rating
    } = props.shopper;

    return (
        <div className='shopper-container' >
            <span className="title">{name}</span>
            {
                /* <Cart /> 
                I'd add a variant of the cart component here,
                as different information/styling is displayed */
            }
            <span>X Minutes</span>
        </div>
    )
}

export default Shopper