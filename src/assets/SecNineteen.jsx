import React from 'react'
import { Section, Img } from './GlobalStyles'

const SecNineteen = () => {
  return <>
    <Section>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-center">
            <div className='text-center'>
              <h1>NIKE AIR MAX 270</h1>
              <h4>TALLAS - 6.5MX</h4>
              <h4>$2,199</h4>
            </div>
            <Img src="https://www.laces.mx/cdn/shop/products/DX3311-100_1.jpg?v=1658958657" alt="" />
            <Img src="https://www.laces.mx/cdn/shop/products/DX3311-100_3.jpg?v=1658958659" alt="" />
            <Img src="https://www.laces.mx/cdn/shop/products/DX3311-100_2.jpg?v=1658958659" alt="" />
            <Img src="https://www.laces.mx/cdn/shop/products/DX3311-100_4.jpg?v=1658958657" alt="" />
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default SecNineteen