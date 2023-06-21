import cartContext from '../../context/cartContext'
import CartItem from '../CartItem'

import './index.css'

const CartListView = () => (
  <cartContext.Consumer>
    {value => {
      const {cartList} = value
      return (
        <ul className="cart-list">
          {cartList.map(eachCartItem => (
            <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
          ))}
        </ul>
      )
    }}
  </cartContext.Consumer>
)

export default CartListView
