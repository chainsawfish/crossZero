import React, { useState} from 'react'

type CellType = {
  value: string,
}
export default function Cell(props: CellType) {
  const [valueCell, setValueCell] = useState<string>("")
  const cellClickHandler = () => {
    setValueCell("X")
  }
  return (
    <div className='w-36 h-36 bg-emerald-300 shadow-md m-1 text-8xl flex flex-row justify-center rounded-md' onClick={(el) => cellClickHandler()}>
    <div className="flex flex-col justify-center">{valueCell}</div>
    </div>
  )
}
