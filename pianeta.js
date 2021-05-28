class pianeta {
    constructor(texture, diametro, distanza, tempoRivoluzione) {
        this.texture = texture;
        this.r = diametro / 2;
        this.cx = 0;
        this.cy = 0;
        this.distanza = distanza;
        this.tri = tempoRivoluzione;
        this.tro = 0.2;
        this.x = 0;
        this.y = 0;
        this.angoloRo = 0;
        this.angoloRi = 0;
        this.scalaTempo = 0;
        this.tro = 1000;
        //  this.inclinazione = radians(inclinazione);

    }

    updateCenter(x, y) {
        this.cx = x;
        this.cy = y;
    }

    update() {
        // calcola angolo secondo l'andamento del tempo
        this.angoloRi += scalaTempo * deltaTime * this.tri;


        this.x = this.distanza * cos(this.angoloRi) + this.cx;
        this.y = this.distanza * sin(this.angoloRi) + this.cy;

        this.angoloRo += scalaTempo * deltaTime * this.tro;
    }

    draw() {
        push()
        smooth();
        stroke(1);
        color(0);
        circle(this.x, this.y, this.r);
        translate(this.x, this.y, 0);
        rotateY(this.angoloRo);
        texture(this.texture);
        noStroke();
        sphere(this.r);
        translate(0, 0, 0);
        pop();

    }
}