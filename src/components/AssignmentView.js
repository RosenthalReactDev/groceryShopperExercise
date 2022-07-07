import GroceryItem from './GroceryItem';
import AssignmentViewShopper from './AssignmentViewShopper';
import shoppers from '../data/shoppers.json'

const AssignmentView = (props) => {
    const { buyer, item_count, items, miles_from_store } = props.cartItem.cartItem

    const getItems = () => {
        return items.map(item => <GroceryItem key={item.name} itemName={item.name}  itemSubType={item['sub-type']} itemType={item.isle}/>)
    }

    const getRestrictions = () => {
        const { restrictions } = buyer
        if (restrictions.length > 1) {
            return restrictions.join(', ')
        } else if (restrictions.length === 1) {
            return restrictions[0]
        } else return 'none'
    }

    const getShoppers = () => {
        return shoppers.map(shopper => <AssignmentViewShopper key={shopper.id} shopper={shopper} cart={props.cartItem.cartItem}/>)
    }

    return(
        <div className="a-view-container">
            <div className="a-view-section-one">
                <span className="title">Cart #{props.index.cartIndex}</span>
                <span>{miles_from_store} miles</span>
                <span>Restrictions: {getRestrictions()}</span>
            </div>
            <div className="a-view-section-two">
                {getItems()}
            </div>
            <div className="a-view-section-three">
                {getShoppers()}
            </div>
        </div>
    )
}

export default AssignmentView