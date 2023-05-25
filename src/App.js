import React from 'react';
import './App.css';
import Button from "./components/button";
import Product from "./components/product";
import imageOne from "./assets/bag_1.png"
import imageTwo from "./assets/bag_2.png"
import imageThree from "./assets/bag_3.png"
import imageFour from "./assets/bag_4.png"
import brand from "./assets/brand.png"
import story from "./assets/our_story.png"
import Tile from "./components/tile";

function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
          <nav>
              <Button
                  buttonClass="rounder"
                  text="to the collection"
              />
              <Button
                  text="shop all bags"
              />
              <Button
                  text="pre-orders"
                  useCase="on"
              />
          </nav>
          <main>
              <Product
                  tags="Best seller"
                  pic={imageOne}
                  picAlt="The handy bag"
                  name="The handy bag"
                  price="400,-"
              />
              <Product
                  tags="Best seller"
                  pic={imageTwo}
                  picAlt="The stylish bag"
                  name="The stylish bag"
                  price="250,-"
              />
              <Product
                  tags="Best seller"
                  pic={imageThree}
                  picAlt="The simple bag"
                  name="The simple bag"
                  price="300,-"
              />
              <Product
                  tags="Best seller"
                  pic={imageFour}
                  picAlt="The trendy bag"
                  name="The trendy bag"
                  price="150,-"
              />

          </main>
          <footer>
              <Tile
                  pic={brand}
              />
              <Tile
                  head="the brand"
                  paragraph={[
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolores non pariatur sit? Fugiat, ipsa.</p>,
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolores harum maxime!
                      </p>
                ]}
              />
              <Tile
                  head="our story"
                  paragraph={<p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus neque nesciunt ratione sapiente veniam. Aliquam dicta distinctio inventore minus omnis!
                  </p>}
              />
              <Tile
                  pic={story}
              />
          </footer>
      </>
  );
}

export default App;



