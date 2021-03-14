import { ShopCollectionItem } from "../../pages/shop/shop.data";
import './collection-item.styles.scss';

type CollectionItemProps = ShopCollectionItem;

const CollectionItem = ({ name, price, imageUrl }: CollectionItemProps) => (
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />

    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>${price}</span>
    </div>
  </div>
)

export default CollectionItem;