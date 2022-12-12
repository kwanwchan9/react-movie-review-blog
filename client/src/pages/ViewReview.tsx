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

// for github page demo purpose
const initialState: object[] = [
  {
    id: 1,
    movieName: 'Breaking Bad',
    movieReview:
      'I have never watched a show that is as consistentl… feels improper to refer to them as performances.',
  },
  {
    id: 2,
    movieName: 'The Godfather',
    movieReview:
      "For Me, This Is The Definitive Film.\nThis isn't ju… this is the definitive film. 10 stars out of 10.",
  },
  {
    id: 3,
    movieName: 'Inception',
    movieReview:
      'Is it possible the makers understand how incredibl… some, perhaps it is in the cinema watching this.',
  },
  {
    id: 4,
    movieName: 'Sen to Chihiro no kamikakushi',
    movieReview:
      "Spirited Away' is the first Miyazaki I have seen, …yazaki does this brilliantly in 'Spirited Away'. ",
  },
  {
    id: 5,
    movieName: 'The Lion King',
    movieReview:
      'By far, the greatest Disney movie ever made...\nThi… classic that will endure through the ages. 10/10',
  },
]

const ViewReview = () => {
  // const [reviewList, setReviewList] = useState<IReview[]>([])
  const [reviewList, setReviewList] = useState<IReview[]>([] || initialState)

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
export default ViewReview
