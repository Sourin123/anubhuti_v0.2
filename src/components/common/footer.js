import React from 'react'

const Footer = () => {
  return (
    <>
         <div className='container'>
            <footer className='py-5'>
                <div className='row'>
                <div class="col-6 col-md-2 mb-3">
                    <h5>Quick links</h5>
                    <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Home</a></li>
                            <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Request a Book</a></li>
                            <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">T-Shirt</a></li>
                            <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">FAQs</a></li>
                            <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Crafts</a></li>
                    </ul>
                </div>

                <div class="col-6 col-md-2 mb-3">
                    <h5>Company</h5>
                    <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">About us</a></li>
                            <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Contact Us</a></li>
                            <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Terms and Conditions</a></li>
                            <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Privacy Policy</a></li>
                    
                    </ul>
                </div>

                <div class="col-6 col-md-2 mb-3">
                    <h5>Books</h5>
                    <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Academic Books </a></li>
                            <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Bengali Books</a></li>
                            <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">English Books</a></li>
                    
                    </ul>
                </div>

                <div class="col-md-5 offset-md-1 mb-3">
                <div class="h3 text-primary "> contact information </div>
                <div >
              <p class=" gx-6"> <strong> Address  </strong> <br/>
              <br/> <strong>Regd. Office: </strong> Panagarh, Paschim Bardhaman, Pin - 713148 <br/>
              <strong>Executive Office: </strong>Old Kanksa Road, Office Para, Panagarh Bazar, Paschim Bardhaman - 713148<br/>
              Monday—Friday: <strong>9.00 AM to 4.00 PM</strong> <br/>
              Saturday & Sunday: <strong>11.00 AM to 1.00 PM</strong> <br/>
              <strong>Email Us : </strong>
              anuvutiprakashan@gmail.com <br/>
              <strong>Call Us : </strong>
              +91 93826 44083
              </p>
              </div>

              <div class="col" >
                <div class="col gy-3 gx-3 d-flex justify-content-sm-evenly">
                    <a href="https://www.facebook.com/anuvutiprakashanofficialfbpage" class="link-primary display-5"> <i class="small bi-facebook "></i> </a>
                    <a href="https://wa.link/552cun" class="link-success display-5"><i class="small bi-whatsapp"></i></a>
                    <a href="https://www.amazon.in/s?me=A2BQBJ9ICYUG99&marketplaceID=A21TJRUUN4KGV" class="link-danger" ><img src="images/amazon.png" alt="" className='icon_size' /> </a></div>
                
                </div>




                </div>
                    <div class="d-flex justify-content-center me-5">
                            <i class="bi bi-c-circle"></i> <p><em> 2023 Anuvuti Prakashan. All Rights Reserved</em> ,</p>
                            
                    </div>
                    <div class="d-flex justify-content-center me-5">
                                    <p>Developed and maintained  by <em><strong> Sourin Saha and Mainak Majunder </strong> </em></p>
                            
                     </div>
                 </div>

            </footer>
         </div>
    </>
  )
}

export default Footer
