import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import {useState} from 'react';

const Main = () => {
  const [openDrawer, setOpenDrawer] = useState(true)

  const toggleDrawer = () => {
    if(openDrawer === false){
      setOpenDrawer(true);
    }else{
      setOpenDrawer(false);
    }
  }
  return (
    <div>
      <Header toggleDrawer={toggleDrawer}/>
      <SideBar openDrawer={openDrawer}/>
      <div>Display aside</div>
    </div>
  )
}

export default Main
