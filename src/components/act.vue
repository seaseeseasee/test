<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
</script>

<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-3">
    <div class="container">
      <!-- Router-link แทนการใช้ button -->
      <Router-link to="/" class="navbar-brand d-flex align-items-center">
        <img src="/public/img/home.png" alt="Logo" width="30" height="30" class="me-2">
        <span class="fs-4">Activities</span>
      </Router-link>
      <!-- เพิ่มปุ่มเมนูสำหรับมือถือ -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- เมนูลิงก์ต่าง ๆ -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <Router-link to="/" class="nav-link px-3">Home</Router-link>
          </li>
          <li class="nav-item">
            <Router-link to="/about" class="nav-link px-3">About</Router-link>
          </li>
          <li class="nav-item">
            <Router-link to="/contact" class="nav-link px-3">Contact</Router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Card Row -->
  <div class="container mt-4">
    <div class="row">
      <!-- การ์ดใบที่ 1 -->
      <div class="col-md-6 mb-4">
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
          <div class="card-body">
            <p class="card-text">ได้มีโอกาสเป็นพิธีกรสันทนาการให้แก่โรงเรียนเบ็ญจะมะมหาราช</p>
          </div>
        </div>
      </div>

      <!-- การ์ดใบที่ 2 -->
      <div class="col-md-6"> <!-- ใช้ 6 ส่วนของหน้าจอ -->
              <div class="card" style="width: 100%;">
                <div id="a" class="carousel slide">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="/public/img/4.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="/public/img/5.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="/public/img/6.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="/public/img/7.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="/public/img/8.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="/public/img/9.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="/public/img/10.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="/public/img/11.jpg" class="d-block w-100" alt="...">
                      </div>
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#a" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#a" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                <div class="card-body">
                  <p class="card-text">เป็นพิธีกรค่ายยุวชนคอมพิวเตอร์ครั้งที่ 21</p>
                </div>
              </div>
            </div>

