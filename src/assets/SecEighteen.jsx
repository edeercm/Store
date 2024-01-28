import React from 'react'
import { Section, Img } from './GlobalStyles'

const SecEighteen = () => {
  return <>
    <Section>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-center">
            <div className='text-center'>
              <h1>NIKE AIR MAX SOLO</h1>
              <h4>TALLAS - 5MX - 5.5MX - 6MX - 6.5MX - 7MX</h4>
              <h4>$2,099</h4>
            </div>
            <Img src="https://www.laces.mx/cdn/shop/files/DX3666-001_1.jpg?v=1690411430" alt="" />
            <Img src="https://www.laces.mx/cdn/shop/files/DX3666-001_2.jpg?v=1690411431" alt="" />
            <Img src="https://www.laces.mx/cdn/shop/files/DX3666-001_3.jpg?v=1690411431" alt="" />
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default SecEighteen