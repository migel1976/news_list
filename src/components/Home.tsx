import { useEffect, useState } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Button } from 'react-bootstrap';
import Newsitem from './Newsitem';

const Home: React.FC = () => {
  const { news, error, loading } = useTypedSelector((state) => state.news);
  const { fetchNews, setNewsPage } = useActions();
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchNews(page);
  }, [page]);

  const onBtnClick = () => {
    setPage((prev) => prev + 1);
    setNewsPage(page);
  };

  if (loading) {
    return <h1>...идет загрузка</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <h1>Главная страница</h1>
      {news.map((item) => (
        <Newsitem key={item.id} item={item} />
        // <div key={item.id}>{item.title}</div>
      ))}
      <div>
        <Button onClick={onBtnClick}>More ...</Button>
      </div>
    </>
  );
};
export default Home;
