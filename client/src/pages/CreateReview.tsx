import React, { useState } from 'react'
import { Box, Container, TextField, Button } from '@mui/material'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'

interface IReview {
  title: string
  content: string
}

const CreateReview = () => {
  const [review, setReview] = useState<IReview>({
    title: '',
    content: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputs: object = { [e.target.name]: e.target.value }
    setReview({ ...review, ...inputs })
  }

  const handleSubmit = () => {
    if (!review.title || !review.content)
      return toast.error('Please input all the field as required')
    try {
      axios
        .post('http://localhost:3001/api/insert', review)
        .then(() => toast.success('Successfully Post!'))
    } catch (error) {
      console.log(error)
    }
    setReview({
      title: '',
      content: '',
    })
  }

  return (
    <>
      <Toaster />
      <Container
        sx={{
          width: '100vw',
          height: '90vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            bgcolor: 'hsl(40, 100%, 99%)',
            width: '600px',
            height: '550px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '30px',
            borderRadius: '8%',
          }}
        >
          <h1 style={{ textAlign: 'center' }}>Create A Movie Review Post</h1>
          <h3 style={{ marginTop: '10px' }}>Movie Title:</h3>
          <TextField
            required
            id='standard-basic'
            variant='standard'
            fullWidth
            name='title'
            value={review.title}
            onChange={handleChange}
          />
          <h3 style={{ margin: '10px 0 10px 0' }}>Review: </h3>
          <TextField
            required
            id='standard-multiline-static'
            label='Comment:'
            multiline
            rows={10}
            fullWidth
            placeholder='Leave your comment..'
            variant='outlined'
            name='content'
            value={review.content}
            onChange={handleChange}
          />
          <Button
            style={{ marginTop: '20px', alignItems: 'center' }}
            variant='contained'
            onClick={handleSubmit}
          >
            Submit Review
          </Button>
        </Box>
      </Container>
    </>
  )
}
export default CreateReview
