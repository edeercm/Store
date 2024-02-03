import React from 'react'
import { Section, Img } from './GlobalStyles'

const SecOne = () => {
  return <>
    <Section>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-center">
            <div className='text-center'>
              <h1>Nike Fontanka Waffle</h1>
              <h4>TALLAS - 4MX - 4.5MX - 5MX - 5.5MX</h4>
              <h4>$1,419</h4>
            </div>
            <Img src="https://lustmexico.com/cdn/shop/files/DV0769-100_1.jpg?v=1685745351&width=900" alt="" />
            <Img src="https://lustmexico.com/cdn/shop/files/DV0769-100_7.jpg?v=1685745351&width=900" alt="" />
            <Img src="https://lustmexico.com/cdn/shop/files/DV0769-100_2.jpg?v=1685745351&width=900" alt="" />
            <Img src="https://lustmexico.com/cdn/shop/files/DV0769-100_4.jpg?v=1685745351&width=900" alt="" />
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default SecOne