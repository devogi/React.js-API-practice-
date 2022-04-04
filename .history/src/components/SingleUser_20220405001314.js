import userEvent from '@testing-library/user-event'
import React from 'react'

function SingleUser( {user} ) {
  return (
    <div className="single-user">
        <img src={user.picture.large} alt="" />
        <div className="user-info">
            <h3>
                {user.name }
            </h3>
        </div>
    </div>
  )
}

export default SingleUser