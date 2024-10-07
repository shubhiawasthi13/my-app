import React from 'react'
import { useParams } from 'react-router-dom';

function User() {
    const {userid} = useParams()
  return (
    <>
    <div className='bg-success m-4'>
      <h1 className='text-light p-4'>User: {userid}</h1>
    </div>
    </>
  )
}

export default User
