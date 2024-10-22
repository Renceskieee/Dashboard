import { useState } from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <>
      <div className='w-full flex'>
        {/* Navigation bar */}
        <NavigationBar />

        {/* Main Components */}
        <main className='grow'>
          <Dashboard />
        </main>
      </div>
    </>
  )
}

export default App
