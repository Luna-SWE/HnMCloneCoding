import React from 'react';

const ProductCard = ({ item }) => {
  return (
    <div className='img-size-change'>
      <img src={item?.img} alt='test-img' width={230} />
      <div>{item?.choice === true ? 'Concious Choice' : ''}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new === true ? '신제품' : ''}</div>
    </div>
  );
};

export default ProductCard;
