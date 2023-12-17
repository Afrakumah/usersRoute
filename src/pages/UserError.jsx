
import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function UserError() {
    const error = useRouteError()
  return (
   <>
  <h2> Sorry, Something went wrong!</h2>

  <span>{error.message}</span>
  
   </>
  )
}
