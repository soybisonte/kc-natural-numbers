import * as p5 from 'p5'

export default class Polygon {
    constructor(p5) {
        this.p5 =  p5
    }
    render () {
        const { p5 } = this
        p5.ellipse(0, 0, 30, 30);
    }
}