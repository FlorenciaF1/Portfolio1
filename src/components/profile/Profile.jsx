import React from 'react'
import './profile.css'


var acc = document.getElementsByClassName("accordion1");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const Profile = () => {
  return (
    <div className='profile-container'>

      <div className='title1'>
        <a className="r0"></a>
        <button class="accordion1">Recommendations</button >
      </div>

      <div className="panel">

        <div>
          <a className="r1"></a>
          <a className='a'> Juan Camilo Codina Ariza </a>
        </div>

        <div>
          <a className="r2"></a>
          <a className='a'>Paulina Gadea</a>
        </div>

        <div>
          <a className="r3"></a>
          <a className='a'>Walter Celiz</a>
        </div>

        <div>
          <a className="r4"></a>
          <a className='a'>Marlon moreno Pérez</a>
        </div>

        <div>
          <a className="r5"></a>
          <a className='a'>Julio Andrés Cariajano Reyes</a>
        </div>

        <div>
          <a className="r6"></a>
          <a className='a'>Ver más</a>
        </div>

      </div>
    </div>
  )
}

export default Profile