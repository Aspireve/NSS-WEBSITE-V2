import React from 'react'
import PropTypes from "prop-types"

export default function Sidebar({open}) {
  return (
    <ul className={`sidebar-menu ${open ? "open" : ""}`}>
      <li >Home</li>
      <li>About Us </li>
      <li>Teams </li>
      <li>Testimonials  </li>
      <li>Projects </li>
    </ul>
  )
}

Sidebar.propTypes = PropTypes.bool.isRequired
