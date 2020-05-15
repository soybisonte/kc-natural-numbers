import './style/app.styl'
import p5 from 'p5'
import Polygon from './Polygon'

const s = (p5) => {
  
  let poly = new Polygon(p5);

  p5.setup = () => {
    p5.createCanvas(500, 500);
  };

  p5.draw = () => {
    
    p5.translate(p5.width / 2, p5.height / 2);
    p5.background(0);
    p5.noFill();
    p5.stroke(255, 142);
    
    p5.line(0, 0, p5.width, 0);
    p5.line(0, 0, -p5.width, 0);
    p5.line(0, 0, 0, p5.height);
    p5.line(0, 0, 0, -p5.height);

    p5.stroke(255);

    poly.render();
  };
};

let myp5 = new p5(s);
