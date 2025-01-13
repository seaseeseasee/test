<script>
import 'bootstrap/dist/css/bootstrap.min.css';
</script>
<template>
  <div class="slide">
    <div class="overlay-text">
      <h1>Sea Chontpaisalkul</h1>
      <div class="nav-links">
        <button @click="$router.push('/about')" class="nav-link">About</button>
        <button @click="$router.push('/act')" class="nav-link">Activities</button>
      </div>
    </div>

    <figure>
      <img src="/public/img/1.jpg" alt="">
      <img src="/public/img/2.jpg" alt="">
      <img src="/public/img/3.jpg" alt="">
      <img src="/public/img/4.jpg" alt="">
      <img src="/public/img/5.jpg" alt="">
      <img src="/public/img/6.jpg" alt="">
      <img src="/public/img/7.jpg" alt="">
      <img src="/public/img/8.jpg" alt="">
      <img src="/public/img/9.jpg" alt="">
      <img src="/public/img/10.jpg" alt="">
      <img src="/public/img/11.jpg" alt="">
      <img src="/public/img/12.jpg" alt="">
      <img src="/public/img/13.jpg" alt="">
      <img src="/public/img/14.jpg" alt="">
    </figure>
  </div>

  <footer class="footer">
    <div class="container">
      <p>ช่องทางการติดต่อ</p>
      <div class="footer-links">
        <a href="https://www.facebook.com/si.choti.phisal.kul?locale=th_TH">Facebook</a>
        <a href="https://www.instagram.com/sea_chontipaikun/">Instagram</a>
        <a href="#privacy">Tel. 0925234627</a>
        <a href="#">Gmail: sea.chotpaisalkul@gmail.com</a>
      </div>
    </div>
  </footer>
</template>

<style>
/* Global Styles */
body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', Arial, sans-serif;
  background-color: #f8f9fa;
}

.slide {
  width: 100vw;
  height: 100vh;
  margin: 0;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.slide::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.slide figure {
  position: relative;
  width: 500%;
  margin: 0;
  left: 0;
  animation: sea 10s infinite linear;
  z-index: 0;
}

.slide figure img {
  width: 20%;
  height: 100vh;
  float: left;
  object-fit: cover;
}

/* Overlay Text */
.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  z-index: 2;
  text-align: center;
  padding: 20px 40px;
  background: linear-gradient(135deg, rgba(217, 86, 221, 0.7), rgba(44, 153, 196, 0.7));
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

.overlay-text h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.nav-links {
  display: flex; /* ใช้ Flexbox */
  justify-content: center; /* จัดข้อความให้อยู่ตรงกลางในแนวนอน */
  align-items: center; /* จัดข้อความให้อยู่ตรงกลางในแนวตั้ง */
  gap: 20px; /* เพิ่มระยะห่างระหว่างข้อความ */
  height: 100%; /* กำหนดความสูงของคอนเทนเนอร์ (จำเป็นสำหรับ align-items) */
}


.nav-link {
  color: #ffffff;
  font-weight: bold;
  font-size: 1.5rem;
  background-color: transparent;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.nav-link:hover {
  color: #000000;
  background-color: #ffffff;
  border-radius: 10px;
}

/* Footer */
.footer {
  background-color: #343a40;
  color: white;
  text-align: center;
  padding: 20px;
}

.footer-links {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.footer-links a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: white;
}

/* Responsive Design */
@media (min-width: 1024px) {
  .overlay-text {
    font-size: 3rem;
    padding: 20px 40px;
  }
  .nav-links {
    gap: 30px;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .overlay-text {
    font-size: 2.5rem;
    padding: 15px 30px;
  }
  .nav-links {
    flex-direction: column;
    gap: 15px;
  }
}

@media (max-width: 767px) {
  .overlay-text {
    font-size: 2rem;
    padding: 10px 20px;
  }
  .nav-links {
    flex-direction: column;
    gap: 10px;
  }
  .nav-link {
    font-size: 1.2rem;
  }
  .footer {
    font-size: 0.8rem;
  }
}
</style>
