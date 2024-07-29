import { useEffect, useCallback } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import Comment from './Comment';
import { NavigateButton, BodyContainer, ItemContainer } from '../styles';
import { getFormatedDate } from '../utills';
import HeaderSection from './Headersection';

const Item: React.FC = () => {
  const { item, error, loading } = useTypedSelector((state) => state.item);
  const { page } = useTypedSelector((state) => state.news);

  const { fetchItem } = useActions();
  const { fetchNews, setNewsPage } = useActions();

  const updateItem = useCallback(() => {
    fetchItem();
  }, [page]);

  useEffect(() => {
    updateItem();
    const timer = setInterval(updateItem, 1000 * 60);
    return () => clearInterval(timer);
  }, [updateItem]);

  if (loading) {
    return <HeaderSection text="...идет загрузка" />;
  }
  if (error) {
    return <HeaderSection text={error} />;
  }

  const backPage = () => {
    setNewsPage(page);
    fetchNews(page);
  };

  return (
    <>
      <HeaderSection text="Лента новостей" />
      <NavigateButton>
        <div>
          <Button onClick={() => fetchItem()}>Обновить</Button>
        </div>
      </NavigateButton>
      <ItemContainer>
        <Card border="success" bg="warning">
          <Card.Header className="text-uppercase">{item.title}</Card.Header>
          <BodyContainer>
            <Card.Body>
              <Card.Subtitle>Дата публикации: {getFormatedDate(item.time)}</Card.Subtitle>
              <Card.Subtitle>Автор статьи: {item.user}</Card.Subtitle>
              <Card.Subtitle>
                <Link to={item.url} target="_blank">
                  Источник новости
                </Link>
              </Card.Subtitle>
              <Card.Subtitle>
                <Link to="/">К ленте новостей</Link>
              </Card.Subtitle>
              <Card.Footer>
                <p>Комментарии</p>
                {item && item.comments && item.comments.length > 0 ? (
                  item.comments.map((comment) => {
                    // console.log('comment.content', comment.content);
                    return <Comment key={comment.id} comment={comment} />;
                  })
                ) : (
                  <p>Комментариев нет</p>
                )}
              </Card.Footer>
            </Card.Body>
          </BodyContainer>
        </Card>
      </ItemContainer>
    </>
  );
};
export default Item;
