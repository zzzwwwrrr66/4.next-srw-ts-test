import useSWR from 'swr';

declare global {
  interface Window {
    count: number;
  }
}

function useCounter(){
  if (typeof window !== "undefined") {
    window.count = 0
  }
  const {data, mutate} = useSWR('state', () => window.count)

  return {data, mutate: (count : number) => {
    window.count = count
    return mutate()
  }}
}

export default function Counter(){
  const {data, mutate} = useCounter()
  
  const handleInc = () => mutate((data) as number + 1);
  const handleDec = () => mutate(data! - 1);

  return (
      <div>
        <span>count: {data}</span>
        <button onClick={handleInc}>inc</button>
        <button onClick={handleDec}>dec</button>
      </div>
  )
}