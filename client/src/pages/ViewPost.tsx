import { useState, useEffect } from 'react'
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

interface IReview {
  id: number
  movieName: string
  movieReview: string
}

const ViewPost = () => {
  const [reviewList, setReviewList] = useState<IReview[]>([])

  const getData = async () => {
    try {
      const res = await axios.get('http://localhost:3001/api/get')
      setReviewList(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const handleDelete = (id: number) => {
    axios
      .delete(`http://localhost:3001/api/delete/${id}`)
      .then(() => toast.success('Successfully Delete!'))
    setReviewList(
      reviewList.filter((rev) => {
        return rev.id !== id
      })
    )
  }

  return (
    <>
      <Toaster />
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='flex-start'
        spacing={3}
        sx={{ margin: '0 20px 30px 20px' }}
      >
        {reviewList.map((review) => {
          return (
            <div key={review.id}>
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
                    {review.movieName}
                  </Typography>
                  <Typography variant='body2'>{review.movieReview}</Typography>
                  <CardActions>
                    <Button
                      sx={{ top: '5px', right: '10px' }}
                      variant='outlined'
                      startIcon={<DeleteIcon />}
                      onClick={() => handleDelete(review.id)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </div>
          )
        })}
      </Grid>
    </>
  )
}
export default ViewPost
