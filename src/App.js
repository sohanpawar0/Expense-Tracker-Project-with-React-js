import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';

function App() {

  const iscartopen = useSelector( state => state.cart.isCartOpen )

  return (
    <Layout>
       { iscartopen && <Cart /> }
      <Products />
    </Layout>
  );
}

export default App;
