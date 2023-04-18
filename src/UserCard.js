import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Profile from './Profile'

const UserCard = ({user}) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" />
    <Card.Body>
      <Card.Title>{user.name}</Card.Title>
      <Card.Text>
        {user.username}
        {user.email}
      </Card.Text>
      <Link   to = {`/profile/${user.id}`}>
      <Button variant="dark" >Visit profile</Button>
    </Link>
    </Card.Body>
  </Card>

</div>
  )
}

export default UserCard