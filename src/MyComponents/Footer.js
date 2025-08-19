import React from 'react'

export const Footer =() =>{
  let footerstyle = {
  position: "fixed",
  bottom: "0",
  width: "100%",
  textAlign: "center"

  }
  return (
    <footer className="bg-dark text-light " style= {footerstyle}>
    <p className="text-center">
      Copyright &copy;  My todosList.com
    </p>
    </footer>
  )
}

export default Footer

