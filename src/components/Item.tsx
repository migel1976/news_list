import { useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Item: React.FC = () => {
  const { item, error, loading } = useTypedSelector((state) => state.item);
  const { fetchItem } = useActions();
  //   const [itemPage, setItemPage] = useEffect(page);

  useEffect(() => {
    fetchItem();
  }, []);

  if (loading) {
    return <h1>... идет загрузка</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <div>{item.title}</div>
      <div>{item.comments_count}</div>
      <Link to="/">
        <Button onClick={() => console.log('обратно')}>Назад</Button>
      </Link>
    </>
  );
};
export default Item;
