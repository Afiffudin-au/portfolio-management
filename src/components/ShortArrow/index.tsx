import React from 'react'
import {
  FcAlphabeticalSortingAz,
  FcAlphabeticalSortingZa,
} from 'react-icons/fc'
function SortArrow({ direction }: { direction?: string | null }) {
  if (!direction) {
    return null
  }
  if (direction === 'descending') {
    return (
      <>
        <FcAlphabeticalSortingAz color='inherit' />
      </>
    )
  } else {
    return (
      <>
        <FcAlphabeticalSortingZa color='inherit' />
      </>
    )
  }
}

export default SortArrow
