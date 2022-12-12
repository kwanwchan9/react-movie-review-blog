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

// for deploy purpose
// const initialState: IReview[] = [
//   {
//     id: 1,
//     movieName: 'Breaking Bad',
//     movieReview: `I have never watched a show that is as consistently genuine and engaging as Breaking Bad. This is undoubtedly one of the greatest shows ever, and it consistently improves as it progresses.
//     The Journeys of Walter White and Jesse Pinkman are unforgettable. These are some of the best-written characters to ever come from a pen-hitting paper.
//     My praises for the acting and cinematography are unending. Some of the shots are intricate works of art, and I was rarely distracted by the acting. The performances are excellent to the extent that it feels improper to refer to them as performances.`,
//   },
//   {
//     id: 2,
//     movieName: 'The Godfather',
//     movieReview: `For Me, This Is The Definitive Film.
//     This isn't just a beautifully crafted gangster film. Or an outstanding family portrait, for that matter. An amazing period piece. A character study. A lesson in filmmaking and an inspiration to generations of actors, directors, screenwriters and producers. For me, this is more: this is the definitive film. 10 stars out of 10.`,
//   },
//   {
//     id: 3,
//     movieName: 'Inception',
//     movieReview: `Is it possible the makers understand how incredible this film is?
//     You only get to watch this for the first time once, so choose your state of mind carefully. It is a film about movies and dreams and reality, and what sort of life it is best to find when you leave the cinema and return to whatever you left to enter. It is spectacular, and brutal, and enigmatic and disturbing. It is beautiful and absorbing.
//     It is about one of my favourite characters ever to grace the screen. I don't see it often, in case it's not as good as I like to remember it. That is my secret, that I lock away in my safe in the basement. That somewhere there is a perfect world for us all. For some, perhaps it is in the cinema watching this.`,
//   },
//   {
//     id: 4,
//     movieName: 'Sen to Chihiro no kamikakushi',
//     movieReview: `Spirited Away' is the first Miyazaki I have seen, but from this stupendous film I can tell he is a master storyteller.
//     A hallmark of a good storyteller is making the audience empathise or pull them into the shoes of the central character. Miyazaki does this brilliantly in 'Spirited Away'. `,
//   },
//   {
//     id: 5,
//     movieName: 'The Lion King',
//     movieReview: `By far, the greatest Disney movie ever made...
//     This movie is, quite seriously, the Citizen Kane of Disney animation. Every animated movie from Disney ever since has been a failed attempt to recreate the masterpiece that this film is. This movie is an anomaly in a market usually dominated by formulaic kiddie-fare.
//     Unlike most films from animation studios, this movie will enthrall you, whether you're 5 years old, or 50. An epic plot, intriguing characters, great music and hillarious moments make this film a family classic that will endure through the ages.
//     10/10`,
//   },
// ]

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

  // const getData = () => {
  //   setReviewList(initialState)
  // }

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
