const navigationTemplate = document.createElement('template');
navigationTemplate.innerHTML = `
   
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="nav.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <div class="container-fluid px-0 py-0">
          <nav>
            <div class="wrapper">
              <input type="radio" name="slider" id="menu-btn">
              <input type="radio" name="slider" id="close-btn">
              <ul class="nav-links" style="margin-top: 10px;">
                <label for="close-btn" class="btn close-btn"><i class="fa fa-times" aria-hidden="true"></i></label>
                <li><a href="index.html"><b>Home</b></a></li>
                <!-- <li>
                  <a href="item1.html" class="desktop-item">Screen Protectors</a>
                  <input type="checkbox" id="showDrop">
                  <label for="showDrop" class="mobile-item">Screen Protector</label>
                  <ul class="drop-menu">
                    <li><a href="item1.html">Tempered Glass</a></li>
                    <li><a href="item1.html">Pet Films</a></li>
                    <li><a href="item1.html">Privacy Filters</a></li>
                  </ul>
                </li> -->
                <!-- 1 -->
                <li>
                  <a href="item2.html" class="desktop-item">Cases</a>
                  <input type="checkbox" id="showMega">
                  <label for="showMega" class="mobile-item">Phone Cases</label>
                  <div class="mega-box">
                    <div class="content">
                      <div class="row">
                        <h4>Samsung Cases</h4>
                        
                        <ul class="mega-links">
                          <li><a href="item2.html">Galaxy S23 FE</a></li>
                          <li><a href="item2.html">Galaxy S23 Ultra</a></li>
                          <li><a href="item2.html">Galaxy S23 Plus</a></li>
                          <li><a href="item2.html">Galaxy S23</a></li>
                          <li><a href="item2.html">Galaxy Z Flip5</a></li>
                          <li><a href="item2.html">Galaxy Z Flip5</a></li>
                          <li><a href="item2.html">Galaxy Tab S9 Ultra</a></li>
                          <li><a href="item2.html">Galaxy Tab S9</a></li>
                          <li><a href="item2.html"><b>Shop all Samsung Cases</b></a></li>
                          <br>
                        </ul>
                        <!-- another -->
                        <h4>Google Pixel Cases</h4>
                        
                        <ul class="mega-links">
                          <li><a href="item2.html">Pixel 8</a></li>
                          <li><a href="item2.html">Pixel 8Pro</a></li>
                          <li><a href="item2.html">Pixel Fold</a></li>
                          <li><a href="item2.html">Galaxy S23</a></li>
                          <li><a href="item2.html">Pixel 7a</a></li>
                          <li><a href="item2.html">Pixel 7Pro Cases</a></li>
                          <li><a href="item2.html">Pixel 7</a></li>
                          <li><a href="item2.html">Pixel 6a </a></li>
                          <li><a href="item2.html">Pixel 6 Pro</a></li>
                          <li><a href="item2.html"><b>Shop all Google Pixel Cases</b></a></li>
                        </ul>
                      </div>
                      <div class="row">
                        <h4>Samsung A Range Cases</h4>
                        
                        <ul class="mega-links">
                          <li><a href="item2.html">Galaxy A14</a></li>
                          <li><a href="item2.html">Galaxy A54 5G</a></li>
                          <li><a href="item2.html">Galaxy A34 5G</a></li>
                          <li><a href="item2.html">Galaxy A33 5G</a></li>
                          <li><a href="item2.html">Galaxy A53 5G</a></li>
                          <li><a href="item2.html">Galaxy A04s</a></li>
                          <li><a href="item2.html">Galaxy A13 5G</a></li>
                          <li><a href="item2.html">Galaxy A52</a></li>
                          <li><a href="item2.html"><b>all Galaxy A-Series</b></a></li>
                          <br>
                        </ul>
                        <!-- another -->
                        <h4>Sony Xperia Cases</h4>
                        
                        <ul class="mega-links">
                          <li><a href="item2.html">Xperia 10 V</a></li>
                          <li><a href="item2.html">Xperia 1 V</a></li>
                          <li><a href="item2.html">Xperia 5 V</a></li>
                          <li><a href="item2.html">Xperia 10 IV</a></li>
                          <li><a href="item2.html">Xperia 1 IV</a></li>
                          <li><a href="item2.html">Xperia 5 IV</a></li>
                          <li><a href="item2.html">Xperia 10 III</a></li>
                          <li><a href="item2.html">Xperia 5 III</a></li>
                          <li><a href="item2.html"><b>Shop all Sony</b></a></li>
                        </ul>
                      </div>
          
                      <div class="row">
                        <h4>Iphone Cases</h4>
                        
                        <ul class="mega-links">
                          <li><a href="item2.html">iPhone 15</a></li>
                          <li><a href="item2.html">iPhone 15 Plus</a></li>
                          <li><a href="item2.html">iPhone 15 Pro</a></li>
                          <li><a href="item2.html">iPhone 15 Pro Max</a></li>
                          <li><a href="item2.html">iPhone 14</a></li>
                          <li><a href="item2.html">iPhone 14 Pro</a></li>
                          <li><a href="item2.html">iPhone 14 ProMax</a></li>
                          <li><a href="item2.html">iPhone SE 2022</a></li>
                          <li><a href="item2.html"><b>Shop all iPhone</b></a></li>
                          <br>
                        </ul>
                        <!-- another -->
                        <h4>MacBook Cases</h4>
                        
                        <ul class="mega-links">
                          <li><a href="item2.html">MacBook Air 15 inch 2023</a></li>
                          <li><a href="item2.html">MacBook Pro 14 inch 2023</a></li>
                          <li><a href="item2.html">MacBook Pro 16 Inch 2023</a></li>
                          <li><a href="item2.html">MacBook Air 13 inch 2022</a></li>
                          <li><a href="item2.html">MacBook Pro 13 inch 2022</a></li>
                          <li><a href="item2.html">MacBook Pro 16 inch 2021</a></li>
                          <li><a href="item2.html">MacBook Pro 14 inch 2021</a></li>
                          <li><a href="item2.html">MacBook Air 13 inch 2020</a></li>
                          <li><a href="item2.html"><b>Shop all MacBook Cases</b></a></li>
                        </ul>
                      </div>
          
                      <div class="row">
                        <h4>iPad Cases</h4>
                        
                        <ul class="mega-links">
                          <li><a href="item2.html">iPad 2022 - 10thGen</a></li>
                          <li><a href="item2.html">iPad Pro 11 2022-4th</a></li>
                          <li><a href="item2.html">iPad Pro 12.9 2022-6th</a></li>
                          <li><a href="item2.html">iPad Air 5 2022-5th</a></li>
                          <li><a href="item2.html">iPad Pro 12.9 2021-5th</a></li>
                          <li><a href="item2.html">iPad Pro 11.0 2021-3rd</a></li>
                          <li><a href="item2.html">iPad Mini 2021-6th</a></li>
                          <li><a href="item2.html">iPad 10.2 2020-8th</a></li>
                          <li><a href="item2.html"><b>Shop all iPad Cases</b></a></li>
                          <br>
                        </ul>
                        <!-- another -->
                        <h4>Cases for popular devices</h4>
                        
                        <ul class="mega-links">
                          <li><a href="item2.html">Kindle Paperwhite 5 Cases</a></li>
                          <li><a href="item2.html">OnePlus 11</a></li>
                          <li><a href="item2.html">Nothing Phone 2</a></li>
                          <li><a href="item2.html">OnePlus Nord CE 2 5G</a></li>
                          <li><a href="item2.html">OnePlus Nord CE 2 Lite</a></li>
                          <li><a href="item2.html">iPhone 8</a></li>
                          <li><a href="item2.html">Samsung Galaxy S22</a></li>
                          <li><a href="item2.html">Samsung Galaxy S22 Plus</a></li>
                          <li><a href="item2.html">Galaxy S21 Ultra</a></li>
                        </ul>
                      </div>
                      
                    </div>
                  </div>
                </li>
                <!-- Screen Protector -->
                <li>
                  <a href="item1.html" class="desktop-item">Screen Protector</a>
                  <input type="checkbox" id="showMegascreen">
                  <label for="showMegascreen" class="mobile-item">Screen Protector</label>
                  <div class="mega-box">
                    <div class="content">
                      <div class="row">
                        <h4>Samsung Screen Protectors</h4>
                        
                        <ul class="mega-links">
                          <li><a href="item1.html">Galaxy S23 FE</a></li>
                          <li><a href="item1.html">Galaxy S23 Ultra </a></li>
                          <li><a href="item1.html">Galaxy S23 Plus </a></li>
                          <li><a href="item1.html">Galaxy S23 </a></li>
                          <li><a href="item1.html">Galaxy Z Flip 5 </a></li>
                          <li><a href="item1.html">Galaxy Z Fold 5 </a></li>
                          <li><a href="item1.html">Galaxy Tab S9 Ultra </a></li>
                          <li><a href="item1.html">Galaxy Tab S9 </a></li>
                          <li><a href="item1.html"><b>Shop all Samsung </b></a></li>                                      
                          <br>
                        </ul>
                        <!-- another -->
                        <h4>Google Pixel Protectors</h4>
                        
                        <ul class="mega-links">
                          <li><a href="item1.html">Pixel 8 </a></li>
                          <li><a href="item1.html">Pixel 8 Pro </a></li>
                          <li><a href="item1.html">Pixel Fold </a></li>
                          <li><a href="item1.html">Pixel 7a </a></li>
                          <li><a href="item1.html">Pixel 7 Pro </a></li>
                          <li><a href="item1.html">Pixel 7 </a></li>
                          <li><a href="item1.html">Pixel 6a </a></li>
                          <li><a href="item1.html">Pixel 6 Pro </a></li>
                          <li><a href="item1.html"><b>all Google Pixel Protectors</b></a></li>
                        </ul>
                      </div>
                      <div class="row">
                        <h4>Samsung A Range Screen Protectors</h4>
                        
                        <ul class="mega-links">
                          <li><a href="item1.html">Galaxy A14 </a></li>
                          <li><a href="item1.html">Galaxy A54 5G </a></li>
                          <li><a href="item1.html">Galaxy A34 5G </a></li>
                          <li><a href="item1.html">Galaxy A73 5G </a></li>
                          <li><a href="item1.html">Galaxy A53 5G </a></li>
                          <li><a href="item1.html">Galaxy A04s </a></li>
                          <li><a href="item1.html">Galaxy A33 5G </a></li>
                          <li><a href="item1.html">Galaxy A52 </a></li>
                          <li><a href="item1.html"><b>Shop all Samsung </b></a></li>                                      
                          <br>
                        </ul>
                        <!-- another -->
                        <h4>Sony Xperia Screen Protectors</h4>
                        
                        <ul class="mega-links">
                          <li><a href="item1.html">Xperia 10 V </a></li>
                          <li><a href="item1.html">Xperia 1 V </a></li>
                          <li><a href="item1.html">Xperia 5 V </a></li>
                          <li><a href="item1.html">Xperia 10 IV </a></li>
                          <li><a href="item1.html">Xperia 1 IV </a></li>
                          <li><a href="item1.html">Xperia 5 IV </a></li>
                          <li><a href="item1.html">Xperia 10 III </a></li>
                          <li><a href="item1.html">Xperia 5 III </a></li>
                          <li><a href="item1.html"><b>Shop all Sony Xperia Screen Protectors</b></a></li>                                      
                        </ul>
                      </div>
          
                      <div class="row">
                        <h4>Iphone Screen Protectors</h4>
                        
                        <ul class="mega-links">
                          <li><a href="item1.html">iPhone 15 </a></li>
                          <li><a href="item1.html">iPhone 15 Plus </a></li>
                          <li><a href="item1.html">iPhone 15 Pro </a></li>
                          <li><a href="item1.html">iPhone 15 Pro Max </a></li>
                          <li><a href="item1.html">iPhone 14 </a></li>
                          <li><a href="item1.html">iPhone 14 Pro </a></li>
                          <li><a href="item1.html">iPhone 14 Pro Max </a></li>
                          <li><a href="item1.html">iPhone SE 2022 </a></li>
                          <li><a href="item1.html"><b>Shop all iPhone Screen Protectors</b></a></li>                                      
                          <br>
                        </ul>
                        <!-- another -->
                        <h4>MacBook Screen Protectors</h4>
                        
                        <ul class="mega-links">
                          <li><a href="item1.html">MacBook Air 15 inch 2023 </a></li>
                          <li><a href="item1.html">MacBook Pro 14 Inch 2023 </a></li>
                          <li><a href="item1.html">MacBook Pro 16 Inch 2023 </a></li>
                          <li><a href="item1.html">MacBook Air 13 inch 2022 </a></li>
                          <li><a href="item1.html">MacBook Pro 13 inch 2022 </a></li>
                          <li><a href="item1.html">MacBook Pro 16 inch 2021 </a></li>
                          <li><a href="item1.html">MacBook Pro 14 inch 2021 </a></li>
                          <li><a href="item1.html">MacBook Air 13 inch 2020 </a></li>
                          <li><a href="item1.html"><b>Shop all MacBook Screen Protectors</b></a></li>                                      
                        </ul>
                      </div>
          
                      <div class="row">
                        <h4>iPad Screen Protectors</h4>
                        
                        <ul class="mega-links">
                          <li><a href="item1.html">iPad 2022 - 10th Gen </a></li>
                          <li><a href="item1.html">iPad Pro 11 2022 - 4th Gen </a></li>
                          <li><a href="item1.html">iPad Pro 12.9 2022 - 6th Gen </a></li>
                          <li><a href="item1.html">iPad Air 5 2022 - 5th Gen </a></li>
                          <li><a href="item1.html">iPad Pro 12.9 2021 - 5th Gen </a></li>
                          <li><a href="item1.html">iPad Pro 11.0 2021 - 3rd Gen </a></li>
                          <li><a href="item1.html">iPad Mini 2021 - 6th Gen </a></li>
                          <li><a href="item1.html">iPad 10.2 2020 - 8th Gen </a></li>
                          <li><a href="item1.html"><b>Shop all iPad Screen Protectors</b></a></li>                                      
                          <br>
                        </ul>
                        <!-- another -->
                        <h4>Screen Protectors for popular devices</h4>
                        
                        <ul class="mega-links">
                          <li><a href="item1.html">Nothing Phone 2 </a></li>
                          <li><a href="item1.html">iPhone XR </a></li>
                          <li><a href="item1.html">iPhone 11 Pro </a></li>
                          <li><a href="item1.html">iPhone 8 </a></li>
                          <li><a href="item1.html">iPhone 7 </a></li>
                          <li><a href="item1.html">Samsung Galaxy S22 </a></li>
                          <li><a href="item1.html">Samsung Galaxy S22 Plus </a></li>
                          <li><a href="item1.html">Xiaomi Mi 11 Ultra </a></li>
                          <li><a href="item1.html">Nokia G20 </a></li>
                        </ul>
                      </div>
                      
                    </div>
                  </div>
                </li>                                
                <!-- 2 -->
                <li>
                  <a href="item3.html" class="desktop-item">Chargers and Cables</a>
                  <input type="checkbox" id="showMega2">
                  <label for="showMega2" class="mobile-item">Chargers and Cables</label>
                  <div class="mega-box">
                    <div class="content">
                      <div class="row">
                        <h4>Mains Chargers</h4>
                        
                        <ul class="mega-links">
                          <li><a href="item3.html">USB Mains Chargers</a></li>
                          <li><a href="item3.html">USB-C Mains Chargers</a></li>
                          <li><a href="item3.html">Charge and Sync Cables</a></li>
                          <li><a href="item3.html">MacBook Chargers</a></li>
                          <li><a href="item3.html">Travel Adapters</a></li>
                          <li><a href="item3.html">EU Mains Chargers</a></li>
                          <li><a href="item3.html">Powerbanks</a></li>
                        </ul>
                      </div>

                      <div class="row">
                        <h4>Car Chargers</h4>
                        
                        <ul class="mega-links">
                          <li><a href="item3.html">Fast Car Chargers</a></li>
                          <li><a href="item3.html">USB Car Chargers</a></li>
                          <li><a href="item3.html">USB-C Car Chargers</a></li>
                          <li><a href="item3.html">Wireless Car Chargers</a></li>
                          <li><a href="item3.html">FM Transmitters</a></li>
                        </ul>
                      </div>
                      
                      <div class="row">
                        <h4>Charging Cables</h4>
                        
                        <ul class="mega-links">
                          <li><a href="item3.html">iPhone Cables</a></li>
                          <li><a href="item3.html">USB-C Cables</a></li>
                          <li><a href="item3.html">USB-C to USB-C Cables</a></li>
                          <li><a href="item3.html">Micro USB Cables</a></li>
                          <li><a href="item3.html">Cable Management</a></li>
                          <li><a href="item3.html">Thunderbolt Cables</a></li>
                        </ul>
                      </div>
          
                    </div>
                  </div>
                </li>
                <!-- 3 -->
                <li>
                  <a href="item4.html" class="desktop-item">Audios</a>
                  <input type="checkbox" id="showMega3">
                  <label for="showMega3" class="mobile-item">Headphones</label>
                  <div class="mega-box">
                    <div class="content">
                      <div class="row">
                        <h4>Headphones</h4>
                        <ul class="mega-links">
                            <li><a href="item4.html">Wired Headphones</a></li>
                            <li><a href="item4.html">Wireless Headphones</a></li>
                            <li><a href="item4.html">True Wireless Earbuds</a></li>
                            <li><a href="item4.html">Headphones for Kids</a></li>
                            <li><a href="item4.html">Gaming Headsets</a></li>
                            <li><a href="item4.html">Sports Headphones</a></li>
                        </ul>
                      </div>
         
                      <div class="row">
                        <h4>Speaker</h4>
                        <ul class="mega-links">
                          <li><a href="item4.html">Wireless</a></li>
                          <li><a href="item4.html">Outdoor</a></li>
                          <li><a href="item4.html">Portable</a></li>
                          <li><a href="item4.html">Smart</a></li>
                          <li><a href="item4.html">Novelty</a></li>
                        </ul>
                      </div>

                      <div class="row">
                        <h4>Car Audio</h4>
                        <ul class="mega-links">
                          <li><a href="item4.html">Handsfree Kits</a></li>
                          <li><a href="item4.html">AUX Cable</a></li>
                          <li><a href="item4.html">Adapters</a></li>
                        </ul>
                      </div>

                      <div class="row">
                        <h4>Audio Accessories</h4>
                        <ul class="mega-links">    
                          <li><a href="item4.html">AirPods Accessories</a></li>
                          <li><a href="item4.html">Microphones</a></li>
                          <li><a href="item4.html">Audio Cables & Adapters</a></li>
                          <li><a href="item4.html">Wireless Audio Adapters</a></li>
                          <li><a href="item4.html">Cable Management</a></li>
                        </ul>
                      </div>

                      <div class="row">
                        <h4>AirPods Accessories</h4>
                        <ul class="mega-links">    
                          <li><a href="item4.html">AirPods Pro 2nd Gen</a></li>
                          <li><a href="item4.html">AirPods Pro 1st Gen</a></li>
                          <li><a href="item4.html">AirPods 3rd Gen</a></li>
                          <li><a href="item4.html">AirPods 2nd Gen</a></li>
                          <li><a href="item4.html">AirPods 1st Gen</a></li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </li>
                <!-- 4 -->
                <li>
                  <a href="item5.html" class="desktop-item">Car Phone Holders</a>
                  <input type="checkbox" id="showMega4">
                  <label for="showMega4" class="mobile-item">Car Phone Holders</label>
                  <div class="mega-box">
                    <div class="content">
                      <div class="row">

                        <h4>Car Phone Holders</h4>
                        <ul class="mega-links">
                          <li><a href="item5.html">Dashboard Car Phone Holders</a></li>
                          <li><a href="item5.html">Air Vent Car Phone Holders</a></li>
                          <li><a href="item5.html">Wireless Charging Car Phone Holders</a></li>
                          <li><a href="item5.html">Windscreen Car Phone Holders</a></li>
                          <li><a href="item5.html">Magnetic Car Phone Holders</a></li>
                          <li><a href="item5.html">MagSafe Car Phone Holders</a></li>
                          <li><a href="item5.html">Tablet Car Phone Holders</a></li>
                          <li><a href="item5.html">CD Slot Car Phone Holders</a></li>
                          <li><a href="item5.html">Headrest Car Phone Holders</a></li>
                          <li><a href="item5.html">Hands-free</a></li>
                        </ul>
                      </div>
         
                      <div class="row">
                        <h4>Trending Phone Holders</h4>
                        <ul class="mega-links">
                          <li><a href="item5.html">⭐️ Olixar Basics TriMount Car Phone Holder</a></li>
                          <li><a href="item5.html">Official Samsung Universal Smartphone Vehicle Dock Mount</a></li>
                          <li><a href="item5.html">Olixar Coloured Adhesive Metal Plates for Magnetic Car Holders</a></li>
                          <li><a href="item5.html">Olixar inVent Gravity Universal Smartphone Car Holder</a></li>
                          <li><a href="item5.html">Olixar inVent Universal Smartphone Magnetic Air Vent Holder</a></li>
                          <li><a href="item5.html">iOttie Auto Sense Qi-Wireless Dash & Windshield Charging Mount</a></li>
                          <li><a href="item5.html">Baseus Osculum Gravity Universal Car Mount</a></li>
                          <li><a href="item5.html">Baseus Smart Solar Powered Wireless Vent Car Phone Mount - Black</a></li>
                          <li><a href="item5.html">Olixar Universal Headrest 7-10 inch Tablet Mount</a></li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </li>
                
              </ul>
              <label for="menu-btn" class="btn menu-btn"><i class="fa fa-bars" aria-hidden="true"></i></label>
            </div>
          </nav>
          </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="script/script.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>

`

class Navigation extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(navigationTemplate.content);
    }
}

customElements.define('navigation-component', Navigation);
