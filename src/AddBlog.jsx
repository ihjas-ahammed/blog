import { Button, Stack, TextField } from '@mui/material'
import React from 'react'

const AddBlog = () => {
  return (
    <Stack>
        <TextField variant="filled" label="Blog Name"/>
        <TextField variant="filled" label="Author Name"/>
        <TextField variant="filled" label="Blog Name"/>
        <Button>Submit</Button>
    </Stack>
  )
}

export default AddBlog