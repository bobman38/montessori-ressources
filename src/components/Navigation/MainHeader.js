import React, {useState, useEffect} from 'react'
import { Link} from 'react-router-dom'
import Navbar from 'react-bulma-components/lib/components/navbar'
import Login from './Login'
import client from '../../tools/client';

const MainHeader = (props) => {

  const [user, setUser] = useState()

  // this effect will grab user info at component mount
  useEffect(() => {
    client.get('auth')
      .then((data) => {
        setUser(data.data)
      })
      .catch((err) => {
        // if auth error let's remove the token
        localStorage.removeItem('token')
      })
  }, [])

  return (
      <Navbar color="primary" fixed="top" active={false} transparent={false}>
        <Navbar.Brand>
          <Navbar.Item renderAs={Link} to={`/`} arrowless>
            <span role="img" aria-label="book">📖</span> Montessori Ressources
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>

        <Navbar.Menu>
          <Navbar.Container>
            <Navbar.Item renderAs={Link} to={`/`}>
              Nomenclatures
            </Navbar.Item>
            <Navbar.Item renderAs={Link} to={`/add`}>
              Créer
            </Navbar.Item>
            <Navbar.Item renderAs={Link} to={`/info`}>
              À propos
            </Navbar.Item>
            <Navbar.Item renderAs={Link} to={`/admin`}>
              Admin
            </Navbar.Item>
          </Navbar.Container>

          <Login user={user} setUser={setUser}/>
        </Navbar.Menu>
      </Navbar>
  )
}

export default MainHeader