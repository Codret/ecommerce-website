const footerHTML = `
<footer class="section-footer">
    <div class="footer-container container">
      <div class="content_1">
        <img src="./public/images/logo.png" alt="logo">
        <p>Welcome to CodeYet Store </p>
        <i class="fa-brands fa-cc-visa"></i>
        <i class="fa-regular fa-credit-card"></i>
        <i class="fa-solid fa-credit-card"></i>
        <i class="fa-solid fa-money-check"></i>
        <i class="fa-brands fa-paypal"></i>
        <i class="fa-brands fa-google-pay"></i>
      </div>

      <!-- footer 2nd div  -->
      <div class="footer-2-div">
        <p class="footer-subheading">Shopping</p>
        <ul>
          <li><a href="#"> Computer Store </a></li>
          <li><a href="#"> Laptop Store </a></li>
          <li><a href="#"> Accessories </a></li>
          <li><a href="#"> Sales & Discounts </a></li>
        </ul>
      </div>

      <!-- footer 3rd div  -->
      <div class="footer-3-div">
        <p class="footer-subheading">Experiences</p>
        <ul>
          <li><a href="#"> Contact Us </a></li>
          <li><a href="#"> Payment Method </a></li>
          <li><a href="#"> Delivery </a></li>
          <li><a href="#"> Returns & Exchanges </a></li>
        </ul>
      </div>

      <!-- footer 4th div  -->
      <div class="footer-4-div">
        <p class="footer-subheading">NEWSLATERS</p>
        <ul>
          <li><a href="#"> Be the First to know about new Arrivals.<br/>Sales and promos! </a></li>
        </ul>
      </div>
    </div>

  </footer>`

  const footerElem = document.querySelector(".section-footer");

  footerElem.insertAdjacentHTML("afterbegin", footerHTML);