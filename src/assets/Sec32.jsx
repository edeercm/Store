import React from 'react'
import { Section, Img } from './GlobalStyles'

const Sec32 = () => {
  return <>
    <Section>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-center">
            <div className='text-center'>
              <h1>ADIDAS ADIZERO</h1>
              <h4>TALLAS - 4MX - 4.5MX - 5MX - 5.5MX</h4>
              <h4>$1,199</h4>
            </div>
            <Img src="https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dw64c33af7/images/43431655/AZUL/large/43431656_x1.jpg?sw=686&sh=785" alt="" />
            <Img src="https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dwf06048a6/images/43431655/AZUL/large/43431656_x2.jpg?sw=686&sh=785" alt="" />
            <Img src="https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dw14cdfd27/images/43431655/AZUL/large/43431656_x5.jpg?sw=686&sh=785" alt="" />
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default Sec32