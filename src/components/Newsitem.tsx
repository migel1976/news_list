import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { News } from '../types/news';
import { BodyContainer, ItemContainer } from '../styles';
import { getFormatedDate } from '../utills';

interface NewsItemProps {
  item: News;
  count: number;
}

const Newsitem = ({ item, count }: NewsItemProps) => {
  const url = `/item/${item.id}`;

  return (
    <Row>
      <Col>
        <ItemContainer>
          <Card border="success" bg="warning">
            <Card.Header className="text-uppercase">
              #{count + 1} {item.title}
            </Card.Header>
            <BodyContainer>
              <Card.Body>
                <Card.Subtitle>Автор статьи: {item.user}</Card.Subtitle>
                <Card.Subtitle>Рейтинг: {item.points}</Card.Subtitle>
                <Card.Subtitle>Дата публикации: {getFormatedDate(item.time)}</Card.Subtitle>
                <Card.Subtitle>Количество комментарий: {item.comments_count}</Card.Subtitle>
                <Card.Footer>
                  <Link to={url}>Подробнее</Link>
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
