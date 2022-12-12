/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

interface IReview {
  id: number
  title: string
  content: string
}

const Home = () => {
  const [reviewList, setReviewList] = useState<IReview[]>()

  // const handleDelete = () => {
  //   console.log('id')
  // }
  const getData = () => {
    axios
      .get<IReview[]>('http://localhost:3001/api/get')
      .then((res) => {
        setReviewList(res.data)
        return console.log(reviewList)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <h1>Home</h1>
      <button onClick={getData}>Test</button>
      {reviewList?.map((val, key) => {
        return <h1 key={val.id}>{val.title}</h1>
      })}
    </>
  )
}
export default Home
