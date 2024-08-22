import React from 'react';

const ProductCard = ({ item }) => {
  return (
    <div>
      <img
        src={item?.img}
        alt='test-img'
        className='img-size-change'
        width={230}
      />
      <div>{item?.choice === true ? 'Concious choice' : ''}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new === true ? '신제품' : ''}</div>
    </div>
  );
};

export default ProductCard;
