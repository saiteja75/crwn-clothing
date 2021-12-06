import { createSelector } from "reselect";


const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);

export const selectCollectionsPreview = createSelector(
    [selectCollections],
    (collections) => Object.keys(collections).map((item) => collections[item])
)

export const selectCollection =  collectionUrlParam => {
    return createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    )
};