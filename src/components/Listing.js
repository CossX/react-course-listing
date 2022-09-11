import React from "react";
import PropTypes from "prop-types";
import Item from "./Item.js";

export default function Listing({ items }) {
    return (
        <div className="item-list">
            {items.map((item) => <Item item={item} key={item.listing_id}/>)}
        </div>
    )
}
Listing.defaultProps = {
    items: [],
};

Listing.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
};