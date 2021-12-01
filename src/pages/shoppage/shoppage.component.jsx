import React from "react";
import './shoppage.styles.scss';
import SHOP_DATA from "./shoppage.data";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";

class ShopPage extends React.Component {
    constructor() {
        super();

        this.state = {
            collections:SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(
                        ({id, title, items}) => 
                        <PreviewCollection key={id} title={title} items={items}/>
                    )
                }
            </div>
        )
    }
}

export default ShopPage;