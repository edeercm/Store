import React from 'react'
import { Section, Img } from './GlobalStyles'

const SecSix = () => {
  return <>
    <Section>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-center">
            <div className='text-center'>
              <h1>NIKE AIR MAX DAWN</h1>
              <h4>TALLAS - 3MX</h4>
              <h4>$1,719</h4>
            </div>
            <Img src="https://www.laces.mx/cdn/shop/products/DC4068-001_1.jpg?v=1668186411" alt="" />
            <Img src="https://www.laces.mx/cdn/shop/products/DC4068-001_3.jpg?v=1668186412" alt="" />
            <Img src="https://www.laces.mx/cdn/shop/products/DC4068-001_2.jpg?v=1668186412" alt="" />
            <Img src="https://www.laces.mx/cdn/shop/products/DC4068-001_4.jpg?v=1668186410" alt="" />
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default SecSix