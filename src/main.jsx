import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SayHelloComponent from './components/SayHelloComponent.jsx'
import AddingTwoNumbersComponent from './components/AddingTwoNumbersComponent.jsx'
import AskingQuestionsComponent from './components/AskingQuestionsComponent.jsx'
import GreaterOrLessThanComponent from './components/GreaterOrLessThanComponent.jsx'
import MadlibComponent from './components/MadlibComponent.jsx'
import OddOrEvenComponent from './components/OddOrEvenComponent.jsx'
import ReverseItAlphaComponent from './components/ReverseItAlphaComponent.jsx'
import ReverseItNumbersComponent from './components/ReverseItNumbersComponent.jsx'
import Magic8BallComponent from './components/Magic8BallComponent.jsx'
import RestaurantPickerComponent from './components/RestaurantPickerComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<App />} />
      <Route path='/sayHello' element={<SayHelloComponent />} />
      <Route path='/addingTwoNumbers' element={<AddingTwoNumbersComponent />} />
      <Route path='/askingQuestions' element={<AskingQuestionsComponent />} />
      <Route path='/greaterOrLessThan' element={<GreaterOrLessThanComponent />} />
      <Route path='/madlib' element={<MadlibComponent />} />
      <Route path='/oddOrEven' element={<OddOrEvenComponent />} />
      <Route path='/reverseItAlpha' element={<ReverseItAlphaComponent />} />
      <Route path='/reverseItNumbers' element={<ReverseItNumbersComponent />} />
      <Route path='/magic8Ball' element={<Magic8BallComponent />} />
      <Route path='/restaurantPicker' element={<RestaurantPickerComponent />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
