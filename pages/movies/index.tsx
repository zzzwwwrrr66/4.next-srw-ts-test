
import Link from 'next/link';
import { useEffect } from 'react';
import useMovies from '../api/useMovies';

const Movies = () => {
  const { data, isError, isLoading, mutate} = useMovies();
  console.log('movies',data, 'loading', isLoading);

  const onReloadData = () => {
    return mutate();
  }
  
  if (isError) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return(
    <>
    <h1>Movies</h1>

    <button onClick={onReloadData}>data reload btn</button>
    <ul>
    {
      data?.movies.map(v=>{
        return (
          <li key={v.id}>
              <Link href={`/movies/${v.id}`}>
              <a>{v.title}</a>
              </Link>
            <div>
              <img src={v.small_cover_image} alt={v.title}/>
            </div>
          </li>     
        )
      })
    }
    </ul>
    </>
  )
}
export default Movies;