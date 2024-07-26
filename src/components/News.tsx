import { useCallback, useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Button } from 'react-bootstrap';
import Newsitem from './Newsitem';
// import { HeaderPage, Navigate } from './News.styles';
import { HeaderPage, NavigateButton } from '../styles';

const Home: React.FC = () => {
  const { news, error, loading, page } = useTypedSelector((state) => state.news);
  const { fetchNews, setNewsPage } = useActions();

  const updateFetchNews = useCallback(() => {
    fetchNews(page);
  }, [page]);

  useEffect(() => {
    updateFetchNews();
    const timer = setInterval(updateFetchNews, 1000 * 60);
    return () => clearInterval(timer);
  }, [updateFetchNews]);

  const nextPage = () => {
    setNewsPage(page + 1);
  };

  const refreshPage = () => {
    setNewsPage(1);
    fetchNews(page);
  };

  if (loading) {
    return (
      <HeaderPage>
        <h1>...идет загрузка</h1>
      </HeaderPage>
    );
  }
  if (error) {
    return (
      <HeaderPage>
        <h1>{error}</h1>;
      </HeaderPage>
    );
  }

  return (
    <>
      <HeaderPage>
        <h1>Лента новостей</h1>
      </HeaderPage>
      <NavigateButton>
        <div>
          <Button onClick={refreshPage}>Обновить</Button>
        </div>
        <div>
          <Button onClick={nextPage}>Следующая</Button>
        </div>
      </NavigateButton>
      {news.map((item) => (
        <Newsitem key={item.id} item={item} />
      ))}
    </>
  );
};
export default Home;
