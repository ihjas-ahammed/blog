import { Button, Stack, TextField } from '@mui/material'
import React from 'react'

const AddBlog = () => {
  return (
    <Stack spacing={3} margin={10}>
        <TextField variant="outlined" label="Blog Name"/>
        <TextField variant="outlined" label="Author Name"/>
        <TextField variant="outlined" label="Blog Name"/>
        <Button>Submit</Button>
    </Stack>
  )
}

export default AddBlog