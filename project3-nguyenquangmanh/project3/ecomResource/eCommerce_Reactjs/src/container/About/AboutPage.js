import React from 'react';
import './AboutPage.scss';
function AboutPage(props) {
    let handleSaveVoucher = () => {
        props.sendDataFromVoucherItem(props.id)
    }
    return (
        <div className="introduction-container">
          <div className="info-section">
            <h1>K-Shop</h1>
            <h2>Liên Hệ Với Chúng Tôi</h2>
            <form className="contact-form">
            <label htmlFor="name">Họ và tên:</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="message">Tin nhắn:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            
            <button type="submit">Gửi</button>
            </form>
          </div>
          <div className="map-section">
            <iframe 
              title="Google Map" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.6273438291105!2d108.25379421047862!3d15.975594105275553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219b7501de701%3A0xd8f61319afabaab2!2zVHLGsOG7nW5nIMSR4bqhaSBo4buNYyBDTlRULVRUIFZp4buHdCAtIEjDoG4!5e0!3m2!1svi!2s!4v1721490083166!5m2!1svi!2s" 
              width="600" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy">
            </iframe>
          </div>
        </div>
      );
}

export default AboutPage;