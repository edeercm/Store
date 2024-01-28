import React from 'react'
import { Section, Img } from './GlobalStyles'

const SecEleven = () => {
  return <>
    <Section>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-center">
            <div className='text-center'>
              <h1>Nike Blazer Mid </h1>
              <h4>TALLAS - 3.5MX - 4.5MX - 5MX</h4>
              <h4>$1,549</h4>
            </div>
            <Img src="https://lustmexico.com/cdn/shop/products/DM6176-393_1.jpg?v=1631809250&width=900" alt="" />
            <Img src="https://lustmexico.com/cdn/shop/products/DM6176-393_5.jpg?v=1631809249&width=900" alt="" />
            <Img src="https://lustmexico.com/cdn/shop/products/DM6176-393_3.jpg?v=1631809250&width=900" alt="" />
            <Img src="https://lustmexico.com/cdn/shop/products/DM6176-393_2.jpg?v=1631809251&width=900" alt="" />
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default SecEleven