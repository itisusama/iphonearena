const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
   
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="nav.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <!-- Header -->
        <!-- Top Contacts -->
    <div class="top-contacts">
      <p class="animate__animated animate__backInLeft"><i class="fa fa-envelope" aria-hidden="true"></i> example@gmail.com</p>|
      <p class="animate__animated animate__backInLeft animate__delay-1s"><i class="fa fa-phone" aria-hidden="true"></i> +123456789</p>
    </div>
    <!-- Top Contacts -->
        <div class="header container">
            <!-- <img src="assets/website-logo.png" alt="logo"> -->
            <div class="logo"><h4>Iphone Arena</h4></div>
            <!-- Search -->
            <form class="example" action="#">
                <input type="text" placeholder="By device, brand or item" name="search" autocomplete="off">
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>

            <div class="cart">
                <i class="fa fa-shopping-cart" aria-hidden="true"> £0.00</i>
                <button class="btn btn-success">Checkout</button>
            </div>
        </div>

        <!-- preheader -->
        <div class="preheader container">
            <!-- List -->
            <div class="list">
                <ul>
                    <li><a href="contact.html" class="btn">Help </a>|</li>
                    <li><a href="#" type="button" id="myBtn" class="btn" onclick="openFeedbackModal()">Feedback </a>|</li>
                    <li><a href="trackmyorder.html" class="btn">Track My Order </a>|</li>
                    <li><a href="login.html" class="btn">My Account</a></li>
                </ul>
            </div>
            <!-- Selectors -->
            <div class="preheader__selectors">
                <!-- currency -->
                <div class="currency">
                    <select name="currency" id="currency">
                        <option value="GBP">GBP£</option>
                        <option value="EURO">EURO€</option>
                        <option value="USD">USD$</option>
                    </select>
                </div>
            </div>
        </div>
    
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="script/script.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>

`

class Header extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);