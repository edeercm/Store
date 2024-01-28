import React from 'react'
import { Section, Img } from './GlobalStyles'

const SecTwo = () => {
  return <>
    <Section>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-center">
            <div className='text-center'>
              <h1>Nike Fontanka Waffle</h1>
              <h4>TALLAS - 6MX - 7MX - 8MX</h4>
              <h4>$1,419</h4>
            </div>
            <Img src="https://lustmexico.com/cdn/shop/products/DC3579-100_1.jpg?v=1651845660&width=900" alt="" />
            <Img src="https://lustmexico.com/cdn/shop/products/DC3579-100_7.jpg?v=1651845697&width=900" alt="" />
            <Img src="https://lustmexico.com/cdn/shop/products/DC3579-100_2.jpg?v=1651845697&width=900" alt="" />
            <Img src="https://lustmexico.com/cdn/shop/products/DC3579-100_4.jpg?v=1651845660&width=900" alt="" />
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default SecTwo