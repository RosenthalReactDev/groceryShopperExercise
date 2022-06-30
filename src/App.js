import Cart from './components/Cart';
import Shopper from './components/Shopper';

import carts from './data/carts.json'
import shoppers from './data/shoppers.json'

import './App.css';

function App() {

  function handleCartClick() {
    console.log('open assignment view')
  }

  const getCarts = () => {
    return carts.map((cart, index) => <Cart key={index} cart={cart} index={index+1} clickHandler={handleCartClick}/>)
  }

  const getShoppers = () => {
    return shoppers.map(shopper => <Shopper key={shopper.id} shopper={shopper}/>)
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
  );
}

export default App;
