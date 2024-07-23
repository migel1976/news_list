import { Row, Col, Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { useActions } from '../hooks/useAction';
import { Link } from 'react-router-dom';
const ItemContainer = styled.div`
  // border: 1px solid #0f0;
  padding-block: 5px;
  margin-block: 5px;
  .card-text {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    background: grey;
    align-content: space-between;
  }
`;

const Newsitem = ({ item }) => {
  // return <ItemContainer>{props.item.title}</ItemContainer>;
  const { setItemPage } = useActions();
  const showItem = (id) => {
    setItemPage(id);
  };
  return (
    <Row>
      <Col>
        <ItemContainer>
          <Card>
            <Card.Body>
              <Card.Title>{item.time_ago}</Card.Title>
              <Card.Text>
                {item.title}
                <Link to="/item">
                  <Button onClick={() => showItem(item.id)}>Подробнее...</Button>
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </ItemContainer>
      </Col>
    </Row>
  );
};
export default Newsitem;
