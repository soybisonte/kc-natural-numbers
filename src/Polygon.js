import * as p5 from 'p5'

export default class Polygon {
    constructor(p5, options) {
        this.p5 =  p5;
        this.apothema = options.apothema;
        this.edges = options.edges;
        this.center = options.center;
    }
    render () {
        const { p5, apothema, edges, center } = this
        // p5.ellipse(0, 0, 100, 100);
        let dA = 2 * Math.PI / edges;
        
        p5.beginShape();
            for(var i = 0; i < edges; i++) {
                let x = apothema * Math.cos(dA * i) + center.x;
                let y = apothema * Math.sin(dA * i) + center.y;
                p5.vertex(x, y);
            }
        p5.endShape(p5.CLOSE);
    }
}