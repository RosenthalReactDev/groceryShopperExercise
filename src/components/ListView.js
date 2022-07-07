import Cart from './Cart';
import Shopper from './Shopper';

import carts from '../data/carts.json'
import shoppers from '../data/shoppers.json'

const ListView = (props) => {

    const getCarts = () => {
        return carts.map((cart, index) => <Cart key={index} cart={cart} index={index+1} clickHandler={() => props.cartClick(cart, index+1)}/>)
    }
    
    const getShoppers = () => {
        return shoppers.map(shopper => <Shopper key={shopper.id} shopper={shopper} carts={carts}/>)
    }

    return (
        <div className='app-container'>
            <div className='unassigned-container'>
            <span className='title'>Unassigned Carts</span>
            {getCarts()}
        </div>
        <div className="shoppers-container">
            {getShoppers()}
        </div>
        </div>
    )
}

export default ListView;