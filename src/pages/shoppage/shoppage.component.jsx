import React from "react";
import { connect } from "react-redux";
import './shoppage.styles.scss';
import PreviewCollection from "../../components/preview-collection/preview-collection.component";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/collections/collections.selectors";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collections/collections.component";

class ShopPage extends React.Component {

    render() {
        return (
            <div className='shop-page'>
                <Route exact path={`${this.props.match.path}`} component={CollectionsOverview}/>
                <Route exact path={`${this.props.match.path}/:categoryId`} component={CollectionPage}/>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    collections:selectCollections
})
export default connect(mapStateToProps)(ShopPage);