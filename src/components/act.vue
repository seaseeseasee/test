<template>
  <!-- Navbar -->
  <nav class="navbar bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <Router-link to="/" button type="button">
        <img
          src="/public/img/home.png"
          alt="Logo"
          width="25"
          height="24"
          class="d-inline-block align-text-top"
        />
        My Activities
      </Router-link>
    </div>
  </nav>

  <!-- Card Row -->
  <div class="container mt-4">
    <div class="row">
      <!-- การ์ดใบที่ 1 -->
      <div class="col-md-6 mb-4">
        <!-- ใช้ 6 ส่วนของหน้าจอ -->
        <div class="card" style="width: 100%">
          <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/public/img/1.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="/public/img/2.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="/public/img/3.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="card-body">
            <p class="card-text">ได้มีโอกาศเป็นพิธิกรสันทนาการให้แก่โรงเรียนเบ็ญจะมะมหาราช</p>
          </div>
        </div>
      </div>

      <!-- การ์ดใบที่ 2 -->
      <div class="col-md-6">
        <!-- ใช้ 6 ส่วนของหน้าจอ -->
        <div class="card" style="width: 100%">
          <div id="a" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/public/img/4.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="/public/img/5.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="/public/img/6.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="/public/img/7.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="/public/img/8.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="/public/img/9.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="/public/img/10.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="/public/img/11.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#a"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#a"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="card-body">
            <p class="card-text">เป็นพิธีกรค่ายยุวชนคอมพิวเตอร์ครั้งที่ 21</p>
          </div>
        </div>
      </div>
      <!--ใบที่ 3-->
      <div class="col-md-6">
        <!-- ใช้ 6 ส่วนของหน้าจอ -->
        <div class="card" style="width: 100%">
          <div id="b" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/public/img/12.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#b"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#b"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="card-body">
            <p class="card-text">ได้มีโอกาศเป็นผู้ถือป้ายคณะวิทยาศาตร์นำพี่บัณฑิต</p>
          </div>
        </div>
      </div>

      <!-- การ์ดใบที่ 4 -->
      <div class="col-md-6">
        <!-- ใช้ 6 ส่วนของหน้าจอ -->
        <div class="card" style="width: 100%">
          <div id="p" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/public/img/51.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item active">
                <img src="/public/img/52.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#p"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#p"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="card-body">
            <p class="card-text">
              ได้รับเหรียญเรียนดีสำหรับผู้ได้รับเกรด 2.5 ขึ้นไป ทั้ง 2 ปีการศึกษา
            </p>
          </div>
        </div>
      </div>
      <!--ใบที่ 5-->
      <div class="col-md-6">
        <!-- ใช้ 6 ส่วนของหน้าจอ -->
        <div class="card" style="width: 100%">
          <div id="c" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/public/img/14.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item active">
                <img src="/public/img/15.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item active">
                <img src="/public/img/16.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item active">
                <img src="/public/img/17.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#c"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#c"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="card-body">
            <p class="card-text">
              ได้มีโอกาศเป็นผู้ช่วยสอนในโครงการพํฒนาด้านประญาประดิษฐ์ขั้นพื้นฐานบนหลายแฟลตฟอร์ม (AI)
              ของโรงเรียนสันทรายวิทยาคม
            </p>
          </div>
        </div>
      </div>

      <!-- การ์ดใบที่ 6 -->
      <div class="col-md-6">
        <!-- ใช้ 6 ส่วนของหน้าจอ -->
        <div class="card" style="width: 100%">
          <div id="d" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/public/img/18.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item active">
                <img src="/public/img/20.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item active">
                <img src="/public/img/21.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item active">
                <img src="/public/img/22.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#d"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#d"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="card-body">
            <p class="card-text">
              ได้มีโอกาศเป็นผู้ช่วยสอนในโครงการพํฒนาด้านประญาประดิษฐ์ขั้นพื้นฐานบนหลายแฟลตฟอร์ม (AI)
              ของโรงเรียนกาวิละและเป็นพิธีกรประกาศผู้ได้รับเกียรติบัตรอีกด้วย
            </p>
          </div>
        </div>
      </div>
      <!--ใบที่ 7-->
      <div class="col-md-6">
        <!-- ใช้ 6 ส่วนของหน้าจอ -->
        <div class="card" style="width: 100%">
          <div id="e" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/public/img/24.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item active">
                <img src="/public/img/25.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item active">
                <img src="/public/img/26.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item active">
                <img src="/public/img/27.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item active">
                <img src="/public/img/28.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#e"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#e"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="card-body">
            <p class="card-text">
              ได้มีโอกาศเป็นผู้ช่วยสอนในโครงการปรับพื้นฐานของน้องๆรุ่นที่ 29
              และเป็นพิธีกรผู้ดำเนินรายการทั้งหมดไม่ว่าจะเป็นสันทนาการหรือพิธีการ
            </p>
          </div>
        </div>
      </div>
      <!--การ์ดใบที่ 8-->
      <div class="col-md-6">
        <!-- ใช้ 6 ส่วนของหน้าจอ -->
        <div class="card" style="width: 100%">
          <div id="d" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/public/img/23.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#d"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#d"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="card-body">
            <p class="card-text">เป็นผู้ดูแลน้องๆในงานเดิน-วิ่งสันทรายในปีที่ 2566</p>
          </div>
        </div>
      </div>
      <!--ใบที่ 9-->
      <div class="col-md-6">
        <!-- ใช้ 6 ส่วนของหน้าจอ -->
        <div class="card" style="width: 100%">
          <div id="f" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/public/img/29.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#f"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#f"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="card-body">
            <p class="card-text">
              ได้มีโอกาศเป็นพิธีกรการแข่งขัน ROV ระดับภาคเหนือ จัดโดยบริษัททรูคอปเปอร์เรชั่น
            </p>
          </div>
        </div>
      </div>
      <!--การ์ดใบที่ 10-->
      <div class="col-md-6">
        <!-- ใช้ 6 ส่วนของหน้าจอ -->
        <div class="card" style="width: 100%">
          <div id="g" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/public/img/30.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item active">
                <img src="/public/img/31.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#g"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#g"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="card-body">
            <p class="card-text">
              ได้มีโอกาศเป็นผู้ช่วยสอนในโครงการพํฒนาด้านประญาประดิษฐ์ขั้นพื้นฐานบนหลายแฟลตฟอร์ม (AI)
              ของโรงเรียนดารา และเป็นพิธีกรประกาศผู้ได้รับเกียรติบัตรอีกด้วย
            </p>
          </div>
        </div>
      </div>
      <!--ใบที่ 11-->
      <div class="col-md-6">
        <!-- ใช้ 6 ส่วนของหน้าจอ -->
        <div class="card" style="width: 100%">
          <div id="j" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/public/img/32.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item active">
                <img src="/public/img/33.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#j"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#j"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="card-body">
            <p class="card-text">
              ได้มีโอกาศเป็นพิธีกรการแข่งขันงานกีฬาสีสัมพันธ์ของสาขาวิชาวิทยาการคอมพิวเตอร์
            </p>
          </div>
        </div>
      </div>
      <!--การ์ดใบที่ 12-->
      <div class="col-md-6">
        <!-- ใช้ 6 ส่วนของหน้าจอ -->
        <div class="card" style="width: 100%">
          <div id="h" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/public/img/34.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item active">
                <img src="/public/img/35.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#h"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#h"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="card-body">
            <p class="card-text">ผู้จัดการประชุมวิชาการระดับนานาชาติ ECTIDAMT&NCON 2024</p>
          </div>
        </div>
      </div>
      <!--ใบที่ 13-->
      <div class="col-md-6">
        <!-- ใช้ 6 ส่วนของหน้าจอ -->
        <div class="card" style="width: 100%">
          <div id="i" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/public/img/36.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item active">
                <img src="/public/img/37.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item active">
                <img src="/public/img/38.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item active">
                <img src="/public/img/39.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#i"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#i"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="card-body">
            <p class="card-text">พิธีกรประจำโครงการค่ายยุวชนคอมพิวเตอร์ครั้งที่ 22</p>
          </div>
        </div>
      </div>
      <!--การ์ดใบที่ 14-->
      <div class="col-md-6">
        <!-- ใช้ 6 ส่วนของหน้าจอ -->
        <div class="card" style="width: 100%">
          <div id="k" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/public/img/41.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#k"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#k"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="card-body">
            <p class="card-text">พิธีกรงานบายเนีย</p>
          </div>
        </div>
      </div>
      <!--ใบที่ 15-->
      <div class="col-md-6">
        <!-- ใช้ 6 ส่วนของหน้าจอ -->
        <div class="card" style="width: 100%">
          <div id="l" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/public/img/40.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#l"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#l"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="card-body">
            <p class="card-text">จัดการอำนวยความสะดวกให้แก่พี่บันฑิต</p>
          </div>
        </div>
      </div>
      <!--การ์ดใบที่ 16-->
      <div class="col-md-6">
        <!-- ใช้ 6 ส่วนของหน้าจอ -->
        <div class="card" style="width: 100%">
          <div id="u" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/public/img/42.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item active">
                <img src="/public/img/43.jpg" class="d-block w-100" alt="..." />
              </div>

              <div class="carousel-item active">
                <img src="/public/img/46.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item active">
                <img src="/public/img/47.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item active">
                <img src="/public/img/48.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item active">
                <img src="/public/img/49.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#u"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#u"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="card-body">
            <p class="card-text">
              ได้มีโอกาศเป็นผู้ช่วยสอนในโครงการปรับพื้นฐานของน้องๆรุ่นที่ 30
              และเป็นพิธีกรผู้ดำเนินรายการทั้งหมดไม่ว่าจะเป็นสันทนาการหรือพิธีการ
            </p>
          </div>
        </div>
      </div>
      <!--ใบที่ 17-->
      <div class="col-md-6">
        <!-- ใช้ 6 ส่วนของหน้าจอ -->
        <div class="card" style="width: 100%">
          <div id="o" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/public/img/44.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item active">
                <img src="/public/img/45.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#o"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#o"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="card-body">
            <p class="card-text">
              ได้มีโอกาศเป็นผู้ช่วยสอนในโครงการพํฒนาด้านประญาประดิษฐ์ขั้นพื้นฐานบนหลายแฟลตฟอร์ม (AI)
              และเป็นพิธีกรประกาศผู้ได้รับเกียรติบัตรอีกด้วย
            </p>
          </div>
        </div>
      </div>
      <!--การ์ดใบที่ 18-->
      <div class="col-md-6">
        <!-- ใช้ 6 ส่วนของหน้าจอ -->
        <div class="card" style="width: 100%">
          <div id="#" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/public/img/50.jpg" class="d-block w-100" alt="..." />
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#"
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#"
                data-bs-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <div class="card-body">
              <p class="card-text">
                ได้มีโอกาศเป็นพิธีกรการแข่งขัน ROV ระดับภาคเหนือ จัดโดยบริษัททรูคอปเปอร์เรชั่น
                ในวันวิทยาศาตร์
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--ใบที่ 19-->
      <div class="col-md-6">
        <!-- ใช้ 6 ส่วนของหน้าจอ -->
        <div class="card" style="width: 100%">
          <div id="a" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/public/img/13.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#a"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#a"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="card-body">
            <p class="card-text">ถือกล่องรับบริจาคให้แก่น้องๆโรงเรียนบ้านนาเกียน</p>
          </div>
        </div>
      </div>
      <!--การ์ดใบที่ 20-->
      <div class="col-md-6">
        <!-- ใช้ 6 ส่วนของหน้าจอ -->
        <div class="card" style="width: 100%">
          <div id="#" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/public/img/53.jpg" class="d-block w-100" alt="..." />
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#"
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#"
                data-bs-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <div class="card-body">
              <p class="card-text">
                ได้มีโอกาศเข้ารับการประเมินประกันสุขภาพของคณะวิทยาศาตร์ทั้ง 2 ปีการศึกษา
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--การ์ดใบที่ 21-->
      <div class="col-md-6">
        <!-- ใช้ 6 ส่วนของหน้าจอ -->
        <div class="card" style="width: 100%">
          <div id="#" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/public/img/54.jpg" class="d-block w-100" alt="..." />
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#"
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#"
                data-bs-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <div class="card-body">
              <p class="card-text">ผู้ช่วยรองนายกองค์กรนักศึกษา ฝ่ายบริหาร มหาวิทยาลัยแม่โจ้</p>
            </div>
          </div>
        </div>
      </div>
      <!--การ์ดใบที่ 22-->
      <div class="col-md-6">
        <!-- ใช้ 6 ส่วนของหน้าจอ -->
        <div class="card" style="width: 100%">
          <div id="#" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/public/img/55.jpg" class="d-block w-100" alt="..." />
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#"
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#"
                data-bs-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <div class="card-body">
              <p class="card-text">
                ได้มีโอกาศไปร่วมโครงการประชุมเครือข่ายนักศึกษาสิงค์อาสา ภาคเหนือ
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--การ์ดใบที่ 23-->
      <div class="col-md-6">
        <!-- ใช้ 6 ส่วนของหน้าจอ -->
        <div class="card" style="width: 100%">
          <div id="#" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/public/img/56.jpg" class="d-block w-100" alt="..." />
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#"
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#"
                data-bs-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <div class="card-body">
              <p class="card-text">ได้มีโอกาศเป็นพิธีกรงานดนตรีในสวน10วัน</p>
            </div>
          </div>
        </div>
      </div>


    </div>
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
   .carousel-inner .carousel-item {
    display: flex;
    justify-content: center;
  }
  .card {
    width: 100%;
  }

.footer .container {
    max-width: 1200px; /* กำหนดความกว้างสูงสุด */
    margin: 0 auto; /* จัดให้อยู่กลาง */
}

.footer-links {
    margin-top: 10px; /* ระยะห่างระหว่างลิงก์ */
}
.footer {
    background-color: #343a40 !important; /* สีพื้นหลัง */
    color: white !important; /* สีข้อความ */
    text-align: center; /* จัดข้อความให้อยู่กลาง */
    padding: 20px 10px; /* ระยะห่างภายใน */
    position: relative; /* สำหรับการจัดตำแหน่ง */
    width: 100%; /* ความกว้างเต็มหน้าจอ */
    bottom: 0; /* ติดกับด้านล่าง */
    font-size: 1rem; /* ขนาดข้อความ */
    z-index: 1000;
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
