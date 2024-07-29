import { useCallback, useEffect, useState } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Button } from 'react-bootstrap';
import Newsitem from './Newsitem';
import { NavigateButton } from '../styles';
import HeaderSection from './Headersection';

const START_LENGTH = 0;
const END_LENGTH = 100;

const Home: React.FC = () => {
  const { news, error, loading, page } = useTypedSelector((state) => state.news);
  const { fetchNews, setNewsPage, refreshNews } = useActions();
  const [countStart, setCountStart] = useState(0);
  const [countEnd, setCountEnd] = useState(100);

  const updateFetchNews = useCallback(() => {
    refreshNews();
  }, [page]);

  useEffect(() => {
    fetchNews(1);
  }, [updateFetchNews]);

  const refreshPage = () => {
    refreshNews();
    setCountStart(0);
    setCountEnd(100);
  };
  const prevPage = () => {
    setCountStart(countStart - END_LENGTH);
    setCountEnd(countEnd - END_LENGTH);
  };

  const nextPage = () => {
    setCountStart(countStart + END_LENGTH);
    setCountEnd(countEnd + END_LENGTH);
  };

  if (loading) {
    return <HeaderSection text="...идет загрузка" />;
  }
  if (error) {
    return <HeaderSection text={error} />;
  }

  return (
    <>
      <HeaderSection text="Лента новостей" />
      <NavigateButton>
        <div>
          <Button onClick={refreshPage}>Обновить</Button>
        </div>
        <div>
          <Button onClick={prevPage} disabled={countStart === START_LENGTH}>
            Предыдущая
          </Button>
        </div>
        <div>
          <Button onClick={nextPage} disabled={countEnd === news.length}>
            Следующая
          </Button>
        </div>
      </NavigateButton>

      {news.map((item, count) => {
        if (countStart <= count && count < countEnd) return <Newsitem key={item.id} item={item} count={count} />;
      })}
    </>
  );
};
export default Home;
