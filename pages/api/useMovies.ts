import useSWR , { Key, Fetcher }from 'swr';
import axios from 'axios'

export interface Idata  {
  
    limit: number,
    movie_count: number,
    movies: {
      background_image: string
      background_image_original: string
      date_uploaded: string
      date_uploaded_unix: number
      description_full: string
      genres: string[]
      id: number
      imdb_code: string
      language: string
      large_cover_image:string
      medium_cover_image: string
      mpa_rating: string
      rating: number
      runtime: number
      slug: string
      small_cover_image: string
      state: string
      summary: string
      synopsis:string
      title: string
      title_english: string
      title_long: string
      url: string
      year: number
    }[],
    page_number:number
}

export default function useMovies(pageNum?: number){
  const fetcher = (url: string): Promise<Idata> =>
  axios(url).then((res) => res.data).then(data=>data.data);
  const num = pageNum ? pageNum : 1
  const { data, error, mutate } = useSWR(`https://yts.mx/api/v2/list_movies.json?page=${num}`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate
  }
}