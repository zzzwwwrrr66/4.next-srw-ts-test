import { useRouter, NextRouter } from "next/router";
import { useEffect, FC } from "react";
import {GetServerSideProps} from 'next';
import { ParsedUrlQuery } from 'node:querystring';
import useMovieDetail from '../api/useMovieDetail';


export interface IProps{
  id:string;
}

const MovieDetail = (props:IProps) => {

const router = useRouter();
  const { data, isError, isLoading, mutate} = useMovieDetail(props.id);
  console.log(data);

  if (isError) return <div>failed to load</div>
  if (!data) return <> <h2>Movie Detail</h2><div>loading...</div></>
  return(
    <>
    <h2>Movie Detail</h2>
    <div>
    {
      <>
        <h3>{data.title}</h3>
        <div>
          <img src={data.medium_cover_image}/>
        </div>
        <p>{data.description_full}</p>
      </>
    }
    </div>
    </>
  )
}
export default MovieDetail;

export const getServerSideProps:GetServerSideProps = async (ctx : any) =>{
  return {
    props: {
      id: ctx.query.id
    }
  }
}