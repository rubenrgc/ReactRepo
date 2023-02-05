import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <>
      <main className='py-6'>
        <Router>
          <Header />
        
            <Container>
              <Routes>
                <Route path='/' element={<HomeScreen />} exact />
                <Route path='/product/:id' element={<ProductScreen />} />
                
              </Routes>
            </Container>
       
          <Footer />
        </Router>
      </main>
    </>
  )
}

export default App
