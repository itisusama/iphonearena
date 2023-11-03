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
                <!-- 1 -->
                <li>
                  <a href="item2.html" class="desktop-item">Cases</a>
                  <input type="checkbox" id="showMega">
                  <label for="showMega" class="mobile-item">Phone Cases</label>
                  <div class="mega-box">
                    <div class="content">
                      <div class="row">
                        <a href="device-cases.html">Samsung Cases</a>
                        
                        <ul class="mega-links">
                          <li><a href="device-cases.html">Galaxy S23 FE</a></li>
                          <li><a href="device-cases.html">Galaxy S23 Ultra</a></li>
                          <li><a href="device-cases.html">Galaxy S23 Plus</a></li>
                          <li><a href="device-cases.html">Galaxy S23</a></li>
                          <li><a href="device-cases.html">Galaxy Z Flip5</a></li>
                          <li><a href="device-cases.html">Galaxy Z Flip5</a></li>
                          <li><a href="device-cases.html">Galaxy Tab S9 Ultra</a></li>
                          <li><a href="device-cases.html">Galaxy Tab S9</a></li>
                          <li><a href="device-cases.html"><b>Shop all</b></a></li>
                          <br>
                        </ul>
                        <!-- another -->
                        <a href="device-cases.html">Google Pixel Cases</a>

                        <ul class="mega-links">
                          <li><a href="device-cases.html">Pixel 8</a></li>
                          <li><a href="device-cases.html">Pixel 8Pro</a></li>
                          <li><a href="device-cases.html">Pixel Fold</a></li>
                          <li><a href="device-cases.html">Galaxy S23</a></li>
                          <li><a href="device-cases.html">Pixel 7a</a></li>
                          <li><a href="device-cases.html">Pixel 7Pro Cases</a></li>
                          <li><a href="device-cases.html">Pixel 7</a></li>
                          <li><a href="device-cases.html">Pixel 6a </a></li>
                          <li><a href="device-cases.html">Pixel 6 Pro</a></li>
                          <li><a href="device-cases.html"><b>Shop all</b></a></li>
                        </ul>
                      </div>
                      <div class="row">
                      <a href="device-cases.html">Samsung A-Range Cases</a>
                        
                        <ul class="mega-links">
                          <li><a href="device-cases.html">Galaxy A14</a></li>
                          <li><a href="device-cases.html">Galaxy A54 5G</a></li>
                          <li><a href="device-cases.html">Galaxy A34 5G</a></li>
                          <li><a href="device-cases.html">Galaxy A33 5G</a></li>
                          <li><a href="device-cases.html">Galaxy A53 5G</a></li>
                          <li><a href="device-cases.html">Galaxy A04s</a></li>
                          <li><a href="device-cases.html">Galaxy A13 5G</a></li>
                          <li><a href="device-cases.html">Galaxy A52</a></li>
                          <li><a href="device-cases.html"><b>Shop all</b></a></li>
                          <br>
                        </ul>
                        <!-- another -->
                        <a href="device-cases.html">Sony Xperia Cases</a>

                        <ul class="mega-links">
                          <li><a href="device-cases.html">Xperia 10 V</a></li>
                          <li><a href="device-cases.html">Xperia 1 V</a></li>
                          <li><a href="device-cases.html">Xperia 5 V</a></li>
                          <li><a href="device-cases.html">Xperia 10 IV</a></li>
                          <li><a href="device-cases.html">Xperia 1 IV</a></li>
                          <li><a href="device-cases.html">Xperia 5 IV</a></li>
                          <li><a href="device-cases.html">Xperia 10 III</a></li>
                          <li><a href="device-cases.html">Xperia 5 III</a></li>
                          <li><a href="device-cases.html"><b>Shop all</b></a></li>
                        </ul>
                      </div>
          
                      <div class="row">
                      <a href="device-cases.html">iPhone Cases</a>
                        
                        <ul class="mega-links">
                          <li><a href="device-cases.html">iPhone 15</a></li>
                          <li><a href="device-cases.html">iPhone 15 Plus</a></li>
                          <li><a href="device-cases.html">iPhone 15 Pro</a></li>
                          <li><a href="device-cases.html">iPhone 15 Pro Max</a></li>
                          <li><a href="device-cases.html">iPhone 14</a></li>
                          <li><a href="device-cases.html">iPhone 14 Pro</a></li>
                          <li><a href="device-cases.html">iPhone 14 ProMax</a></li>
                          <li><a href="device-cases.html">iPhone SE 2022</a></li>
                          <li><a href="device-cases.html"><b>Shop all</b></a></li>
                          <br>
                        </ul>
                        <!-- another -->
                        <a href="device-cases.html">MacBook Cases</a>
                        
                        <ul class="mega-links">
                          <li><a href="device-cases.html">MacBook Air 15 inch 2023</a></li>
                          <li><a href="device-cases.html">MacBook Pro 14 inch 2023</a></li>
                          <li><a href="device-cases.html">MacBook Pro 16 Inch 2023</a></li>
                          <li><a href="device-cases.html">MacBook Air 13 inch 2022</a></li>
                          <li><a href="device-cases.html">MacBook Pro 13 inch 2022</a></li>
                          <li><a href="device-cases.html">MacBook Pro 16 inch 2021</a></li>
                          <li><a href="device-cases.html">MacBook Pro 14 inch 2021</a></li>
                          <li><a href="device-cases.html">MacBook Air 13 inch 2020</a></li>
                          <li><a href="device-cases.html"><b>Shop all</b></a></li>
                        </ul>
                      </div>
          
                      <div class="row">
                      <a href="device-cases.html">iPad Cases</a>
                        
                        <ul class="mega-links">
                          <li><a href="device-cases.html">iPad 2022 - 10thGen</a></li>
                          <li><a href="device-cases.html">iPad Pro 11 2022-4th</a></li>
                          <li><a href="device-cases.html">iPad Pro 12.9 2022-6th</a></li>
                          <li><a href="device-cases.html">iPad Air 5 2022-5th</a></li>
                          <li><a href="device-cases.html">iPad Pro 12.9 2021-5th</a></li>
                          <li><a href="device-cases.html">iPad Pro 11.0 2021-3rd</a></li>
                          <li><a href="device-cases.html">iPad Mini 2021-6th</a></li>
                          <li><a href="device-cases.html">iPad 10.2 2020-8th</a></li>
                          <li><a href="device-cases.html"><b>Shop all</b></a></li>
                          <br>
                        </ul>
                        <!-- another -->
                        <a href="device-cases.html">Cases for popular devices</a>
                        
                        <ul class="mega-links">
                          <li><a href="device-cases.html">Kindle Paperwhite 5 Cases</a></li>
                          <li><a href="device-cases.html">OnePlus 11</a></li>
                          <li><a href="device-cases.html">Nothing Phone 2</a></li>
                          <li><a href="device-cases.html">OnePlus Nord CE 2 5G</a></li>
                          <li><a href="device-cases.html">OnePlus Nord CE 2 Lite</a></li>
                          <li><a href="device-cases.html">iPhone 8</a></li>
                          <li><a href="device-cases.html">Samsung Galaxy S22</a></li>
                          <li><a href="device-cases.html">Samsung Galaxy S22 Plus</a></li>
                          <li><a href="device-cases.html">Galaxy S21 Ultra</a></li>
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
                        <a href="device-protectors.html">Samsung Screen Protectors</a>

                        <ul class="mega-links">
                          <li><a href="device-protectors.html">Galaxy S23 FE</a></li>
                          <li><a href="device-protectors.html">Galaxy S23 Ultra </a></li>
                          <li><a href="device-protectors.html">Galaxy S23 Plus </a></li>
                          <li><a href="device-protectors.html">Galaxy S23 </a></li>
                          <li><a href="device-protectors.html">Galaxy Z Flip 5 </a></li>
                          <li><a href="device-protectors.html">Galaxy Z Fold 5 </a></li>
                          <li><a href="device-protectors.html">Galaxy Tab S9 Ultra </a></li>
                          <li><a href="device-protectors.html">Galaxy Tab S9 </a></li>
                          <li><a href="device-protectors.html"><b>Shop all</b></a></li>                                      
                          <br>
                        </ul>
                        <!-- another -->
                        <a href="device-protectors.html">Google Pixel Protectors</a>
                        
                        <ul class="mega-links">
                          <li><a href="device-protectors.html">Pixel 8 </a></li>
                          <li><a href="device-protectors.html">Pixel 8 Pro </a></li>
                          <li><a href="device-protectors.html">Pixel Fold </a></li>
                          <li><a href="device-protectors.html">Pixel 7a </a></li>
                          <li><a href="device-protectors.html">Pixel 7 Pro </a></li>
                          <li><a href="device-protectors.html">Pixel 7 </a></li>
                          <li><a href="device-protectors.html">Pixel 6a </a></li>
                          <li><a href="device-protectors.html">Pixel 6 Pro </a></li>
                          <li><a href="device-protectors.html"><b>Shop all</b></a></li>
                        </ul>
                      </div>
                      <div class="row">
                      <a href="device-protectors.html">Samsung A-Range Cases</a>
                        
                        <ul class="mega-links">
                          <li><a href="device-protectors.html">Galaxy A14 </a></li>
                          <li><a href="device-protectors.html">Galaxy A54 5G </a></li>
                          <li><a href="device-protectors.html">Galaxy A34 5G </a></li>
                          <li><a href="device-protectors.html">Galaxy A73 5G </a></li>
                          <li><a href="device-protectors.html">Galaxy A53 5G </a></li>
                          <li><a href="device-protectors.html">Galaxy A04s </a></li>
                          <li><a href="device-protectors.html">Galaxy A33 5G </a></li>
                          <li><a href="device-protectors.html">Galaxy A52 </a></li>
                          <li><a href="device-protectors.html"><b>Shop all</b></a></li>                                      
                          <br>
                        </ul>
                        <!-- another -->
                        <a href="device-protectors.html">Sony Xperia Protectors</a>
                        
                        <ul class="mega-links">
                          <li><a href="device-protectors.html">Xperia 10 V </a></li>
                          <li><a href="device-protectors.html">Xperia 1 V </a></li>
                          <li><a href="device-protectors.html">Xperia 5 V </a></li>
                          <li><a href="device-protectors.html">Xperia 10 IV </a></li>
                          <li><a href="device-protectors.html">Xperia 1 IV </a></li>
                          <li><a href="device-protectors.html">Xperia 5 IV </a></li>
                          <li><a href="device-protectors.html">Xperia 10 III </a></li>
                          <li><a href="device-protectors.html">Xperia 5 III </a></li>
                          <li><a href="device-protectors.html"><b>Shop all</b></a></li>                                      
                        </ul>
                      </div>
          
                      <div class="row">
                        <a href="device-protectors.html">iPhone Screen Protectors</a>
                        
                        <ul class="mega-links">
                          <li><a href="device-protectors.html">iPhone 15 </a></li>
                          <li><a href="device-protectors.html">iPhone 15 Plus </a></li>
                          <li><a href="device-protectors.html">iPhone 15 Pro </a></li>
                          <li><a href="device-protectors.html">iPhone 15 Pro Max </a></li>
                          <li><a href="device-protectors.html">iPhone 14 </a></li>
                          <li><a href="device-protectors.html">iPhone 14 Pro </a></li>
                          <li><a href="device-protectors.html">iPhone 14 Pro Max </a></li>
                          <li><a href="device-protectors.html">iPhone SE 2022 </a></li>
                          <li><a href="device-protectors.html"><b>Shop all iPhone</b></a></li>                                      
                          <br>
                        </ul>
                        <!-- another -->
                        <a href="device-protectors.html">MacBook Screen Protectors</a>
                        
                        <ul class="mega-links">
                          <li><a href="device-protectors.html">MacBook Air 15 inch 2023 </a></li>
                          <li><a href="device-protectors.html">MacBook Pro 14 Inch 2023 </a></li>
                          <li><a href="device-protectors.html">MacBook Pro 16 Inch 2023 </a></li>
                          <li><a href="device-protectors.html">MacBook Air 13 inch 2022 </a></li>
                          <li><a href="device-protectors.html">MacBook Pro 13 inch 2022 </a></li>
                          <li><a href="device-protectors.html">MacBook Pro 16 inch 2021 </a></li>
                          <li><a href="device-protectors.html">MacBook Pro 14 inch 2021 </a></li>
                          <li><a href="device-protectors.html">MacBook Air 13 inch 2020 </a></li>
                          <li><a href="device-protectors.html"><b>Shop all</b></a></li>                                      
                        </ul>
                      </div>
          
                      <div class="row">
                      <a href="device-protectors.html">iPad Screen Protectors</a>
                        
                        <ul class="mega-links">
                          <li><a href="device-protectors.html">iPad 2022 - 10th Gen </a></li>
                          <li><a href="device-protectors.html">iPad Pro 11 2022 - 4th Gen </a></li>
                          <li><a href="device-protectors.html">iPad Pro 12.9 2022 - 6th Gen </a></li>
                          <li><a href="device-protectors.html">iPad Air 5 2022 - 5th Gen </a></li>
                          <li><a href="device-protectors.html">iPad Pro 12.9 2021 - 5th Gen </a></li>
                          <li><a href="device-protectors.html">iPad Pro 11.0 2021 - 3rd Gen </a></li>
                          <li><a href="device-protectors.html">iPad Mini 2021 - 6th Gen </a></li>
                          <li><a href="device-protectors.html">iPad 10.2 2020 - 8th Gen </a></li>
                          <li><a href="device-protectors.html"><b>Shop all</b></a></li>                                      
                          <br>
                        </ul>
                        <!-- another -->
                        <a href="device-protectors.html">Popular Devices Protectors</a>
                        
                        <ul class="mega-links">
                          <li><a href="device-protectors.html">Nothing Phone 2 </a></li>
                          <li><a href="device-protectors.html">iPhone XR </a></li>
                          <li><a href="device-protectors.html">iPhone 11 Pro </a></li>
                          <li><a href="device-protectors.html">iPhone 8 </a></li>
                          <li><a href="device-protectors.html">iPhone 7 </a></li>
                          <li><a href="device-protectors.html">Samsung Galaxy S22 </a></li>
                          <li><a href="device-protectors.html">Samsung Galaxy S22 Plus </a></li>
                          <li><a href="device-protectors.html">Xiaomi Mi 11 Ultra </a></li>
                          <li><a href="device-protectors.html">Nokia G20 </a></li>
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
                      <a href="device-chargers.html">Mains Chargers</a>
                        
                        <ul class="mega-links">
                          <li><a href="device-chargers.html">USB Mains Chargers</a></li>
                          <li><a href="device-chargers.html">USB-C Mains Chargers</a></li>
                          <li><a href="device-chargers.html">Charge and Sync Cables</a></li>
                          <li><a href="device-chargers.html">MacBook Chargers</a></li>
                          <li><a href="device-chargers.html">Travel Adapters</a></li>
                          <li><a href="device-chargers.html">EU Mains Chargers</a></li>
                          <li><a href="device-chargers.html">Powerbanks</a></li>
                        </ul>
                      </div>

                      <div class="row">
                      <a href="device-chargers.html">Car Chargers</a>
                        
                        <ul class="mega-links">
                          <li><a href="device-chargers.html">Fast Car Chargers</a></li>
                          <li><a href="device-chargers.html">USB Car Chargers</a></li>
                          <li><a href="device-chargers.html">USB-C Car Chargers</a></li>
                          <li><a href="device-chargers.html">Wireless Car Chargers</a></li>
                          <li><a href="device-chargers.html">FM Transmitters</a></li>
                        </ul>
                      </div>
                      
                      <div class="row">
                      <a href="device-chargers.html">Charging Cables</a>
                        
                        <ul class="mega-links">
                          <li><a href="device-chargers.html">iPhone Cables</a></li>
                          <li><a href="device-chargers.html">USB-C Cables</a></li>
                          <li><a href="device-chargers.html">USB-C to USB-C Cables</a></li>
                          <li><a href="device-chargers.html">Micro USB Cables</a></li>
                          <li><a href="device-chargers.html">Cable Management</a></li>
                          <li><a href="device-chargers.html">Thunderbolt Cables</a></li>
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
                        <a href="device-audios.html">Headphones</a>
                        
                        <ul class="mega-links">
                            <li><a href="device-audios.html">Wired Headphones</a></li>
                            <li><a href="device-audios.html">Wireless Headphones</a></li>
                            <li><a href="device-audios.html">True Wireless Earbuds</a></li>
                            <li><a href="device-audios.html">Headphones for Kids</a></li>
                            <li><a href="device-audios.html">Gaming Headsets</a></li>
                            <li><a href="device-audios.html">Sports Headphones</a></li>
                        </ul>
                      </div>
         
                      <div class="row">
                      <a href="device-audios.html">Speakers</a>

                        <ul class="mega-links">
                          <li><a href="device-audios.html">Wireless</a></li>
                          <li><a href="device-audios.html">Outdoor</a></li>
                          <li><a href="device-audios.html">Portable</a></li>
                          <li><a href="device-audios.html">Smart</a></li>
                          <li><a href="device-audios.html">Novelty</a></li>
                        </ul>
                      </div>

                      <div class="row">
                        <a href="device-audios.html">Car Audios</a>

                        <ul class="mega-links">
                          <li><a href="device-audios.html">Handsfree Kits</a></li>
                          <li><a href="device-audios.html">AUX Cable</a></li>
                          <li><a href="device-audios.html">Adapters</a></li>
                        </ul>
                      </div>

                      <div class="row">
                      <a href="device-audios.html">Audio Accessories</a>
                        <ul class="mega-links">    
                          <li><a href="device-audios.html">AirPods Accessories</a></li>
                          <li><a href="device-audios.html">Microphones</a></li>
                          <li><a href="device-audios.html">Audio Cables & Adapters</a></li>
                          <li><a href="device-audios.html">Wireless Audio Adapters</a></li>
                          <li><a href="device-audios.html">Cable Management</a></li>
                        </ul>
                      </div>

                      <div class="row">
                      <a href="device-audios.html">AirPod Accessories</a>
                        <ul class="mega-links">    
                          <li><a href="device-audios.html">AirPods Pro 2nd Gen</a></li>
                          <li><a href="device-audios.html">AirPods Pro 1st Gen</a></li>
                          <li><a href="device-audios.html">AirPods 3rd Gen</a></li>
                          <li><a href="device-audios.html">AirPods 2nd Gen</a></li>
                          <li><a href="device-audios.html">AirPods 1st Gen</a></li>
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
                      <a href="device-carphoneholders.html">Car Phone Holders</a>

                        <ul class="mega-links">
                          <li><a href="device-carphoneholders.html">Car Phone Holders</a></li>
                          <li><a href="device-carphoneholders.html">Air Vent Car Phone Holders</a></li>
                          <li><a href="device-carphoneholders.html">Wireless Charging Car Phone Holders</a></li>
                          <li><a href="device-carphoneholders.html">Windscreen Car Phone Holders</a></li>
                          <li><a href="device-carphoneholders.html">Magnetic Car Phone Holders</a></li>
                          <li><a href="device-carphoneholders.html">MagSafe Car Phone Holders</a></li>
                          <li><a href="device-carphoneholders.html">Tablet Car Phone Holders</a></li>
                          <li><a href="device-carphoneholders.html">CD Slot Car Phone Holders</a></li>
                          <li><a href="device-carphoneholders.html">Headrest Car Phone Holders</a></li>
                        </ul>
                      </div>
         
                      <div class="row">
                      <a href="device-carphoneholders.html">Trending Phone Holders</a>

                        <ul class="mega-links">
                          <li><a href="device-carphoneholders.html">⭐️ Olixar Basics TriMount Car Phone Holder</a></li>
                          <li><a href="device-carphoneholders.html">Official Samsung Universal Smartphone Vehicle Dock Mount</a></li>
                          <li><a href="device-carphoneholders.html">Olixar Coloured Adhesive Metal Plates for Magnetic Car Holders</a></li>
                          <li><a href="device-carphoneholders.html">Olixar inVent Gravity Universal Smartphone Car Holder</a></li>
                          <li><a href="device-carphoneholders.html">Olixar inVent Universal Smartphone Magnetic Air Vent Holder</a></li>
                          <li><a href="device-carphoneholders.html">iOttie Auto Sense Qi-Wireless Dash & Windshield Charging Mount</a></li>
                          <li><a href="device-carphoneholders.html">Baseus Osculum Gravity Universal Car Mount</a></li>
                          <li><a href="device-carphoneholders.html">Baseus Smart Solar Powered Wireless Vent Car Phone Mount - Black</a></li>
                          <li><a href="device-carphoneholders.html">Olixar Universal Headrest 7-10 inch Tablet Mount</a></li>
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
