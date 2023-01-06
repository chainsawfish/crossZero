import { useState } from 'react'
import Table from './components/Table'
import Button from "./components/Button";
import C from "./data/Constants"

function App() {

  return (
      <>
      <Table />
      <Button value="Start" clickHandler={C.startClick} />
      </>
  )
}

export default App
