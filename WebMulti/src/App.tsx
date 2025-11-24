import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const data = [
    {
      link: 'https://react.dev', imgSrc: viteLogo, description: 'React Logo'
    },
    {
      link: 'https://vite.dev', imgSrc: reactLogo, description: 'Vite Logo'
    }
  ];

  return (
    <>
      <div>
        <ImageLink link='https://react.dev' imgSrc={viteLogo} description='React Logo' />
        <ImageLink link='https://vite.dev' imgSrc={reactLogo} description='Vite Logo' />
        <ImageLink link='https://picsum.photos' imgSrc='https://picsum.photos/id/237/200/300' description='Random Dog' />
        {data && data.map((item) => {
          return <ImageLink key={item.link} link={item.link} imgSrc={item.imgSrc} description={item.description} />
        })}
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

function ImageLink(props: { link: string; imgSrc: string; description: string }) {
  const { link, imgSrc, description } = props
  return (
    <a href={link} target="_blank">
      <img src={imgSrc} className="logo react" alt={description} />
    </a>
  )
}