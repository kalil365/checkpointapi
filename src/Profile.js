import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const { id } = useParams()
    const [load , setLoad] = useState(false)
    const [user, setUser] = useState({})

    useEffect(() => {
        setLoad(true)
        const fetchData = async ()  => {
          try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            setUser (res.data)
            setLoad(false)

          } catch (error) {
           console.log(error)
          }
        }
        
    }, [id])

    return (
        <div>
            {
                load ? <h1>wait</h1> : <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" />
                <Card.Body>
                    <Card.Title>{user && user.name}</Card.Title>
                    <Card.Text>
                        {user && user.username}
                        {user && user.email} <br />
                        {user && user.address && user.address.street} <br /> {user && user.address && user.address.city}
                    </Card.Text>
                    <Button variant="dark">Go somewhere</Button>
                </Card.Body>
            </Card>
            }

        </div>
    )
};

export default Profile