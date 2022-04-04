import userEvent from '@testing-library/user-event'
import React from 'react'

function SingleUser( {user} ) {
  return (
    <div className="single-user">
        <img src={user.picture.large} alt="" />
        <div className="user-info">
            <h3>
                {user.name.first} {user.name.last} 
            </h3>
            <p className='user-mail' ></p>
        </div>
    </div>
  )
}

export default SingleUser