<!--ใบที่ 3-->
<div class="col-md-6"> <!-- ใช้ 6 ส่วนของหน้าจอ -->
              <div class="card" style="width: 100%;">
                <div id="b" class="carousel slide">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="/public/img/12.jpg" class="d-block w-100" alt="...">
                      </div>
                    </div>

                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#b" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#b" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                <div class="card-body">
                  <p class="card-text">ได้มีโอกาศเป็นผู้ถือป้ายคณะวิทยาศาตร์นำพี่บัณฑิต</p>
                </div>
              </div>
            </div>

            <!-- การ์ดใบที่ 4 -->
            <div class="col-md-6"> <!-- ใช้ 6 ส่วนของหน้าจอ -->
              <div class="card" style="width: 100%;">
                <div id="p" class="carousel slide">
                    <div class="carousel-inner">


                      <div class="carousel-item active">
                        <img src="/public/img/51.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item active">
                        <img src="/public/img/52.jpg" class="d-block w-100" alt="...">
                      </div>
                    </div>

                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#p" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#p" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                <div class="card-body">
                  <p class="card-text">ได้รับเหรียญเรียนดีสำหรับผู้ได้รับเกรด 2.5 ขึ้นไป ทั้ง 2 ปีการศึกษา</p>
                </div>
              </div>
            </div>
            <!--ใบที่ 5-->
            <div class="col-md-6"> <!-- ใช้ 6 ส่วนของหน้าจอ -->
              <div class="card" style="width: 100%;">
                <div id="c" class="carousel slide">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="/public/img/14.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item active">
                        <img src="/public/img/15.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item active">
                        <img src="/public/img/16.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item active">
                        <img src="/public/img/17.jpg" class="d-block w-100" alt="...">
                      </div>
                    </div>

                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#c" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#c" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                <div class="card-body">
                  <p class="card-text">ได้มีโอกาศเป็นผู้ช่วยสอนในโครงการพํฒนาด้านประญาประดิษฐ์ขั้นพื้นฐานบนหลายแฟลตฟอร์ม (AI) ของโรงเรียนสันทรายวิทยาคม</p>
                </div>
              </div>
            </div>

            <!-- การ์ดใบที่ 6 -->
            <div class="col-md-6"> <!-- ใช้ 6 ส่วนของหน้าจอ -->
              <div class="card" style="width: 100%;">
                <div id="d" class="carousel slide">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="/public/img/18.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item active">
                        <img src="/public/img/20.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item active">
                        <img src="/public/img/21.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item active">
                        <img src="/public/img/22.jpg" class="d-block w-100" alt="...">
                      </div>
                    </div>

                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#d" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#d" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                <div class="card-body">
                  <p class="card-text">ได้มีโอกาศเป็นผู้ช่วยสอนในโครงการพํฒนาด้านประญาประดิษฐ์ขั้นพื้นฐานบนหลายแฟลตฟอร์ม (AI) ของโรงเรียนกาวิละและเป็นพิธีกรประกาศผู้ได้รับเกียรติบัตรอีกด้วย</p>
                </div>
              </div>
            </div>
            <!--ใบที่ 7-->
            <div class="col-md-6"> <!-- ใช้ 6 ส่วนของหน้าจอ -->
              <div class="card" style="width: 100%;">
                <div id="e" class="carousel slide">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="/public/img/24.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item active">
                        <img src="/public/img/25.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item active">
                        <img src="/public/img/26.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item active">
                        <img src="/public/img/27.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item active">
                        <img src="/public/img/28.jpg" class="d-block w-100" alt="...">
                      </div>


                    </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#e" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#e" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                <div class="card-body">
                  <p class="card-text">ได้มีโอกาศเป็นผู้ช่วยสอนในโครงการปรับพื้นฐานของน้องๆรุ่นที่ 29  และเป็นพิธีกรผู้ดำเนินรายการทั้งหมดไม่ว่าจะเป็นสันทนาการหรือพิธีการ</p>
                </div>
              </div>
            </div>
            <!--การ์ดใบที่ 8-->
            <div class="col-md-6"> <!-- ใช้ 6 ส่วนของหน้าจอ -->
              <div class="card" style="width: 100%;">
                <div id="d" class="carousel slide">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="/public/img/23.jpg" class="d-block w-100" alt="...">
                      </div>
                    </div>

                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#d" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#d" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                <div class="card-body">
                  <p class="card-text">เป็นผู้ดูแลน้องๆในงานเดิน-วิ่งสันทรายในปีที่ 2566</p>
                </div>
              </div>
            </div>
            <!--ใบที่ 9-->
            <div class="col-md-6"> <!-- ใช้ 6 ส่วนของหน้าจอ -->
              <div class="card" style="width: 100%;">
                <div id="f" class="carousel slide">
                    <div class="carousel-inner">


                      <div class="carousel-item active">
                        <img src="/public/img/29.jpg" class="d-block w-100" alt="...">
                      </div>
                    </div>

                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#f" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#f" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                <div class="card-body">
                  <p class="card-text">ได้มีโอกาศเป็นพิธีกรการแข่งขัน ROV ระดับภาคเหนือ จัดโดยบริษัททรูคอปเปอร์เรชั่น</p>
                </div>
              </div>
            </div>
            <!--การ์ดใบที่ 10-->
            <div class="col-md-6"> <!-- ใช้ 6 ส่วนของหน้าจอ -->
              <div class="card" style="width: 100%;">
                <div id="g" class="carousel slide">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="/public/img/30.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item active">
                        <img src="/public/img/31.jpg" class="d-block w-100" alt="...">
                      </div>
                    </div>

                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#g" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#g" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                <div class="card-body">
                  <p class="card-text">ได้มีโอกาศเป็นผู้ช่วยสอนในโครงการพํฒนาด้านประญาประดิษฐ์ขั้นพื้นฐานบนหลายแฟลตฟอร์ม (AI) ของโรงเรียนดารา และเป็นพิธีกรประกาศผู้ได้รับเกียรติบัตรอีกด้วย</p>
                </div>
              </div>
            </div>
            <!--ใบที่ 11-->
            <div class="col-md-6"> <!-- ใช้ 6 ส่วนของหน้าจอ -->
              <div class="card" style="width: 100%;">
                <div id="j" class="carousel slide">
                    <div class="carousel-inner">


                      <div class="carousel-item active">
                        <img src="/public/img/32.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item active">
                        <img src="/public/img/33.jpg" class="d-block w-100" alt="...">
                      </div>

                    </div>

                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#j" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#j" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                <div class="card-body">
                  <p class="card-text">ได้มีโอกาศเป็นพิธีกรการแข่งขันงานกีฬาสีสัมพันธ์ของสาขาวิชาวิทยาการคอมพิวเตอร์</p>
                </div>
              </div>
            </div>
            <!--การ์ดใบที่ 12-->
            <div class="col-md-6"> <!-- ใช้ 6 ส่วนของหน้าจอ -->
              <div class="card" style="width: 100%;">
                <div id="h" class="carousel slide">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="/public/img/34.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item active">
                        <img src="/public/img/35.jpg" class="d-block w-100" alt="...">
                      </div>
                    </div>

                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#h" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#h" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                <div class="card-body">
                  <p class="card-text">ผู้จัดการประชุมวิชาการระดับนานาชาติ ECTIDAMT&NCON 2024</p>
                </div>
              </div>
            </div>
            <!--ใบที่ 13-->
            <div class="col-md-6"> <!-- ใช้ 6 ส่วนของหน้าจอ -->
              <div class="card" style="width: 100%;">
                <div id="i" class="carousel slide">
                    <div class="carousel-inner">


                      <div class="carousel-item active">
                        <img src="/public/img/36.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item active">
                        <img src="/public/img/37.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item active">
                        <img src="/public/img/38.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item active">
                        <img src="/public/img/39.jpg" class="d-block w-100" alt="...">
                      </div>
                    </div>

                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#i" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#i" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                <div class="card-body">
                  <p class="card-text">พิธีกรประจำโครงการค่ายยุวชนคอมพิวเตอร์ครั้งที่ 22</p>
                </div>
              </div>
            </div>
            <!--การ์ดใบที่ 14-->
            <div class="col-md-6"> <!-- ใช้ 6 ส่วนของหน้าจอ -->
              <div class="card" style="width: 100%;">
                <div id="k" class="carousel slide">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="/public/img/41.jpg" class="d-block w-100" alt="...">
                      </div>

                    </div>

                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#k" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#k" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                <div class="card-body">
                  <p class="card-text">พิธีกรงานบายเนีย</p>
                </div>
              </div>
            </div>
            <!--ใบที่ 15-->
            <div class="col-md-6"> <!-- ใช้ 6 ส่วนของหน้าจอ -->
              <div class="card" style="width: 100%;">
                <div id="l" class="carousel slide">
                    <div class="carousel-inner">


                      <div class="carousel-item active">
                        <img src="/public/img/40.jpg" class="d-block w-100" alt="...">
                      </div>

                    </div>

                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#l" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#l" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                <div class="card-body">
                  <p class="card-text">จัดการอำนวยความสะดวกให้แก่พี่บันฑิต</p>
                </div>
              </div>
            </div>
            <!--การ์ดใบที่ 16-->
            <div class="col-md-6"> <!-- ใช้ 6 ส่วนของหน้าจอ -->
              <div class="card" style="width: 100%;">
                <div id="u" class="carousel slide">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="/public/img/42.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item active">
                        <img src="/public/img/43.jpg" class="d-block w-100" alt="...">
                      </div>

                      <div class="carousel-item active">
                        <img src="/public/img/46.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item active">
                        <img src="/public/img/47.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item active">
                        <img src="/public/img/48.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item active">
                        <img src="/public/img/49.jpg" class="d-block w-100" alt="...">
                      </div>
                    </div>

                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#u" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#u" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                <div class="card-body">
                  <p class="card-text">ได้มีโอกาศเป็นผู้ช่วยสอนในโครงการปรับพื้นฐานของน้องๆรุ่นที่ 30 และเป็นพิธีกรผู้ดำเนินรายการทั้งหมดไม่ว่าจะเป็นสันทนาการหรือพิธีการ</p>
                </div>
              </div>
            </div>
            <!--ใบที่ 17-->
            <div class="col-md-6"> <!-- ใช้ 6 ส่วนของหน้าจอ -->
              <div class="card" style="width: 100%;">
                <div id="o" class="carousel slide">
                    <div class="carousel-inner">


                      <div class="carousel-item active">
                        <img src="/public/img/44.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item active">
                        <img src="/public/img/45.jpg" class="d-block w-100" alt="...">
                      </div>
                    </div>

                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#o" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#o" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                <div class="card-body">
                  <p class="card-text">ได้มีโอกาศเป็นผู้ช่วยสอนในโครงการพํฒนาด้านประญาประดิษฐ์ขั้นพื้นฐานบนหลายแฟลตฟอร์ม (AI)  และเป็นพิธีกรประกาศผู้ได้รับเกียรติบัตรอีกด้วย</p>
                </div>
              </div>
            </div>
            <!--การ์ดใบที่ 18-->
            <div class="col-md-6"> <!-- ใช้ 6 ส่วนของหน้าจอ -->
              <div class="card" style="width: 100%;">
                <div id="#" class="carousel slide">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="/public/img/50.jpg" class="d-block w-100" alt="...">

                    </div>

                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                <div class="card-body">
                  <p class="card-text">ได้มีโอกาศเป็นพิธีกรการแข่งขัน ROV ระดับภาคเหนือ จัดโดยบริษัททรูคอปเปอร์เรชั่น ในวันวิทยาศาตร์</p>
                </div>
              </div>
            </div>
          </div>
          <!--ใบที่ 19-->
          <div class="col-md-6"> <!-- ใช้ 6 ส่วนของหน้าจอ -->
            <div class="card" style="width: 100%;">
              <div id="a" class="carousel slide">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="/public/img/13.jpg" class="d-block w-100" alt="...">
                    </div>

                  </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#a" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#a" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
              <div class="card-body">
                <p class="card-text">ถือกล่องรับบริจาคให้แก่น้องๆโรงเรียนบ้านนาเกียน</p>
              </div>
            </div>
          </div>
          <!--การ์ดใบที่ 20-->
          <div class="col-md-6"> <!-- ใช้ 6 ส่วนของหน้าจอ -->
            <div class="card" style="width: 100%;">
              <div id="#" class="carousel slide">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="/public/img/53.jpg" class="d-block w-100" alt="...">

                  </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
              <div class="card-body">
                <p class="card-text">ได้มีโอกาศเข้ารับการประเมินประกันสุขภาพของคณะวิทยาศาตร์ทั้ง 2 ปีการศึกษา</p>
              </div>
            </div>
          </div>
        </div>
        <!--การ์ดใบที่ 21-->
        <div class="col-md-6"> <!-- ใช้ 6 ส่วนของหน้าจอ -->
          <div class="card" style="width: 100%;">
            <div id="#" class="carousel slide">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="/public/img/54.jpg" class="d-block w-100" alt="...">

                </div>

              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
            <div class="card-body">
              <p class="card-text">ผู้ช่วยรองนายกองค์กรนักศึกษา ฝ่ายบริหาร มหาวิทยาลัยแม่โจ้</p>
            </div>
          </div>
        </div>
      </div>
      <!--การ์ดใบที่ 22-->
      <div class="col-md-6"> <!-- ใช้ 6 ส่วนของหน้าจอ -->
        <div class="card" style="width: 100%;">
          <div id="#" class="carousel slide">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="/public/img/55.jpg" class="d-block w-100" alt="...">

              </div>

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
          <div class="card-body">
            <p class="card-text">ได้มีโอกาศไปร่วมโครงการประชุมเครือข่ายนักศึกษาสิงค์อาสา ภาคเหนือ</p>
          </div>
        </div>
      </div>
    </div>
    <!--การ์ดใบที่ 23-->
    <div class="col-md-6"> <!-- ใช้ 6 ส่วนของหน้าจอ -->
      <div class="card" style="width: 100%;">
        <div id="#" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/public/img/56.jpg" class="d-block w-100" alt="...">

            </div>

          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
        <div class="card-body">
          <p class="card-text">ได้มีโอกาศเป็นพิธีกรงานดนตรีในสวน10วัน</p>
        </div>
      </div>
    </div>
    </div>
        </div>
  </div>
