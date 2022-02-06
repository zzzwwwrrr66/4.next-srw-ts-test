import { useState,FC } from 'react';
import Pagination from 'react-js-pagination';

import useMovies from '../api/useMovies';
import styles from './style.module.css';

interface IProps {
  activePage: number,
  handlePageChange: (pageNumber:number) => void
}

const MoviesPagination:FC<IProps> = ({activePage, handlePageChange}) => {

  const { data, isError, isLoading, mutate} = useMovies(activePage);

  return(
  <>
  <div className={styles.paginationWrap}>
    <Pagination
      activePage={activePage}
      itemsCountPerPage={20}
      // totalItemsCount={data?.movie_count!}
      totalItemsCount={39031}
      pageRangeDisplayed={5}
      onChange={handlePageChange}
      activeClass={styles.active}
    />
  </div>
  </>
  )
}

export default MoviesPagination;