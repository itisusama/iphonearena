const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
   
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="nav.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <footer class="container-fluid px-0 bg-light text-dark">
    
      <div class="discount-bar container-fluid px-0">
        <div class="discount-bar-desc">
          <div>
            <h1>10% OFF</h1><br>
            <p>Sign up to our newsletter for access to our exclusive deals and 10% off your first order.</p>
          </div>
          <div>
            <button type="button" class="btn btn-success">SIGN UP</button>
          </div>
        </div>
      </div>

      <br>
      <!-- Accordian -->
      <div class="currency-change container px-4">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                CURRENCY CHANGE
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <option value="GBP">GBP£</option>
                <option value="EURO">EURO€</option>
                <option value="USD">USD$</option>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Accordian -->

      <!-- Footer Blocks -->
      <div class="footer-blocks px-3" style="font-size: 12px;">
        <!-- 1 -->
        <div class="footer-block">
          <div class="payment-method">
            <h2 style="margin: 1rem 0;">Payment options</h2>
            <img src="assets/payment.PNG" alt="payments">
          </div>
          <br>
          <div class="follow-social">
            <h2>Follow Us</h2>
            <a href="#"><i style="font-size: 30px; color: blue;" class="fa fa-facebook-official" aria-hidden="true"></i></a>
            <a href="#"><i style="font-size: 30px; color: red;" class="fa fa-youtube" aria-hidden="true"></i></a>
            <a href="#"><i style="font-size: 30px; color: skyblue;" class="fa fa-twitter-square" aria-hidden="true"></i></a>
            <a href="#"><i style="font-size: 30px; color: grey;" class="fa fa-instagram" aria-hidden="true"></i></a>
          </div>
          <br>
          <div class="app-download">
            <h2>App</h2>
            <a href="#"><i style="font-size: 30px;" class="fa fa-download" aria-hidden="true"></i></a>  Download App
          </div>
        </div>
        <!-- 2 -->
        <div class="footer-block">
          <h2 style="margin: 1rem 0;">Customer Service</h2>
          <ul style="list-style: none;">
              <li><a href="contact.html">Contact Us</a></li>
              <li><a href="termsandconditions.html">Return Policy</a></li>
              <li><a href="contact.html">FAQs</a></li>
          </ul>
          <h2 style="margin: 1rem 0;">Site Information</h2>
          <ul style="list-style: none;">
              <li><a href="#">About Us</a></li>
              <li><a href="termsandconoditions.html">Terms and Conditions</a></li>
              <li><a href="blogs.html">Blog</a></li>
              <li><a href="#">Careers</a></li>
          </ul>
      </div>        
        <!-- 3 -->
        <div class="footer-block">
          <h2 style="margin: 1rem 0;">Popular Accessories</h2>
          <ul style="list-style: none;">
              <li><a href="item2.html">Phone Cases</a></li>
              <li><a href="item4.html">Wireless Earbuds</a></li>
              <li><a href="item4.html">Bluetooth Speakers</a></li>
              <li><a href="item3.html">Charging Cables</a></li>
              <li><a href="item1.html">Screen Protectors</a></li>
          </ul>
      </div>
      
        <!-- 4 -->
        <div class="footer-block">
          <h2 style="margin: 1rem 0;">Popular Brands</h2>
          <ul style="list-style: none;">
              <li><a href="product-categories.html">Apple</a></li>
              <li><a href="product-categories.html">Samsung</a></li>
              <li><a href="product-categories.html">Sony</a></li>
              <li><a href="product-categories.html">Dell</a></li>
              <li><a href="product-categories.html">HP</a></li>
              <li><a href="product-categories.html">Canon</a></li>
              <li><a href="product-categories.html">Logitech</a></li>
              <li><a href="product-categories.html">Bose</a></li>
              <li><a href="product-categories.html">Nikon</a></li>
              <li><a href="product-categories.html">LG</a></li>
              <li><a href="product-categories.html">Microsoft</a></li>
              <li><a href="product-categories.html">Asus</a></li>
              <li><a href="product-categories.html">Lenovo</a></li>
              <li><a style="text-decoration: none; color: black;" href="product-categories.html">View All Brands</a></li>
          </ul>
      </div>
      
      </div>
      <hr>
      <!-- Conditions -->
      <div class="container" style="display: flex; justify-content: space-evenly; margin-bottom: 5px;">
        <a style="text-decoration:none;" href="termsandconditions.html">Terms and Conditions</a>
        <a style="text-decoration:none;" href="blogs.html">Blogs</a>
        <a style="text-decoration:none;" href="dataprivacy.html">Data Privacy</a>
      </div>
      <!-- Conditions -->
      <p style="text-align: center;">&copy; 2023 Copyrights Iphone Arena. All rights reserved</p>
    </footer>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="script/script.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>

`

class Footer extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-component', Footer);