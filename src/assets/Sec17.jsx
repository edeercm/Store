import React from 'react'
import { Section, Img } from './GlobalStyles'

const SecSeventeen = () => {
  return <>
    <Section>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-center">
            <div className='text-center'>
              <h1>NIKE E-SERIES 1.0</h1>
              <h4>TALLAS - 5MX - 5.5MX - 6MX - 6.5MX</h4>
              <h4>$1,849</h4>
            </div>
            <Img src="https://www.laces.mx/cdn/shop/files/DR5670-013_1.jpg?v=1690411232" alt="" />
            <Img src="https://www.laces.mx/cdn/shop/files/DR5670-013_2.jpg?v=1690411233" alt="" />
            <Img src="https://www.laces.mx/cdn/shop/files/DR5670-013_3.jpg?v=1690411232" alt="" />
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default SecSeventeen