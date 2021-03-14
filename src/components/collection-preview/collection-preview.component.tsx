import { ShopCollectionItem } from "../../pages/shop/shop.data";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

export interface CollectionPreviewProps {
  title: string;
  items: ShopCollectionItem[];
}

const CollectionPreview = ({ title, items }: CollectionPreviewProps) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((_) => (
          <CollectionItem key={_.id} {..._} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