</template>

<style>
.card {
  width: 100%;
  height: 600px; /* กำหนดความสูงของการ์ด */
  overflow: hidden; /* ซ่อนส่วนเกินของภาพ */
  display: flex; /* ใช้ flexbox เพื่อจัดการตำแหน่ง */
  justify-content: center; /* จัดให้อยู่กลางแนวนอน */
  align-items: center;
  overflow: hidden;

}

.card img {
  width: 500px; /* ทำให้ภาพเต็มความกว้างของกรอบ */
  height: 550px; /* ทำให้ภาพเต็มความสูงของกรอบ */
  object-fit: contain; /* ปรับขนาดภาพให้เต็มกรอบ โดยไม่ตัดหรือยืด */
}

.navbar {
  background-color: #f8f9fa;
}

.navbar-brand {
  font-weight: bold;
  color: #000000;
  text-decoration: none;
}

.navbar-brand:hover {
  color: #0056b3;
}

.navbar-nav .nav-link {
  font-size: 1.1rem;
  color: #333;
  transition: color 0.3s;
}

.navbar-nav .nav-link:hover {
  color: #007bff;
}

.navbar-nav .nav-item {
  margin-left: 15px;
}

.navbar-toggler {
  border-color: #007bff;
}

.navbar-toggler-icon {
  background-color: #007bff;
}

.shadow-sm {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
