import React from 'react'
import { Section, Img } from './GlobalStyles'

const Sec20 = () => {
  return <>
    <Section>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-center">
            <div className='text-center'>
              <h1>NIKE AIR MAX 90</h1>
              <h4>TALLAS - 3.5MX - 4.5MX - 6MX</h4>
              <h4>$2,099</h4>
            </div>
            <Img src="https://www.laces.mx/cdn/shop/products/DQ0374-100-PHSUH000-1500_1.jpg?v=1673538461" alt="" />
            <Img src="https://www.laces.mx/cdn/shop/products/DQ0374-100-PHSUH000-1500_3.jpg?v=1673538463" alt="" />
            <Img src="https://www.laces.mx/cdn/shop/products/DQ0374-100-PHSUH000-1500_2.jpg?v=1673538463" alt="" />
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default Sec20