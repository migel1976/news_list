import { useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const Item: React.FC = () => {
  const { item, error, loading, page } = useTypedSelector((state) => state.item);
  const { fetchItem } = useActions();
  //   const [itemPage, setItemPage] = useEffect(page);

  useEffect(() => {
    fetchItem();
    console.log('Item page is: ', page);
    console.log('Item is: ', item);
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

  const getComments = () => {
    if (item && item.comments && item.comments.length > 0) {
      return item.comments.map((el) => <div dangerouslySetInnerHTML={{ __html: el.content }}></div>);
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Link to={item.url} target="_blank">
            Источник новости
          </Link>
          <Card.Title>{item.title}</Card.Title>
          <Card.Title>Дата публикации: {getData()}</Card.Title>
          <Card.Title>Автор статьи: {item.user}</Card.Title>
          <Card.Title>Количество комментариев: {item.comments_count}</Card.Title>
          <Card.Text>{getComments()}</Card.Text>
          {/* <Card.Text>{item.comments}</Card.Text> */}
          <Card.Footer>
            <Link to="/">
              <Button onClick={() => console.log('обратно')}>Назад</Button>
            </Link>
          </Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
};
export default Item;
