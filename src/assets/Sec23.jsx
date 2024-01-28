import React from 'react'
import { Section, Img } from './GlobalStyles'

const Sec23 = () => {
  return <>
    <Section>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-center">
            <div className='text-center'>
              <h1>SKECHERS</h1>
              <h4>TALLAS - 6.5MX - 7MX - 7.5MX</h4>
              <h4>$899</h4>
            </div>
            <Img src="https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dwc7627274/images/43194910/ROJO/large/43194911_x1.jpg?sw=2200&sh=2500" alt="" />
            <Img src="https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dwb1659278/images/43194910/ROJO/large/43194911_x2.jpg?sw=686&sh=785" alt="" />
            <Img src="https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dwc28fd3f9/images/43194910/ROJO/large/43194911_x4.jpg?sw=686&sh=785" alt="" />
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default Sec23