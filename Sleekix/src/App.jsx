import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Products from './pages/products/Products'
import Support from './pages/support/Support'
import Login from './pages/login/Login'
import ProductDetails, { getProductDeatils } from './pages/products/ProductDetails'
import FilteredList from './pages/products/FilteredList'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element ={<Home/>}/>
        <Route path='/home' element ={<Home/>}/>
        <Route path='/about-us' element ={<About/>} />
        <Route path='/products'>
          <Route index element ={<Products/>} />
          <Route path=':id' element ={<ProductDetails/>} loader={getProductDeatils}/>
          <Route path=':fiterType/:filterName' element={<FilteredList />}/>
        </Route>
        <Route path='/support' element ={<Support/>} />
        <Route path='/login' element ={<Login/>} />
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
