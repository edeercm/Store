import React from 'react'
import { Section, Img } from './GlobalStyles'

const SecNine = () => {
  return <>
    <Section>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-center">
            <div className='text-center'>
              <h1> Nike Air Max Pre-Day</h1>
              <h4>TALLAS - 5MX - 6.5MX - 7MX</h4>
              <h4>$1,799</h4>
            </div>
            <Img src="https://lustmexico.com/cdn/shop/products/DC4025500_1.jpg?v=1642262431&width=900" alt="" />
            <Img src="https://lustmexico.com/cdn/shop/products/DC4025500_5.jpg?v=1642262431&width=900" alt="" />
            <Img src="https://lustmexico.com/cdn/shop/products/DC4025500_2.jpg?v=1642262431&width=900" alt="" />
            <Img src="https://lustmexico.com/cdn/shop/products/DC4025500_4.jpg?v=1642262431&width=900" alt="" />
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default SecNine