import React from 'react'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import Routers from '../routes/Routers'

const Layout = () => {
  return (
    <>
    <Header/>
    <Main>
        <Routers>

        </Routers>
    </Main>
    
    </>
  )
}

export default Layout