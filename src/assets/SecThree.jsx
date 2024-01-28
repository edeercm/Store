import React from 'react'
import { Section, Img } from './GlobalStyles'

const SecThree = () => {
  return <>
    <Section>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-center">
            <div className='text-center'>
              <h1>Nike Fontanka Waffle</h1>
              <h4>TALLAS - 4MX - 4.5MX - 5MX - 5.5MX</h4>
              <h4>$1,499</h4>
            </div>
            <Img src="https://lustmexico.com/cdn/shop/products/DC3579006_1.jpg?v=1665845939&width=900" alt="" />
            <Img src="https://lustmexico.com/cdn/shop/products/DC3579006_7.jpg?v=1665845940&width=900" alt="" />
            <Img src="https://lustmexico.com/cdn/shop/products/DC3579006_3.jpg?v=1666021313&width=900" alt="" />
            <Img src="https://lustmexico.com/cdn/shop/products/DC3579006_4.jpg?v=1666022982&width=900" alt="" />
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default SecThree