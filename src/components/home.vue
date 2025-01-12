
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

 <div>

 </div>

 <footer class="footer">
  <div class="container">
    <p>ช่องทางการติดต่อ</p>
    <div class="footer-links">
      <a href="https://www.facebook.com/si.choti.phisal.kul?locale=th_TH">Facebook</a>
      <a href="https://www.instagram.com/sea_chontipaikun/">instagram</a>
      <a href="#privacy">Tel. 0925234627</a>
      <a href="#">gmail: sea.chotpaisalkul@gmail.com</a>
    </div>
  </div>
</footer>
</template>

<style>
.slide {
    width: 100vw; /* ความกว้างเต็มหน้าจอ */
    height: 100vh; /* ความสูงเต็มหน้าจอ */
    margin: 0;
    box-shadow: none;
    overflow: hidden;
    border-radius: 0;
    position: relative; /* ใช้เพื่อวาง overlay-text */
}

.slide::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3); /* ความมืด 30% */
    z-index: 1;
    pointer-events: none;
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

/* ข้อความตรงกลาง */
.nav-links {
    display: flex; /* จัดเรียงลูกในแนวนอน */
    justify-content: center; /* จัดให้อยู่ตรงกลาง */
    gap: 20px; /* เพิ่มระยะห่างระหว่างลิงก์ */
    margin-top: 20px; /* เพิ่มระยะห่างระหว่างหัวข้อกับลิงก์ */
}

.nav-link {
    color: #fafafa; /* สีข้อความ */
    font-weight: bold; /* ทำให้ข้อความหนา */
    font-size: 2rem; /* ปรับขนาดข้อความ */
    text-decoration: none; /* ลบเส้นใต้ */
    transition: color 0.3s ease-in-out; /* เพิ่มเอฟเฟกต์นุ่มนวล */
}

.nav-link:hover {
    color: #000000; /* เปลี่ยนสีข้อความเมื่อโฮเวอร์ */
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* เพิ่มเงาเมื่อโฮเวอร์ */
    cursor: pointer; /* เปลี่ยนเป็นมือชี้ */
}


.overlay-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgb(255, 255, 255)!important;
    z-index: 2;
    text-align: center;
    font-size: 3rem;
    font-family: 'Poppins', Arial, sans-serif; /* ใช้ฟอนต์ที่ทันสมัย */
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
    padding: 20px 40px;
    background: linear-gradient(135deg, rgba(217, 86, 221, 0.7), rgba(44, 153, 196, 0.7));
    border-radius: 20px;
    display: inline-block;
    max-width: 90%;
    letter-spacing: 1.5px;
    line-height: 1.4;
    border: 2px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease-in-out;
}


.overlay-text:hover {
    transform: translate(-50%, -50%) scale(1.05); /* ขยายเล็กน้อยเมื่อโฮเวอร์ */
    background: linear-gradient(135deg, rgba(143, 185, 219, 0.8), rgba(28, 103, 136, 0.8)); /* เปลี่ยนสีพื้นหลัง */
    text-shadow: 3px 3px 8px rgba(245, 240, 240, 0.9);
}


@keyframes sea {
    0% { left: 0%; }
    15% { left: 0%; }
    20% { left: -100%; }
    35% { left: -100%; }
    40% { left: -200%; }
    60% { left: -200%; }
    65% { left: -300%; }
    80% { left: -300%; }
    85% { left: -400%; }
    100% { left: -400%; }
}
.footer {
    background-color: #343a40 !important; /* สีพื้นหลัง */
    color: white !important; /* สีข้อความ */
    text-align: center; /* จัดข้อความให้อยู่กลาง */
    padding: 10px 10px; /* ระยะห่างภายใน */
    position: relative; /* สำหรับการจัดตำแหน่ง */
    width: 100%; /* ความกว้างเต็มหน้าจอ */
    bottom: 0; /* ติดกับด้านล่าง */
    font-size: 1rem; /* ขนาดข้อความ */
}

.footer .container {
    max-width: 1200px; /* กำหนดความกว้างสูงสุด */
    margin: 0 auto; /* จัดให้อยู่กลาง */
}

.footer-links {
    margin-top: 10px; /* ระยะห่างระหว่างลิงก์ */
}

.footer-links a {
    color: #ccc; /* สีลิงก์ */
    text-decoration: none; /* ลบขีดเส้นใต้ */
    margin: 0 10px; /* ระยะห่างระหว่างลิงก์ */
    transition: color 0.3s ease; /* เพิ่มเอฟเฟกต์ */
}

.footer-links a:hover {
    color: white; /* เปลี่ยนสีลิงก์เมื่อชี้ */
}

</style>
