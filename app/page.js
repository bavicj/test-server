import Image from 'next/image'
import MyButton from './MyButton'

export default async function Home() {

  const carResponse = await fetch('https://test.camasys.com/api/cars/01ada9f9-e5d0-11ed-bf95-960000f6f3bd', {
    method: 'GET',
		headers: {
			'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhcGlAcGF5bGVzcy5zayIsInVzZXJJZCI6IjQxMDMzOTA5LTM1Y2EtMTFlZS04YzQzLTk2MDAwMDcxODRkMCIsImNvbXBhbnlOYW1lIjoiQVZJUyIsImNvbXBhbnlJZCI6ImU1Y2E3ODQyLTEyOTYtNDg5MS1iMTQzLTg0NTUyMjQ1NTM0ZSIsInZhdCI6MCwiZmlyc3ROYW1lIjoiQVBJIiwibGFzdE5hbWUiOiJQQVlMRVNTIiwib3JnYW5pemF0aW9uYWxVbml0cyI6WyI2MzlhMTg2Ni04ZmMyLTExZTctOTBlYS1mMjNjOTFkNTJmOGYiLCJkYzdlMzBlZC1mNzk3LTExZTgtOGRkZi1mMjNjOTFkNTJmOGYiLCJiNjM5ZjliZC02ZDY0LTExZTgtOWMzNS1mMjNjOTFkNTJmOGYiLCI3MzA3MmIxOC1mOTllLTExZWEtOGM5Yi1mMjNjOTFkNTJmOGYiXSwicm9sZSI6IlJPTEVfQVBJX1VTRVIifQ.DLBFMAviKNbaaniAJk7ZxDhx-T97cv0S8NQeMEQ4u1fPRobxuJPeYcZ9Eys6U6NayiJk00qMiV-kSWyL_s34DQ',
      'cache': 'no-store'
		}
  })

  const car = await carResponse.json()

  console.log({car})
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h3>{car.status}</h3>
        <MyButton/>
    </main>
  )
}

export const revalidate = 0