import useSWR , { Key, Fetcher }from 'swr';
import axios from 'axios'

export interface IMovieDetail  {
  
  id: string,
  url: string
  imdb_code: string
  title: string
  title_english: string
  title_long: string
  slug: string
  year: number
  rating: number
  runtime: number
  genres: string[]
  download_count: number
  like_count: number
  description_intro: string
  description_full: string
  yt_trailer_code: string
  language: string
  mpa_rating: string
  background_image: string
  background_image_original: string
  small_cover_image: string
  medium_cover_image: string
  large_cover_image: string
}

export default function useMovieDetail(id:string){
  console.log(id);
  const fetcher = (url: string): Promise<IMovieDetail> => axios(url).then((res) => res.data).then(data=>data.data).then(data=> data.movie);
  let URL = `https://yts.mx/api/v2/movie_details.json?movie_id=${id!}`;
  const { data, error, mutate } = useSWR(URL, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate
  }
}