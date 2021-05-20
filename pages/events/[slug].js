import Layout from '@/components/Layout';
import { useRouter } from 'next/router'
// import styles from "@/styles/Event.module.css";

export default function EventsPage({evt}) {
  // const router = useRouter()

  return (
    <Layout className='styles.event'>
     <h1>{evt.name}</h1> 
      {/* <p>{router.query.slug}</p> */}
    </Layout>
  );
}

export async function getServerSideProps({ query: {slug}}) {
  const res = await fetch(`${API_URL}/api/events/${slug}`)
  const events = await res.json()


  return {
    props: {
      evt: events[0]
    },
  }
}