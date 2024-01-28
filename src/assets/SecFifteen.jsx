import React from 'react'
import { Section, Img } from './GlobalStyles'

const SecFifteen = () => {
  return <>
    <Section>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-center">
            <div className='text-center'>
              <h1>NIKE AIR PRESTO</h1>
              <h4>TALLAS - 6MX</h4>
              <h4>$1,599</h4>
            </div>
            <Img src="https://www.laces.mx/cdn/shop/products/CT3550-003_1.jpg?v=1668201958" alt="" />
            <Img src="https://www.laces.mx/cdn/shop/products/CT3550-003_3.jpg?v=1668201959" alt="" />
            <Img src="https://www.laces.mx/cdn/shop/products/CT3550-003_2.jpg?v=1668201959" alt="" />
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default SecFifteen