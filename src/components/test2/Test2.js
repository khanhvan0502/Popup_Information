import React from "react";
import "./_test2.css";
import TestImage from "../../images/test.png";

const Test2 = () => {
  const toggleMenu = () => {
    document.getElementById("side-menu").classList.toggle("active");
    document.getElementById("toggle-btn").classList.toggle("active");
  };

  const handleMouseMove = (e) => {
    let height = document.querySelector(".main").offsetHeight;
    let width = document.querySelector(".main").offsetWidth;
    let cursor = document.getElementById("cursor");

    let x = e.pageX + 15;
    let y = e.pageY;
    if (cursor) {
      if (height - y < 200 && width - x < 300) {
        cursor.style.right = x + "px";
        cursor.style.bottom = y + "px";
      } else if (height - y < 200) {
        cursor.style.left = x + "px";
        cursor.style.bottom = y + "px";
      } else if (width - x < 300) {
        cursor.style.right = x + "px";
        cursor.style.top = y + "px";
      } else {
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
      }
    }
  };

  const handleMouseLeave = () => {
    let cursor = document.getElementById("cursor");
    let main = document.querySelector(".main");
    cursor.style.display = "block";
    main.addEventListener("mousemove", handleMouseMove);
  };

  const handleMouseEnter = () => {
    let cursor = document.getElementById("cursor");
    let main = document.querySelector(".main");
    cursor.style.display = "none";
    main.removeEventListener("mousemove", handleMouseMove);
  };

  return (
    <div className="main">
      <div
        id="side-menu"
        className="sidebar"
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        <div className="top">
          <div className="top-content">
            <i className="fas fa-bars" />
            <p className="top-title">Tòa nhà A</p>
            <div className="top-content-right">
              <i className="fas fa-search" />
              <div className="top-before" />
              <i className="fas fa-times" />
            </div>
          </div>
        </div>
        <div className="banner">
          <img src={TestImage} alt="" />
          <div className="banner-content">
            <h4>Tòa nhà A</h4>
            <p>Địa điểm</p>
          </div>
        </div>
        <div className="direct">
          <div className="direct-list">
            <div className="direct-item">
              <div className="direct-item-icon">
                <i className="fas fa-arrow-circle-right" />
              </div>
              <p>Chỉ đường</p>
            </div>
            <div className="direct-item">
              <div className="direct-item-icon">
                <i className="fas fa-qrcode" />
              </div>
              <p>Mã địa chỉ</p>
            </div>
            <div className="direct-item">
              <div className="direct-item-icon">
                <i className="fas fa-share-alt" />
              </div>
              <p>Chia sẻ</p>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="content-list">
            <div className="content-item">
              <i className="fas fa-map-marker-alt" />
              <p className="content-item-decs">
                63 Phan Đăng Lưu, Phường Thạch Thang, Quận Hải Châu, Thành phố
                Đà Nẵng
              </p>
            </div>
            <div className="content-item">
              <i className="fas fa-clock" />
              <p className="content-item-date">Ngày bắt đầu:</p>
              <p>&nbsp; 24/1/2000</p>
            </div>
            <div className="content-item">
              <i className="fas fa-clock" />
              <p className="content-item-date">Ngày kết thúc:</p>
              <p>&nbsp; 29/11/2099</p>
            </div>
          </div>
          <div className="content-update">
            <i className="fas fa-pen" />
            <p>Đề xuất chỉnh sửa</p>
          </div>
        </div>
        <div className="info">
          <div className="info-list">
            <div className="info-item">
              <img src={TestImage} alt="" />
              <div className="info-content">
                <h4 className="info-title">
                  Công Ty Cổ Phần Đầu Tư Và Phát Triển Đô Thị Vạn Thịnh Phát
                </h4>
                <p className="info-desc">
                  Số 63 Lê Thanh Nghị, Phường Hòa Cường Bắc, Quận Hải Châu,
                  Thành Phố Đà Nẵng, Việt Nam
                </p>
              </div>
            </div>
            <div className="info-item">
              <img src={TestImage} alt="" />
              <div className="info-content">
                <h4 className="info-title">Nam Long Telecom Đà Nẵng</h4>
                <p className="info-desc">
                  Số 63 Lê Thanh Nghị, Phường Hòa Cường Bắc, Quận Hải Châu,
                  Thành Phố Đà Nẵng, Việt Nam
                </p>
              </div>
            </div>
            <div className="info-item">
              <img src={TestImage} alt="" />
              <div className="info-content">
                <h4 className="info-title">Công Ty A</h4>
                <p className="info-desc">
                  Số 63 Lê Thanh Nghị, Phường Hòa Cường Bắc, Quận Hải Châu,
                  Thành Phố Đà Nẵng, Việt Nam
                </p>
              </div>
            </div>
            <div className="info-item">
              <img src={TestImage} alt="" />
              <div className="info-content">
                <h4 className="info-title">Công Ty B</h4>
                <p className="info-desc">
                  Số 63 Lê Thanh Nghị, Phường Hòa Cường Bắc, Quận Hải Châu,
                  Thành Phố Đà Nẵng, Việt Nam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="toggle-btn"
        className="toggle"
        onClick={toggleMenu}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        <i className="fas fa-caret-left left" />
        <i className="fas fa-caret-right right" />
      </div>
      <div id="cursor"></div>
    </div>
  );
};

export default Test2;
