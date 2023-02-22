import React from 'react'
import './certificates.css'

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    
    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 

const Explore = () => {
  return (
    <div className='certificates-container'>
          <button  className="accordion">Certificates</button >
          <div className="panel">
            <a href='https://certificates.soyhenry.com/cert?id=b8170bdc-7e5d-485a-b3cd-6e2cd43e1ab7' target='_blank'>Full Stack Web Developer</a>
            <a href='https://www.efset.org/cert/qmNebq' target='_blank'>B2 Upper Intermediate</a>
            <a href='https://www.credly.com/badges/85c9081f-979b-49d7-9dce-28ce7cdb20d8/public_url' target='_blank'>Scrum Foundation Professional Certificate</a>
            <a href='https://drive.google.com/file/d/1pyf2nd2BiQ0w_ROqkBcu4HrV4ut3O1RI/view?usp=sharing' target='_blank'>Introduccion al Desarrollo Web I</a>
            <a href='https://drive.google.com/file/d/1kI8eUY_KUKXuVl_OXJFxHriUA52kerMs/view?usp=sharing' target='_blank'>Introduccion al Desarrollo Web II</a>
            <a href='https://www.educacionit.com/perfil/florencia-fernandez-861340/certificado/54677' target='_blank'>Introducción a la Programación</a>
          </div>
    </div>
  )
}

export default Explore