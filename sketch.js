// todo
// caricare in preload tutte le texture in un object js


let volta;
let pianeti = [];
let scalaTempo = 0.000001;
let scalaDimensioni = 0.5;
let scalaDistanze = 1.3;
let pianeticsv;

function preload() {

    pianeticsv = loadTable("solar_system_calc.csv", "ssv", "header");
    volta = loadImage("textures/2k_stars_milky_way.jpg");
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(255);
    for (var i = 0; i < pianeticsv.getRowCount(); i++) {
        let texture = pianeticsv.getString(i, "texture");
        console.log(toString(texture));
        let diametro = pianeticsv.getNum(i, "diameter");
        let orbita = pianeticsv.getNum(i, "orbit");
        let rivoluzione = pianeticsv.getNum(i, "rivoluzione") / 100;
        pianeti.push(new pianeta(loadImage(texture), diametro, orbita, rivoluzione));
    }

}

function draw() {

    clear();
    texture(volta);
    sphere(900);
    orbitControl();
    for (var i = 0; i < pianeti.length; i++) {
        pianeti[i].draw();
        pianeti[i].update();
    }


}