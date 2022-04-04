import userEvent from '@testing-library/user-event'
import React from 'react'

function SingleUser() {
  return (
    <div className="single-user">
        <img src={userEvent.p} alt="" />
    </div>
  )
}

export default SingleUser