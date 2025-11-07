

import './App.css'
import Login from './Component/Login'
import Product from './Component/Product'
import Pyment from './Component/Pyment'
import Welcome from './Component/Welcome'
import Navbar from './Component/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CardPage from './Component/CardPage'
import HistoryPage from './Component/HistoryPage'
import ExpensesPage from './Component/ExpensesPage'
import SalesPage from './Component/SalesPage'




function App() {


  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Welcome />} />
            <Route path='/product' element={<Product />} />
            <Route path='/pyment' element={<Pyment />} />
            <Route path="/cardpage" element={<CardPage />} />
            <Route path="/historyPage" element={<HistoryPage />} />
            <Route path="/expensesPage" element={<ExpensesPage />} />
            <Route path="/salepage" element={<SalesPage />} />















          </Routes>
        </BrowserRouter>
      </div>




















    </>
  )
}

export default App
