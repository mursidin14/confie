import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SkeletonLoading({width}) {
  return (
    <Skeleton width={width}/>
  )
}
