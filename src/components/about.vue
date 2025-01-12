<script>
import 'bootstrap/dist/css/bootstrap.min.css';

</script>
<template>
  <body>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary fixed-top">
        <div class="container-fluid">
          <Router-link to="/" button type="button"  >
                <img src="/public/img/home.png" alt="Logo" width="25" height="24" class="d-inline-block align-text-top">
            </Router-link>
            <div class="nav-link2">
    <ul class="nav nav-pills ms-auto">
        <li class="nav-item">
            <a class="nav-link2" href="#scrollspyHeading1">About </a>
        </li>
        <li class="nav-item">
            <a class="nav-link2" href="#scrollspyHeading2">Skills</a>
        </li>
    </ul>
</div>

        </div>
    </nav>

    <!-- Main Section -->
    <div class="top-me">
        <!-- Contact Section -->
        <div class="contact">
            <h1>SEA CHONTPAISALKUL</h1>
            <h4>Computer Science of Maejo University</h4>
            <div class="icon-container">
                <a href="https://www.facebook.com/si.choti.phisal.kul?locale=th_TH">
                    <img src="/public/img/facebook.png" alt="Facebook Logo">
                </a>
                <a href="https://www.instagram.com/sea_chontipaikun/">
                    <img src="/public/img/instagram.png" alt="Instagram Logo">
                </a>
                <a href="https://github.com/seaseeseasee">
                    <img src="/public/img//github.png" alt="GitHub Logo">
                </a>
            </div>
        </div>

        <!-- Image Section -->
        <div class="image-container">
            <img src="/public/img/61.jpg" alt="Your Image">
        </div>
    </div>

    <!-- About Me Section -->
    <div class="content">
        <h2 id="scrollspyHeading1">About Me</h2>
        <div class="about-container">
            <div class="about-left" >
                <hr>
                <h3>Education</h3>
                <div class="education-item">
                    <div class="dot"></div>
                    <div>
                        <h4>มหาวิทยาลัยแม่โจ้</h4>
                        <p>วิทยาศาสตรบัณฑิต, วิทยาการคอมพิวเตอร์</p>
                        <span>2022 - ปัจจุบัน</span>
                    </div>
                </div>
                <div class="education-item">
                    <div class="dot"></div>
                    <div>
                        <h4>โรงเรียนกสิณธรเซนปีเตอร์</h4>
                        <p>สายการเรียนวิทยาศาสตร์ - คณิตศาสตร์</p>
                        <span>2019 - 2021</span>
                    </div>
                </div>
            </div>
            <div class="about-right">
                <p>
                    "สวัสดีค่ะ ดิฉันนางสาว ซี โชคิไพศาลกุล ปัจจุบันเป็นนักศึกษาชั้นปีที่ 3 สาขาวิชาวิทยาการคอมพิวเตอร์
                คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้ ดิฉันชอบมุ่งมั่นพัฒนาตนเอง และการแสวงหาโอกาสในการเรียนรู้และหาประสบการณ์ใหม่ ๆ
                เพื่อเสริมสร้างทักษะและความรู้ในหลากหลายด้าน ดิฉันเชื่อมั่นว่าความพยายามในการพัฒนาตนเอง จะช่วยให้สามารถประยุกต์ใช้ความรู้ที่มีอย่างมีประสิทธิภาพในงานต่าง ๆ โดยเฉพาะการเขียนโปรแกรม
                และการหาเทคโนโลยีใหม่ๆมาใช้ ซึ่งเป็นสิ่งที่ชื่นชอบในการที่จะเรียนรู้ และ เผชิญกับความท้าทายใหม่ ๆ ที่จะช่วยผลักดันให้ดิฉันเติบโตต่อไปในอนาคต"
                </p>
            </div>
        </div>

    </div>
    <div class="skills-section">
        <h2 id="scrollspyHeading2">Skills</h2>
        <div class="skills-grid">
            <div class="skill-card">
                <img src="/public/img/html5.png" alt="HTML5">
                <p>HTML5</p>
            </div>

            <div class="skill-card">
                <img src="/public/img/css3.png" alt="CSS3">
                <p>CSS</p>
            </div>




            <div class="skill-card">
                <img src="/public/img/สกรีนช็อต 2024-12-14 173233.png" alt="Bootstrap">
                <p>Bootstrap</p>
            </div>
            <div class="skill-card">
                <img src="/public/img/png-clipart-mysql-logo-mysql-database-web-development-computer-software-dolphin-marine-mammal-animals.png" alt="MySQL">
                <p>MySQL</p>
            </div>
            <div class="skill-card">
                <img src="/public/img/mongodb-icon.svg" alt="MongoDB">
                <p>MongoDB</p>
            </div>
            <div class="skill-card">
                <img src="/public/img/github.png" alt="GitHub">
                <p>GitHub</p>
            </div>
            <div class="skill-card">
                <img src="/public/img/figma.png" alt="Figma">
                <p>Figma</p>
            </div>
        </div>
      </div>
