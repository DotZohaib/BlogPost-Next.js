import index from "@/styles/index.module.css";
import Link from "next/link";
import React from 'react'

const Navbar = () => {
  return (
    <nav >
    <ul>
      <li className={index.logo}><Link href="/">Home</Link></li>
      <li className={index.logo}><Link href="/About">About</Link></li>
      <li className={index.logo}><Link href="/Blog">Blog</Link></li>
      <li className={index.logo}><Link href="/Apply">Apply</Link></li>
      <li className={index.logo}><Link href="/Contact">Contact</Link></li>
    </ul>
  </nav>
  )
}

export default Navbar