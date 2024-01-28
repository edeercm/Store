import React from 'react'
import { Section, Img } from './GlobalStyles'

const Sec21 = () => {
  return <>
    <Section>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-center">
            <div className='text-center'>
              <h1>NIKE AIR MAX 90</h1>
              <h4>TALLAS - 3MX - 4MX - 4.5MX</h4>
              <h4>$2,099</h4>
            </div>
            <Img src="https://www.laces.mx/cdn/shop/files/DX0115-101_1.jpg?v=1687497713" alt="" />
            <Img src="https://www.laces.mx/cdn/shop/files/DX0115-101_3.jpg?v=1687497714" alt="" />
            <Img src="https://www.laces.mx/cdn/shop/files/DX0115-101_2.jpg?v=1687497714" alt="" />
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default Sec21