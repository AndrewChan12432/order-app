import React from 'react'
import { useAuth } from '../context/AuthContext'

const Dashboard = () => {
const { user } = useAuth()

  return (
    <div>
      <h6>Hi, {user.email}</h6>
    </div>
  )
}

export default Dashboard