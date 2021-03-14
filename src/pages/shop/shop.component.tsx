import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA, { ShopCollection } from "./shop.data";

interface ShopPageState {
  collections: ShopCollection[];
}

class ShopPage extends React.Component<{}, ShopPageState> {
  constructor() {
    super({});
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return <div>{this.state.collections.map(_ => <CollectionPreview items={_.items} title={_.title} />)}</div>;
  }
}

export default ShopPage;
