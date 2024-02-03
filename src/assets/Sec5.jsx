import React from 'react'
import { Section, Img } from './GlobalStyles'

const SecFive = () => {
  return <>
    <Section>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-center">
            <div className='text-center'>
              <h1>NIKE AIR MAX DAWN</h1>
              <h4>TALLAS - 3.5MX - 4MX - 5MX - 5.5MX</h4>
              <h4>$1,719</h4>
            </div>
            <Img src="https://www.laces.mx/cdn/shop/products/DM8262-101_1.jpg?v=1658959515" alt="" />
            <Img src="https://www.laces.mx/cdn/shop/products/DM8262-101_3.jpg?v=1658959518" alt="" />
            <Img src="https://www.laces.mx/cdn/shop/products/DM8262-101_2.jpg?v=1658959518" alt="" />
            <Img src="https://www.laces.mx/cdn/shop/products/DM8262-101_4.jpg?v=1658959515" alt="" />
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default SecFive