import React from 'react';
import Beards from '../assets/images/beard.jpg';
import Designs from '../assets/images/designs.jpg';
import Kids from '../assets/images/kids.jpg';
import Razor from '../assets/images/razor.jpg';

function Main() {
  return (
    <main>
      <section data-index="0" className="Beards">
        <div className="img-container">
          <img
            alt="Beards"
            src={Beards}
            onClick={() => (window.location.href = '/scheduling')}
          />
        </div>
        <h2>Beards</h2>
      </section>
      <section data-index="1" className="Designs">
        <div className="img-container">
          <h2>Designs</h2>
          <img
            alt="Designs"
            src={Designs}
            onClick={() => (window.location.href = '/scheduling')}
          />
        </div>
      </section>
      <section data-index="2" className="Kids">
        <div className="img-container">
          <img
            alt="Kids"
            src={Kids}
            onClick={() => (window.location.href = '/scheduling')}
          />
        </div>
        <h2>Kids</h2>
      </section>
      <section data-index="2" className="Razor">
        <div className="img-container">
          <h2>Razor</h2>
          <img
            alt="Razor"
            src={Razor}
            onClick={() => (window.location.href = '/scheduling')}
          />
        </div>
      </section>
    </main>
  );
}

export default Main;
