import React from 'react'
import {Container , Row ,Col } from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link'
const Home = () => {
  return (
<>
<section className="bannar">
<Container>
<Row>
<Col md={7} sm={12} lg={8} className="bannartext wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s" >
<p>WEB DESIGN  // WEBFLOW DEVELOPMENT // SEO </p>
<h2>Turn your website into a customer-acquisition engine. </h2>
<h5>We build marketing websites that help you sell on autopilot.</h5>
<HashLink to="/#contact"><button  className="but1" >Let's talk</button></HashLink>
</Col>


<Col md={5} sm={12} lg={4} className="bannarimgs wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s" >
<div>
<img src="1_SNUFXbMYSOArQbA-Iwi-jA.png" className='img1' />
</div>
</Col>

</Row>
</Container>




<Container>
<Row>
<Col md={7} sm={12} lg={8} className="bannartext wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s" >
<p>WEB DESIGN  // WEBFLOW DEVELOPMENT // SEO </p>
<h2>Turn your website into a customer-acquisition engine. </h2>
<h5>We build marketing websites that help you sell on autopilot.</h5>
<HashLink to="/#contact"><button  className="but1" >Let's talk</button></HashLink>
</Col>


<Col md={5} sm={12} lg={4} className="bannarimgs wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s" >
<div>
<img src="original-8768421a43b66013eeb0c7d00846bf75.jpg" className='img1' />
</div>
</Col>

</Row>
</Container>



</section>








</>
  )
}

export default Home
