import React from 'react'
import Cell from './Cell'
import { cellsGrid } from '../data/cellsGrid'

export default function Table() {

  const makeTable = (grid: string[][]) => {
    let key = 0
    for (let i = 0; i < grid.length; i++ ){
      for (let j = 0; j < grid[i].length; j++) {
        key+=1
        return (
            <Cell value={grid[i][j]} key={key}/>
        )
      }
    }
  }

  return (
    <div>

    </div>
  )
}
