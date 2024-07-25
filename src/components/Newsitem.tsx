import { Row, Col, Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { useActions } from '../hooks/useAction';
import { Link } from 'react-router-dom';
import { News } from '../types/news';
const ItemContainer = styled.div`
  padding-block: 5px;
  margin-block: 5px;
  .card-text {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;

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
          <Card>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Title>Автор статьи: {item.user}</Card.Title>
              <Card.Title>Рейтинг: {item.points}</Card.Title>
              <Card.Title>Дата публикации: {getData()}</Card.Title>
              <Card.Title>Time ago: {item.time_ago}</Card.Title>
              <Card.Title>Количество комментарий: {item.comments_count}</Card.Title>
              <Card.Text></Card.Text>
              <Card.Footer>
                <Link to="/item">
                  <Button onClick={() => showItem(item)}>Подробнее</Button>
                </Link>
              </Card.Footer>
            </Card.Body>
          </Card>
        </ItemContainer>
      </Col>
    </Row>
  );
};
export default Newsitem;
