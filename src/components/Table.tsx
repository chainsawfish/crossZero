import React, {ReactNode} from 'react'
import Cell from './Cell'
import { cellsGrid } from '../data/cellsGrid'

export default function Table(): ReactNode {

  let cellsArray = [...cellsGrid]




  return (
    <>
      {cellsArray.map((row, indexRow) => {
        return row.map((cell, indexCell) => {
          return <Cell value={cell} key={"" + indexRow + indexCell}/>
        })
      })}
    </>
  )
}
