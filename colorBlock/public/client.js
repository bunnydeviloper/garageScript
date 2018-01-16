class ColorBlock {
  constructor (metric, color){
    this.e = document.createElement('div');
    document.body.appendChild(this.e);
    this.metric = metric;
    this.e.style.backgroundColor = color;
    this.e.style.display = 'inline-block';
    this.draw();
    this.e.onclick = this.grow.bind(this);
  }
  grow () {
    this.metric += 1;
    this.draw();
  }
  draw () {
    this.e.style.width = this.metric*40 + 'px';
    this.e.style.height = '40px';
    console.log(this.e);
  }
}

console.log('im here');
const a = new ColorBlock(3, 'blue');