</body>
</template>
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body, html {
            height: 100%;
            font-family: Arial, sans-serif;
        }

        .top-me {
            display: flex;
            width: 100vw;
            height: 100vh;
            background-color: #eaf6fc; /* สีพื้นหลังฟ้าอ่อน */

        }

        .contact {
            width: 50%;
            background-color: #f4f4f4;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        .image-container {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f7f4f4;
        }

        .image-container img {
            width: 90%; /* ลดขนาดภาพ */
            max-height: 90%; /* จำกัดความสูง */
            object-fit: cover;
            border-radius: 50px;
        }

        .icon-container {
            display: flex;
            gap: 15px;
            justify-content: center;
            align-items: center;
        }

        .icon-container a {
            text-decoration: none;
        }

        .icon-container img {
            width: 35px;
            height: 35px;
            transition: transform 0.3s ease;
        }

        .icon-container img:hover {
            transform: scale(1.2);
        }

       body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #eeeaea; /* พื้นหลังสีดำ */
    color: #0a0808; /* ข้อความสีขาว */
}


.about-container {
    display: flex;
    justify-content: space-between;
    padding: 50px 100px;
    gap: 20px;
}

.about-left, .about-right {
    width: 48%;
}

h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
    margin-left: 50px;
    margin-top: 20px;
}

h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
}

p {
    font-size: 1.2rem;
    line-height: 1.8;
}

hr {
    margin: 20px 0;
    border: none;
    border-top: 1px solid #0f0c0c;
}

.education-item {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    margin-bottom: 20px;
}

.education-item .dot {
    width: 20px;
    height: 20px;
    background-color: #44b4e0; /* สีเหลือง */
    border-radius: 50%;
}

.education-item h4 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: bold;
}

.education-item p {
    margin: 5px 0;
    font-size: 1rem;
    color: #221e1e; /* ข้อความสีเทาอ่อน */
}

.education-item span {
    font-size: 0.9rem;
    color: #141111;
}

.about-right {
    background-color: #f3f3f3; /* พื้นหลังกล่องด้านขวา */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(245, 243, 243, 0.5);
    text-align: justify;
}
.skills-section {
            max-width: 1200px;
            margin: 0 auto;
            padding: 50px 20px;
        }

        .skills-section h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 40px;
        }

        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 20px;
            justify-items: center;
        }

        .skill-card {
            background-color: #f0e8e8;
            border-radius: 12px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            box-shadow: 0 4px 6px rgba(20, 20, 20, 0.3);
        }

        .skill-card img {
            width: 60px;
            height: 60px;
            margin-bottom: 10px;
        }

        .skill-card p {
            font-size: 1rem;
            font-weight: bold;
            color: rgb(8, 7, 7);
            margin: 0;
        }
/* เพิ่มความห่างระหว่าง logo และลิงก์ */
.navbar img {
    margin-right: 100px; /* ปรับระยะห่างจาก logo */
}

.nav-link2 {
    color: #333333; /* สีข้อความเริ่มต้น */
    font-weight: bold; /* ทำให้ข้อความดูเด่น */
    font-size: 1.8rem; /* ปรับขนาดข้อความให้เหมาะสม */
    text-decoration: none; /* ลบเส้นใต้ */
    transition: all 0.3s ease-in-out; /* เพิ่มการเปลี่ยนแปลงที่นุ่มนวล */
    padding: 10px 15px; /* เพิ่มพื้นที่ภายในข้อความ */
    border-radius: 5px; /* เพิ่มมุมโค้ง */
    display: inline-block; /* ทำให้ดูเหมือนปุ่ม */
}

.nav-link2:hover {
    color: #ffffff; /* เปลี่ยนสีข้อความเมื่อโฮเวอร์ */
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6); /* เพิ่มเงาเมื่อโฮเวอร์ */
    transform: scale(1.1); /* เพิ่มขนาดเล็กน้อยเมื่อโฮเวอร์ */
    cursor: pointer; /* เปลี่ยนเป็นมือชี้ */
}



    </style>
