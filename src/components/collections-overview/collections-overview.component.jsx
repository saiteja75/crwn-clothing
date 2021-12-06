import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsPreview } from "../../redux/collections/collections.selectors";
import PreviewCollection from "../preview-collection/preview-collection.component";

import './collections-overview.styles.scss';

const CollectionsOverview = ({collections}) => {
    return (
        <div className='collections-overview'>
            <div className='shop-page'>
                {
                    collections.map(
                        ({id, title, items}) => 
                        <PreviewCollection key={id} title={title} items={items}/>
                    )
                }
            </div>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsPreview
})

export default connect(mapStateToProps)(CollectionsOverview);
