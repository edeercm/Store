import React from 'react'
import { Section, Img } from './GlobalStyles'

const SecSixteen = () => {
  return <>
    <Section>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-center">
            <div className='text-center'>
              <h1>NIKE AIR MAX DAWN</h1>
              <h4>TALLAS - 6MX - 6.5MX - 7MX</h4>
              <h4>$1,749</h4>
            </div>
            <Img src="https://www.laces.mx/cdn/shop/products/DQ3991-100Mesadetrabajo1.jpg?v=1671475605" alt="" />
            <Img src="https://www.laces.mx/cdn/shop/products/DQ3991-100Mesadetrabajo3.jpg?v=1671475606" alt="" />
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default SecSixteen