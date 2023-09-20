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
                <div class="h3 text-primary text-uppercase"> contact information </div>
                <div >
              <p class="  gx-3"> 
              
              <p>Anuvuti Prakshan<br/>
An International Publishing House<br/>
Selling books in both India & Bangladesh</p>
              
               <strong> Address  </strong>
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

              
               
                
               




                </div>
                <div class="col gy-3 gx-3 d-flex justify-content-center my-lg-5">
                    <a href="https://www.facebook.com/anuvutiprakashanofficialfbpage" class="link-primary display-5 mx-5"> <i class="small bi-facebook "></i> </a>
                    <a href="https://wa.link/552cun" class="link-success display-5 mx-5"><i class="small bi-whatsapp "></i></a>
                    <a href="https://www.amazon.in/s?me=A2BQBJ9ICYUG99&marketplaceID=A21TJRUUN4KGV" class="link-danger mx-5" >
                        {/* <img src="images/amazon.png" alt="" className='icon_size' />  */}
                        <svg xmlns="http://www.w3.org/2000/svg" className='small icon mt-md-2' x="0px" y="0px" width="42" height="42" viewBox="0 0 50 50">
<path d="M 25.3125 3 C 19.210938 3 12.492188 5.3125 11.09375 12.8125 C 10.894531 13.613281 11.5 13.992188 12 14.09375 L 18.1875 14.6875 C 18.789063 14.6875 19.207031 14.101563 19.40625 13.5 C 19.90625 10.898438 22.101563 9.59375 24.5 9.59375 C 25.800781 9.59375 27.292969 10.113281 28.09375 11.3125 C 28.992188 12.613281 28.8125 14.40625 28.8125 15.90625 L 28.8125 16.8125 C 25.113281 17.210938 20.3125 17.5 16.8125 19 C 12.8125 20.699219 10 24.207031 10 29.40625 C 10 36.007813 14.199219 39.3125 19.5 39.3125 C 24 39.3125 26.5 38.195313 30 34.59375 C 31.199219 36.292969 31.585938 37.105469 33.6875 38.90625 C 34.1875 39.207031 34.789063 39.085938 35.1875 38.6875 L 35.1875 38.8125 C 36.488281 37.710938 38.792969 35.601563 40.09375 34.5 C 40.59375 34.199219 40.492188 33.5 40.09375 33 C 38.894531 31.398438 37.6875 30.09375 37.6875 27.09375 L 37.6875 17.1875 C 37.6875 12.988281 38.007813 9.085938 34.90625 6.1875 C 32.40625 3.789063 28.414063 3 25.3125 3 Z M 27 22 L 28.6875 22 L 28.6875 23.40625 C 28.6875 25.804688 28.792969 27.894531 27.59375 30.09375 C 26.59375 31.894531 24.988281 33 23.1875 33 C 20.789063 33 19.3125 31.207031 19.3125 28.40625 C 19.3125 23.707031 23 22.300781 27 22 Z M 44.59375 36.59375 C 42.992188 36.59375 41.085938 37 39.6875 38 C 39.289063 38.300781 39.3125 38.6875 39.8125 38.6875 C 41.414063 38.488281 44.988281 38.007813 45.6875 38.90625 C 46.289063 39.707031 45.007813 43.085938 44.40625 44.6875 C 44.207031 45.1875 44.601563 45.300781 45 45 C 47.699219 42.699219 48.40625 38.007813 47.90625 37.40625 C 47.605469 36.90625 46.195313 36.59375 44.59375 36.59375 Z M 2.1875 37.5 C 1.886719 37.5 1.695313 38.011719 2.09375 38.3125 C 8.09375 43.710938 16.007813 47 24.90625 47 C 31.207031 47 38.492188 45.011719 43.59375 41.3125 C 44.394531 40.710938 43.707031 39.695313 42.90625 40.09375 C 37.207031 42.492188 31.101563 43.6875 25.5 43.6875 C 17.199219 43.6875 9.1875 41.386719 2.6875 37.6875 C 2.488281 37.488281 2.289063 37.5 2.1875 37.5 Z"></path>
</svg>
                        </a></div>
                    <div class="d-flex justify-content-center me-5">
                            <i class="bi bi-c-circle"></i> <p><em> 2023 Anuvuti Prakashan. All Rights Reserved</em> ,</p>
                            
                    </div>
                    <div class="d-flex justify-content-center me-5">
                                    <p>Developed and maintained  by <em><strong> Sourin Saha and Mainak Majumder </strong> </em></p>
                            
                     </div>
                 </div>

            </footer>
         </div>
    </>
  )
}

export default Footer
