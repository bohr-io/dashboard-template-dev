import { useParams } from 'react-router-dom'

export default function UserDetail() {
  const { userId } = useParams();

  return <h1>UserDetail: {userId}</h1>
}
