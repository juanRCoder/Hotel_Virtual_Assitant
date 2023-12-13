import React from 'react'
import Header from '../components/Header/Header'
import Routers from '../routes/Routers'
import Body from '../components/Body/Body'

const Layout = () => {
  return (
    <>
    <Header/>
    <Body>
        <Routers>

        </Routers>
    </Body>
    
    
    </>
  )
}

export default Layout