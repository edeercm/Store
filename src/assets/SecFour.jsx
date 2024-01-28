import React from 'react'
import { Section, Img } from './GlobalStyles'

const SecFour = () => {
  return <>
    <Section>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-center">
            <div className='text-center'>
              <h1>NIKE AIR HUARACHE </h1>
              <h4>TALLAS - 3.5MX - 4.5MX - 5MX</h4>
              <h4>$1,899</h4>
            </div>
            <Img src="https://lustmexico.com/cdn/shop/products/DV6017-600_1.jpg?v=1673463081&width=900" alt="" />
            <Img src="https://lustmexico.com/cdn/shop/products/DV6017-600_6.jpg?v=1673463081&width=900" alt="" />
            <Img src="https://lustmexico.com/cdn/shop/products/DV6017-600_2.jpg?v=1673463081&width=900" alt="" />
            <Img src="https://lustmexico.com/cdn/shop/products/DV6017-600_3.jpg?v=1673463081&width=900" alt="" />
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default SecFour