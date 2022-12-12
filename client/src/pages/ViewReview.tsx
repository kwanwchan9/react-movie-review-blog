import { useState, useEffect } from 'react'
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

interface IReview {
  id: number
  title: string
  content: string
}

const ViewReview = () => {
  const [reviewList, setReviewList] = useState<IReview[]>([])
  const handleDelete = () => {
    console.log('id')
  }

  return (
    <>
      {reviewList.map((review) => {
        return (
          <>
            <Card
              sx={{
                maxWidth: 345,
                bgcolor: 'hsl(40, 100%, 99%)',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: '30px 0 30px 0',
              }}
            >
              <div>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 20 }}
                    color='text.primary'
                    variant='h1'
                    gutterBottom
                  >
                    {review.title}
                  </Typography>
                  <Typography variant='body2'>{review.content}</Typography>
                </CardContent>
              </div>
              <div>
                <CardActions>
                  <Button
                    variant='outlined'
                    startIcon={<DeleteIcon />}
                    onClick={handleDelete}
                  >
                    Delete
                  </Button>
                </CardActions>
              </div>
            </Card>
          </>
        )
      })}
    </>
  )
}
export default ViewReview
