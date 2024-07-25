import { useEffect, useState } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Button } from 'react-bootstrap';
import Newsitem from './Newsitem';
import styled from 'styled-components';

const Navigate = styled.div`
  display: flex;
  gap: 20px;
`;

const Home: React.FC = () => {
  const { news, error, loading, page } = useTypedSelector((state) => state.news);
  // const statePage = useTypedSelector((state) => state.news);
  // const newsPage = statePage.page;
  const { fetchNews, setNewsPage } = useActions();
  useEffect(() => {
    fetchNews(page);
  }, [page]);

  const nextPage = () => {
    setNewsPage(page + 1);
  };

  const refreshPage = () => {
    setNewsPage(1);
    fetchNews(page);
  };

  if (loading) {
    return <h1>...идет загрузка</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <h1>Лента новостей</h1>
      <Navigate>
        <div>
          <Button onClick={refreshPage}>Обновить</Button>
        </div>
        <div>
          <Button onClick={nextPage}>Следующая</Button>
        </div>
      </Navigate>
      {news.map((item) => (
        <Newsitem key={item.id} item={item} />
      ))}
    </>
  );
};
export default Home;
