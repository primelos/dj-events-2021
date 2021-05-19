import { useRouter } from 'next/router'


export default function EventsPage() {
  const router = useRouter()

  console.log(router);
  return (
    <div>
      myEvent
      <p>{router.query.slug}</p>
    </div>
  )
}
