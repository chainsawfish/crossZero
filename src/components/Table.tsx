import React, {useState} from 'react'
import Cell from './Cell'
import { cellsGrid } from '../data/cellsGrid'

export default function Table() {

  let cellsArray = [...cellsGrid]
  return (
    <div className="max-w-min min-w-max grid grid-cols-3 gap-0 mx-auto place-items-center justify-items-center items-center">
      {cellsArray.map((row, indexRow) => {
        return row.map((cell, indexCell) => {
          return <Cell value={''} key={"" + indexRow + indexCell} />
        })
      })}
    </div>
  )
}
