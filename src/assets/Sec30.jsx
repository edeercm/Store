import React from 'react'
import { Section, Img } from './GlobalStyles'

const Sec30 = () => {
  return <>
    <Section>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-center">
            <div className='text-center'>
              <h1>THE NORTH FACE</h1>
              <h4>TALLAS - 6MX - 7MX</h4>
              <h4>$1,799</h4>
            </div>
            <Img src="https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dwb8c303ef/images/43537390/MULTICOLOR/large/43537391_x1.jpg?sw=686&sh=785" alt="" />
            <Img src="https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dwed01f11a/images/43537390/MULTICOLOR/large/43537391_x2.jpg?sw=686&sh=785" alt="" />
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default Sec30