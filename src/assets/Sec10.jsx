import React from 'react'
import { Section, Img } from './GlobalStyles'

const SecTen = () => {
  return <>
    <Section>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-center">
            <div className='text-center'>
              <h1>Nike Air Max 90</h1>
              <h4>TALLAS - 5.5MX</h4>
              <h4>$1,679</h4>
            </div>
            <Img src="https://lustmexico.com/cdn/shop/products/DJ5415-400_1.jpg?v=1651849729&width=900" alt="" />
            <Img src="https://lustmexico.com/cdn/shop/products/DJ5415-400_7.jpg?v=1654121037&width=900" alt="" />
            <Img src="https://lustmexico.com/cdn/shop/products/DJ5415-400_2.jpg?v=1654121037&width=900" alt="" />
            <Img src="https://lustmexico.com/cdn/shop/products/DJ5415-400_6.jpg?v=1651849729&width=900" alt="" />
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default SecTen