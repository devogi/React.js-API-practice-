import userEvent from '@testing-library/user-event'
import React from 'react'

function SingleUser() {
  return (
    <div className="single-user">
        <img src={user} alt="" />
    </div>
  )
}

export default SingleUser