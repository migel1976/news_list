import { useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import Comment from './Comment';
import { BackButton } from './Item.styles';
import { BodyContainer } from './Newsitem.styles';

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
      <Card border="success" bg="warning">
        <Card.Header className="text-uppercase">{item.title}</Card.Header>
        <BodyContainer>
          <Card.Body>
            <Card.Title>Дата публикации: {getData()}</Card.Title>
            <Card.Title>Автор статьи: {item.user}</Card.Title>
            <Card.Title>
              <Link to={item.url} target="_blank">
                Источник новости
              </Link>
            </Card.Title>
            <Card.Footer>
              {item && item.comments && item.comments.length > 0 ? `Комментарии` : <></>}
              {item && item.comments && item.comments.length > 0 ? (
                item.comments.map((comment) => {
                  return <Comment key={comment.id} comment={comment} />;
                })
              ) : (
                <></>
              )}
            </Card.Footer>
          </Card.Body>
        </BodyContainer>
      </Card>
    </>
  );
};
export default Item;
