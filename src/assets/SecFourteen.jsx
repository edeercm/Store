import React from 'react'
import { Section, Img } from './GlobalStyles'

const SecFourteen = () => {
  return <>
    <Section>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-center">
            <div className='text-center'>
              <h1>NIKE E-SERIES 1.0</h1>
              <h4>TALLAS - 5MX - 6MX - 6.5MX - 7MX</h4>
              <h4>$1,599</h4>
            </div>
            <Img src="https://www.laces.mx/cdn/shop/files/DR5670-300_1.jpg?v=1687495813" alt="" />
            <Img src="https://www.laces.mx/cdn/shop/files/DR5670-300_3.jpg?v=1687495815" alt="" />
            <Img src="https://www.laces.mx/cdn/shop/files/DR5670-300_2.jpg?v=1687495815" alt="" />
            <Img src="https://www.laces.mx/cdn/shop/files/DR5670-300_4.jpg?v=1687495812" alt="" />
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default SecFourteen