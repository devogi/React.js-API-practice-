import userEvent from '@testing-library/user-event'
import React from 'react'

function SingleUser( {user} ) {
  return (
    <div className="single-user">
        <img src={user.picture.large} alt="" />
        .use
    </div>
  )
}

export default SingleUser