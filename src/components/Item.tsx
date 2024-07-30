import { useEffect, useCallback } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Link, useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

import { NavigateButton, BodyContainer, ItemContainer } from '../styles';
import { getFormatedDate } from '../utills';

import HeaderSection from './Headersection';
import Comment from './Comment';

const Item: React.FC = () => {
  const { item, error, loading } = useTypedSelector((state) => state.item);
  const { fetchItem } = useActions();
  const itemParam = useParams<{ id: string }>();

  const updateItem = useCallback(() => {
    fetchItem(itemParam.id);
  }, []);

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

  return (
    <>
      <HeaderSection text="Подробно о новости" />
      <NavigateButton>
        <div>
          <Button onClick={() => fetchItem(itemParam.id)}>Обновить</Button>
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
