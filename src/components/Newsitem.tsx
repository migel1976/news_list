import styled from 'styled-components';
const ItemContainer = styled.div`
  border: 1px solid #0f0;
  padding-block: 5px;
  margin-block: 5px;
`;

const Newsitem = (props) => {
  return <ItemContainer>{props.item.title}</ItemContainer>;
};
export default Newsitem;
