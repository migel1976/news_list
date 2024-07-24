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
  const { news, error, loading } = useTypedSelector((state) => state.news);
  const { fetchNews, setNewsPage } = useActions();
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchNews(page);
  }, [page]);

  const nextPage = () => {
    setPage((prev) => prev + 1);
    setNewsPage(page);
  };

  const refreshPage = () => {
    fetchNews(1);
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
        // <div key={item.id}>{item.title}</div>
      ))}
    </>
  );
};
export default Home;
