import { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, CardContent, Typography, Button, Container } from '@mui/material'
import PageviewOutlinedIcon from '@mui/icons-material/PageviewOutlined'

interface IReview {
  id: number
  movieName: string
  movieReview: string
}

const Home = () => {
  const [randomReview, setRandomReview] = useState<IReview[]>([])

  const getData = async () => {
    try {
      const res = await axios.get('http://localhost:3001/api/getrandom')
      setRandomReview(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Container
      sx={{
        width: '100vw',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '30px',
      }}
    >
      <h1>Welcome to React Movie Review Blog</h1>
      {randomReview.map((rev) => {
        return (
          <div key={rev.id}>
            <Card
              sx={{
                maxWidth: 500,
                bgcolor: 'hsl(40, 100%, 99%)',
                margin: '30px 50px 0 0',
              }}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  sx={{ fontSize: 20, fontWeight: 'bold' }}
                  color='text.primary'
                  variant='h1'
                  gutterBottom
                >
                  {rev.movieName}
                </Typography>
                <Typography variant='body2'>{rev.movieReview}</Typography>
              </CardContent>
            </Card>
          </div>
        )
      })}
      <Button
        sx={{ marginTop: '20px' }}
        variant='outlined'
        startIcon={<PageviewOutlinedIcon />}
        onClick={getData}
      >
        Get a random review
      </Button>
    </Container>
  )
}
export default Home
