import './style/app.styl'
import p5 from 'p5'
import Polygon from './Polygon'

const s = (p5) => {
  

  p5.setup = () => {
    p5.createCanvas(500, 500);
  };

  p5.draw = () => {
    
    p5.background(0);

    const size = 50;
    for(let i = 0; i < 25; i++) {
      
      for (let j = 0; j < 25; j++) {
        // malla
        // p5.noFill();
        // p5.stroke(255)
        // p5.rect(i * size, j * size, size, size);
        // p5.noStroke()
        
        p5.push()
          p5.translate(i * size , j * size );  
          p5.fill(255);
          p5.ellipse(size / 2, size / 2, size, size)
          p5.fill(0);
          p5.ellipse(size / 2, size / 2, 0.6 * size, 0.6 * size)
          p5.fill(255);
        p5.ellipse(size / 2, size / 2, 0.3 * size, 0.3 * size)
        p5.pop()
      }
    }
  };
};

let myp5 = new p5(s);
