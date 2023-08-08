'use client'

import { useRouter } from "next/navigation"

export default function MyButton () {

  const router = useRouter()  

  const refetch = () => {
    console.log('refetching2')
    router.refresh()
  }

  return (
    <button onClick={refetch}>Refetch</button>
  )
}