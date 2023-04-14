import './productCard.css';

const ProductCard = ({ data }) => {
  const { image, title, rating, finalPrice, price, source } = { ...data };

  function getHref() {
    if (source === 'Amazon') {
      return `https://www.amazon.in/s?k=${title}`;
    }
    if (source === 'Flipkart') {
      return `https://www.flipkart.com/search?q=${title}`;
    }
    if (source === 'Snapdeal') {
      return `https://www.snapdeal.com/search?keyword=${title}&&sort=rlvncy`;
    }
  }
  const href = getHref();
  return (
    <a href={href} target='_blank' rel='noreferrer' className='product-card'>
      <div className='card-image'>
        <img
          src={
            image !== 'No Image Found'
              ? image
              : 'https://via.placeholder.com/96/eeeeee/eeeeee'
          }
          alt='product'
        />
      </div>
      <div className='card-info'>
        <p className='title'>{title}</p>
        <p className='rating'>{rating}</p>
        <div className='price-info'>
          <p className='price'>{price}</p>
          <p className='finalPrice'>{finalPrice}</p>
        </div>
        <p className='source'>You may buy on {source} website</p>
      </div>
    </a>
  );
};

export default ProductCard;