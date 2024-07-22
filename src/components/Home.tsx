import { useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Home: React.FC = () => {
  const { news, error, loading } = useTypedSelector((state) => state.news);
  const { fetchNews } = useActions();
  useEffect(() => {
    fetchNews();
  }, []);
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
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  );
};
export default Home;
