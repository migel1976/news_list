import { useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';

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
      {/* {item.map((el) => {
        <div key={el.id}>{el.comments_count}</div>;
      })} */}
    </>
  );
};
export default Item;
