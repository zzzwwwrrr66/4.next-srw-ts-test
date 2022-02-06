
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useMovies from '../api/useMovies';
import MoviesPagination from './MoviesPagination'

const Movies = () => {
  const [activePage, setActivePage] = useState(1);
  const { data, isError, isLoading, mutate} = useMovies(activePage);

  const handlePageChange = (pageNumber:number) => {
    setActivePage(pageNumber);
  }

  if (isError) return <div>failed to load</div>
  return(
    <>
    <h1>Movies</h1>
{
  !data ? (
    <div>loading...</div>
  ) : (
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
  )
}
    
    <MoviesPagination activePage={activePage} handlePageChange={handlePageChange}/>
    </>
  )
}
export default Movies;