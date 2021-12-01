import React from "react";
import CollectionItem from "../preview-collection-item/preview-collection-item.component";

import './preview-collection.styles.scss';

const PreviewCollection = ({title, items}) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items
                    .filter( (item, idx) => idx < 4)
                    .map(
                    ({id, ...otherProps}) => (
                        <CollectionItem key={id} {...otherProps} />
                    ))}
            </div>
        </div>
    )
}

export default PreviewCollection;