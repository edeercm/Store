import React from 'react'
import { Section, Img } from './GlobalStyles'

const SecEight = () => {
  return <>
    <Section>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-center">
            <div className='text-center'>
              <h1> Nike Air Max Pre-Day</h1>
              <h4>TALLAS - 4.5MX- 5MX - 5.5MX - 6MX - 6.5MX</h4>
              <h4>$1,849</h4>
            </div>
            <Img src="https://lustmexico.com/cdn/shop/products/DC4025-001.jpg?v=1656428182&width=900" alt="" />
            <Img src="https://lustmexico.com/cdn/shop/products/DC4025-001-4.jpg?v=1656428225&width=900" alt="" />
            <Img src="https://lustmexico.com/cdn/shop/products/DC4025-001-2.jpg?v=1656428225&width=900" alt="" />
            <Img src="https://lustmexico.com/cdn/shop/products/DC4025-001-3.jpg?v=1656428225&width=900" alt="" />
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default SecEight