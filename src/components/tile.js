import React from 'react';
function Tile({pic, head, paragraph}) {
    if (pic) {
        return (
            <section>
                <img src={pic} alt=""/>
            </section>
        )
    }else {
        return (
            <section>
                <h2>
                    {head}
                </h2>
                {paragraph}
            </section>
        );
    }
}

export default Tile;