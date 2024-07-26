import { Row, Col, Card } from 'react-bootstrap';
import { useActions } from '../hooks/useAction';
import { Link } from 'react-router-dom';
import { News } from '../types/news';
import { BodyContainer, ItemContainer } from '../styles';

interface NewsItemProps {
  item: News;
}

const Newsitem = ({ item }: NewsItemProps) => {
  const { setItemPage } = useActions();
  const showItem = (item: News) => {
    setItemPage(item.id);
  };

  const getData = () => {
    return new Date(item.time * 1000).toLocaleString();
  };

  return (
    <Row>
      <Col>
        <ItemContainer>
          <Card border="success" bg="warning">
            <Card.Header className="text-uppercase">{item.title}</Card.Header>
            <BodyContainer>
              <Card.Body>
                <Card.Subtitle>Автор статьи: {item.user}</Card.Subtitle>
                <Card.Subtitle>Рейтинг: {item.points}</Card.Subtitle>
                <Card.Subtitle>Дата публикации: {getData()}</Card.Subtitle>
                <Card.Subtitle>Количество комментарий: {item.comments_count}</Card.Subtitle>
                <Card.Footer>
                  <Link to="/item" onClick={() => showItem(item)}>
                    Подробнее
                  </Link>
                </Card.Footer>
              </Card.Body>
            </BodyContainer>
          </Card>
        </ItemContainer>
      </Col>
    </Row>
  );
};
export default Newsitem;
