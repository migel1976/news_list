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

  const getData = () => {
    // return item.points;
    return new Date(item.time * 1000).toLocaleString();
  };

  // function timeConverter() {
  //   const UNIX_timestamp = item.time;
  //   let a = new Date(UNIX_timestamp * 1000);
  //   let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  //   let year = a.getFullYear();
  //   let month = months[a.getMonth()];
  //   let date = a.getDate();
  //   let hour = a.getHours();
  //   let min = a.getMinutes();
  //   let sec = a.getSeconds();
  //   let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
  //   return time;
  // }

  return (
    <Row>
      <Col>
        <ItemContainer>
          <Card>
            <Card.Body>
              {/* <Card.Title>{item.time_ago}</Card.Title> */}
              <Card.Title>{item.title}</Card.Title>
              <Card.Title>Автор статьи: {item.user}</Card.Title>
              <Card.Title>Рейтинг: {item.points}</Card.Title>
              <Card.Title>Дата публикации: {getData()}</Card.Title>
              {/* <Card.Title>Дата публикации: {timeConverter()}</Card.Title> */}
              <Card.Text>
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
