import * as React from 'react'
import Container from '@mui/material/Container'
import Navbar from './components/Navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">{children}</Container>
    </>
  )
}
