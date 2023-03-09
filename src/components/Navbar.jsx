import React from 'react'
import { Stack } from '@mui/system'
import { Link } from 'react-router-dom'
import { logo } from "../utils/constants"
import { SearchBar } from "./index"
import { responsiveFontSizes, Typography } from '@mui/material'

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{
    position: "sticky",
    background: "#000",
    top: 0,
    justifyContent: "space-between"
  }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <Typography  className="name" fontWeight="bold" mb={2}
          sx={{
            color: "white",
            fontSize: 30,
            alignItems: "center",
            mb: "0px"
        }}>
      <span>Deep<span style={{
        color: "red"
      }}>thi</span></span>
      <span> Hariraman</span>
    </Typography>
    <SearchBar />
  </Stack>
  )

export default Navbar