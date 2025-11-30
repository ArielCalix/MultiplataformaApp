import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Fetcher as FetcherCharacters, Selector as SelectorCharacters } from './store/slices/characters';
import type { TypeUtilities } from './utilities/TypeUtilities';
import { useDispatch, useSelector } from './store/index';
import CharacterCard from './components/CharacterCard';
import './App.css'
import { Button, ButtonGroup } from 'reactstrap';

function App() {
  const dispatch = useDispatch();
  const characters = useSelector(SelectorCharacters.getAllCharacters)
  const info = useSelector(SelectorCharacters.getInfo)
  const [nextPage, setNextPage] = React.useState<string | null>(null);
  const [prevPage, setPrevPage] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (info) {
      const urlNext = new URL(info.next);
      const urlParamsNext = new URLSearchParams(urlNext.search);
      const nextPage = urlParamsNext.get("page");
      const urlPrev = new URL(info.next);
      const urlParamsPrev = new URLSearchParams(urlPrev.search);
      const prevPage = urlParamsPrev.get("page");
      setNextPage(nextPage);
      setPrevPage(prevPage);
    }
  }, [info]);

  React.useEffect(() => {
    console.log('Fetching characters...');
    const utils: TypeUtilities = {
      url: "character"
    };
    dispatch(FetcherCharacters.getAllCharacters(utils));
  }, []);

  function fetchDataByPage(page: string | null) {
    if (page) {
      const utils: TypeUtilities = {
        url: `character?page=${page}`
      };
      dispatch(FetcherCharacters.getAllCharacters(utils));
    }
  }

  return (
    <>
      <div>
        <ImageLink link='https://react.dev' imgSrc={viteLogo} description='React Logo' />
        <ImageLink link='https://vite.dev' imgSrc={reactLogo} description='Vite Logo' />
        <ImageLink link='https://picsum.photos' imgSrc='https://picsum.photos/id/237/200/300' description='Random Dog' />
      </div>
      <h1>Vite + React</h1>
      <div className="characters-container">
        {characters && characters.map((char) => {
          return <CharacterCard key={char.id} {...char} />
        })}
      </div>
      <div>
        <ButtonGroup>
          <Button onClick={() => fetchDataByPage(prevPage)}>Back</Button>
          <Button onClick={() => fetchDataByPage(nextPage)}>Next</Button>
        </ButtonGroup>
      </div>
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