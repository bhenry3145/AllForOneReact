import { NavLink } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>

    <div className='flex justify-center'>
      <h1 className='p-2 text-xl md:text-3xl'>All For One by Bowen Henry</h1>
    </div>
    <div className="grid min-h-screen mx-16 mb-16 overflow-hidden bg-black md:grid-cols-2 md:grid-rows-5 lg:grid-cols-5 lg:grid-rows-2 place-items-center rounded-3xl">
      
      <div>
        <NavLink to={'/sayHello'}>
          <button className='h-8 text-2xl bg-orange-400 w-72 lg:w-52 lg:h-48 md:w-36 md:h-32 rounded-3xl md:text-4xl lg:text-5xl'>Hello World</button>
        </NavLink>
      </div>

      <div>
        <NavLink to={'/askingQuestions'}>
        <button className='h-8 text-2xl bg-green-500 w-72 lg:w-52 lg:h-48 md:w-36 md:h-32 rounded-3xl md:text-3xl lg:text-4xl'>Asking Questions</button>
        </NavLink>
      </div>
      
      <div>
        <NavLink to={'/addingTwoNumbers'}>
        <button className='h-8 text-xl bg-purple-600 w-72 lg:w-52 lg:h-48 md:w-36 md:h-32 rounded-3xl lg:text-4xl md:text-3xl'>Adding Two Numbers</button>
        </NavLink>
      </div>

      <div>
        <NavLink to={'/madlib'}>
          <button className='h-8 text-2xl bg-yellow-300 w-72 lg:w-52 lg:h-48 md:w-36 md:h-32 rounded-3xl md:text-4xl lg:text-5xl'>Madlib</button>
        </NavLink>
      </div>

      <div>
        <NavLink to={'/oddOrEven'}>
          <button className='h-8 text-2xl bg-teal-600 w-72 lg:w-52 lg:h-48 md:w-36 md:h-32 rounded-3xl md:text-4xl lg:text-5xl'>Odd Or Even</button>
        </NavLink>
      </div>
      
      <div>
        <NavLink to={'/reverseItAlpha'}>
          <button className='h-8 text-xl bg-yellow-300 w-72 lg:w-52 lg:h-48 md:w-36 md:h-32 rounded-3xl md:text-3xl lg:text-4xl'>Reverse It (alpha)</button>
        </NavLink>
      </div>

      <div>
        <NavLink to={'/reverseItNumbers'}>
          <button className='h-8 text-xl bg-blue-500 w-72 lg:w-52 lg:h-48 md:w-36 md:h-32 rounded-3xl md:text-3xl lg:text-4xl'>Reverse It (numbers)</button>
        </NavLink>
      </div>
      
      <div>
        <NavLink to={'/magic8Ball'}>
          <button className='h-8 text-2xl bg-red-600 w-72 lg:w-52 lg:h-48 md:w-36 md:h-32 rounded-3xl md:text-4xl lg:text-5xl'>Magic 8 Ball</button>
        </NavLink>
      </div>
      
      <div>
        <NavLink to={'/greaterOrLessThan'}>
          <button className='h-8 text-xl bg-pink-500 w-72 lg:w-52 lg:h-48 md:w-36 md:h-32 rounded-3xl md:text-3xl lg:text-5xl'>Greater or Less Than</button>
        </NavLink>
      </div>

      <div>
        <NavLink to={'/restaurantPicker'}>
          <button className='h-8 text-xl bg-lime-400 w-72 lg:w-52 lg:h-48 md:w-36 md:h-32 rounded-3xl md:text-3xl lg:text-4xl'>Restaurant Picker</button>
        </NavLink>
      </div>
    </div>
    
    

    </>
  )
}

export default App
