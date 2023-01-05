import React, {useState} from 'react'

type CellType = {
  value: string,
  key: number,
}

export default function Cell(props: CellType) {
  const handleClickCell = () => {

  }
  return (
    <div className='w-40 h-40 bg-emerald-300 shadow-md p-4 m-2'>{props.value}</div>
  )
}
