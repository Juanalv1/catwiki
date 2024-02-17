import React from 'react'
import FullBar from './FullBar'
import EmptyBar from './EmptyBar'

const CatLevels = ({lvl}) => {
  return (
    <div className='flex gap-x-2 '>
      {lvl == 5 && (
      <>
        <FullBar />
        <FullBar />
        <FullBar />
        <FullBar />
        <FullBar />
      </>
      )}
            {lvl == 4 && (
      <>
        <FullBar />
        <FullBar />
        <FullBar />
        <FullBar />
        <EmptyBar />
      </>
      )}
            {lvl == 3 && (
      <>
        <FullBar />
        <FullBar />
        <FullBar />
        <EmptyBar />
        <EmptyBar />
      </>
      )}
            {lvl == 2 && (
      <>
        <FullBar />
        <FullBar />
        <EmptyBar />
        <EmptyBar />
        <EmptyBar />
      </>
      )}
            {lvl == 1 && (
      <>
        <FullBar />
        <EmptyBar />
        <EmptyBar />
        <EmptyBar />
        <EmptyBar />
      </>
      )}
            {lvl == 0 && (
      <>
        <EmptyBar />
        <EmptyBar />
        <EmptyBar />
        <EmptyBar />
        <EmptyBar />
      </>
      )}
    </div>
  )
}

export default CatLevels
