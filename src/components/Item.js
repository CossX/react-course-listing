import React from "react";
import PropTypes from "prop-types";

export default function Item({ item }) {
    if (!item.title && !item.price) return null;

    let title = item.title && item.title.length > 50 ? `${item.title.substring(0, 50)}...` : item.title;
    let MainImage = item.MainImage && item.MainImage.url_570xN;

    let price;
    if (item.currency_code === "USD") {
        price = `$${item.price}`;
    } else if (item.currency_code === "EUR") {
        price = `€${item.price}`;
    } else {
        price = `${item.price} ${item.currency_code}`;
    }

    let quantityStyle = "level-medium";
    if (item.quantity <= 10) {
        quantityStyle = "level-low";
    } else if (item.quantity > 20) {
        quantityStyle = "level-high";
    }

    return (
        <div className="item">
            <div className="item-image">
                <a href={item.url}>
                    <img src={MainImage} />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{title}</p>
                <p className="item-price">{price}</p>
                <p className={`item-quantity ${quantityStyle}`}>{`${item.quantity} left`}</p>
            </div>
        </div>
    );
}

Item.propTypes = {
    item: PropTypes.object,
};