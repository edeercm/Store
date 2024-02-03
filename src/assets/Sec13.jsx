import React from 'react'
import { Section, Img } from './GlobalStyles'

const SecThirteen = () => {
  return <>
    <Section>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-center">
            <div className='text-center'>
              <h1>NIKE E-SERIES 1.0</h1>
              <h4>TALLAS - 4MX - 5MX - 5.5MX</h4>
              <h4>$1,599</h4>
            </div>
            <Img src="https://www.laces.mx/cdn/shop/products/DR5670-001_1.jpg?v=1676701154" alt="" />
            <Img src="https://www.laces.mx/cdn/shop/products/DR5670-001_2.jpg?v=1676701154" alt="" />
            <Img src="https://www.laces.mx/cdn/shop/products/DR5670-001_3.jpg?v=1676701154" alt="" />
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default SecThirteen