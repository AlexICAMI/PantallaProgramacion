const CANTIDAD_COPOS = 400

        let fondo_negro = false

        let copos = []

        function setup() {
            createCanvas(windowWidth, windowHeight)
            for (let i = 0; i < CANTIDAD_COPOS; i++) {
                copo = new Copo()
                copo.y = random(height)
                copos.push(copo)
            }
        }

        function windowResized(){
            resizeCanvas(windowWidth, windowHeight)
        }

        function mousePressed(){
            fondo_negro = !fondo_negro
        }

        function draw() {
            clear()
            if(fondo_negro){
                background("black")
            }
            for (const copo of copos) {
                copo.dibujar()
            }
        }

        function Copo() {
            this.x = random(width)
            this.y = 0
            this.dy = random(1, 6)
            this.dibujar = function () {
                stroke("white")
                strokeWeight(this.dy)
                point(this.x, this.y)
                this.x += random(-1, 1)
                this.y += this.dy
                if (this.y > height) {
                    let i = copos.indexOf(this)
                    copos.splice(i, 1)
                    copos.push(new Copo())
                }
            }
        }