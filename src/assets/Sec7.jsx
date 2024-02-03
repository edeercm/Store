import React from 'react'
import { Section, Img } from './GlobalStyles'

const SecSeven = () => {
  return <>
    <Section>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-center">
            <div className='text-center'>
              <h1>NIKE AIR MAX 2021</h1>
              <h4>TALLAS - 5.5MX - 6MX - 6.5MX - 7MX</h4>
              <h4>$1,899</h4>
            </div>
            <Img src="https://www.laces.mx/cdn/shop/products/DA1923-600_1.jpg?v=1645715402" alt="" />
            <Img src="https://www.laces.mx/cdn/shop/products/DA1923-600_3.jpg?v=1645715404" alt="" />
            <Img src="https://www.laces.mx/cdn/shop/products/DA1923-600_4.jpg?v=1645715407" alt="" />
            <Img src="https://www.laces.mx/cdn/shop/products/DA1923-600_2.jpg?v=1645715409" alt="" />
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default SecSeven