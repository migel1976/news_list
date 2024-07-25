import { useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import Comment from './Comment';
import { BackButton } from './Item.styles';

const Item: React.FC = () => {
  const { item, error, loading } = useTypedSelector((state) => state.item);
  const { page } = useTypedSelector((state) => state.news);

  const { fetchItem } = useActions();
  const { fetchNews, setNewsPage } = useActions();

  useEffect(() => {
    fetchItem();
  }, []);

  if (loading) {
    return <h1>... идет загрузка</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  const getData = () => {
    return new Date(item.time * 1000).toLocaleString();
  };

  const backPage = () => {
    setNewsPage(page);
    fetchNews(page);
  };

  return (
    <>
      <h1>Подробности</h1>
      <BackButton>
        <Link to="/">
          <Button onClick={backPage}>Назад</Button>
        </Link>
      </BackButton>
      <Card>
        <Card.Body>
          <Card.Title>Название статьи: {item.title}</Card.Title>
          <Card.Title>Дата публикации: {getData()}</Card.Title>
          <Card.Title>Автор статьи: {item.user}</Card.Title>
          {/* <Card.Title>Количество комментариев: {item.comments_count}</Card.Title> */}
          <Link to={item.url} target="_blank">
            Источник новости
          </Link>
          <Card.Text>
            {item && item.comments && item.comments.length > 0 ? `Комментарии` : <></>}
            {item && item.comments && item.comments.length > 0 ? (
              item.comments.map((comment) => {
                return <Comment key={comment.id} comment={comment} />;
              })
            ) : (
              <></>
            )}
          </Card.Text>
          <Card.Footer></Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
};
export default Item;
