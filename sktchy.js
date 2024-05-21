// Variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

// Velocidade da bolinha
let velocidadeXBolinha = 4;
let velocidadeYBolinha = 4;

// Variáveis da raquete do jogador
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

// Variáveis da raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente = 6;

let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600, 400);
}
function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}
function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}
function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}
function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}
function mostraRaquete(x, y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}
function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}
function verificaColisaoRaquete(x, y) {
  if (
    xBolinha - raio < x + raqueteComprimento &&
    xBolinha + raio > x &&
    yBolinha + raio > y &&
    yBolinha - raio < y + raqueteAltura
  ) {
    velocidadeXBolinha *= -1;
  }
}
function movimentaRaqueteOponente() {
  if (yBolinha < yRaqueteOponente + raqueteAltura / 2) {
    yRaqueteOponente -= velocidadeYOponente;
  } else {
    yRaqueteOponente += velocidadeYOponente;
  }
  // Impede que a raquete do oponente saia da tela
  yRaqueteOponente = constrain(yRaqueteOponente, 0, height - raqueteAltura);
}
function incluiPlacar() {
  textAlign(CENTER);
  textSize(16);
  fill(255);
  text(meusPontos, 278, 26);
  text(pontosDoOponente, 321, 26);
}
function marcaPonto() {
  if (xBolinha > width - raio) {
    meusPontos += 1;
    resetaBolinha();
  }
  if (xBolinha < 0 + raio) {
    pontosDoOponente += 1;
    resetaBolinha();
  }
}
function resetaBolinha() {
  xBolinha = width / 2;
  yBolinha = height / 2;
  velocidadeXBolinha *= -1;
}
