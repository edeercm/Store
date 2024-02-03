import React from 'react'
import { Section, Img } from './GlobalStyles'

const SecTwelve = () => {
  return <>
    <Section>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-center">
            <div className='text-center'>
              <h1>NIKE CRATER IMPACT</h1>
              <h4>TALLAS - 5MX - 8MX</h4>
              <h4>$1,549</h4>
            </div>
            <Img src="https://www.laces.mx/cdn/shop/products/DJ6308-004_1.jpg?v=1658957563" alt="" />
            <Img src="https://www.laces.mx/cdn/shop/products/DJ6308-004_2.jpg?v=1658957563" alt="" />
            <Img src="https://www.laces.mx/cdn/shop/products/DJ6308-004_3.jpg?v=1658957563" alt="" />
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default SecTwelve