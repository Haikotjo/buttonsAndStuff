import React from 'react';
const euro = '€';
function Product({ tags, pic, picAlt, name, price}) {
    // const imagePath = require(`./assets/${}`)
    return (
        <article>
            <span>
                {tags}
            </span>
            <img src={ pic} alt={picAlt} />
            <p>
                {name}
            </p>
            <h4>
                {euro + price}
            </h4>
        </article>
    );
}

export default Product;