import { useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import Comment from './Comment';
import { BackButton } from './Item.styles';
import { BodyContainer } from './Newsitem.styles';
import { HeaderPage } from './Home.styles';

const Item: React.FC = () => {
  const { item, error, loading } = useTypedSelector((state) => state.item);
  const { page } = useTypedSelector((state) => state.news);

  const { fetchItem } = useActions();
  const { fetchNews, setNewsPage } = useActions();

  useEffect(() => {
    fetchItem();
  }, []);

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

  const getData = () => {
    return new Date(item.time * 1000).toLocaleString();
  };

  const backPage = () => {
    setNewsPage(page);
    fetchNews(page);
  };

  return (
    <>
      <HeaderPage>
        <h1>Подробно о новости</h1>
      </HeaderPage>
      <BackButton>
        <Link to="/">
          <Button onClick={backPage}>Назад</Button>
        </Link>
      </BackButton>
      <Card border="success" bg="warning">
        <Card.Header className="text-uppercase">{item.title}</Card.Header>
        <BodyContainer>
          <Card.Body>
            <Card.Subtitle>Дата публикации: {getData()}</Card.Subtitle>
            <Card.Subtitle>Автор статьи: {item.user}</Card.Subtitle>
            <Card.Subtitle>
              <Link to={item.url} target="_blank">
                Источник новости
              </Link>
            </Card.Subtitle>
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
