import AssignmentView from './components/AssignmentView'
import ListView from './components/ListView'

import './App.css';
import { useState } from 'react';

function App() {

  const [showAssignment, setShowAssignment] = useState(false)
  const [cartItem, setCartItem] = useState({})
  const [cartIndex, setCartIndex] = useState()

  function handleCartClick(cart, index) {
    setShowAssignment(true);
    setCartItem({cartItem: cart})
    setCartIndex({cartIndex: index})
  }

  return (
    <div>
      {
        showAssignment ? <AssignmentView cartItem={cartItem} index={cartIndex}/> : <ListView cartClick={handleCartClick}/>
      }
    </div>
  );
}

export default App;
