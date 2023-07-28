class Board {
    constructor(idCanvas) {
        this.canvas = document.getElementById(idCanvas);
        this.ctx = this.canvas.getContext("2d");
        this.pieces = [];
        this.rank = ["8","7","6","5","4","3","2","1"];
        this.file = ["a","b","c","d","e","f","g","h"];
    }

    draw (colorBlack="#eeeed2", colorWhite="#630") {
        for (var i = 0; i < 8; i++) {
            // Draw position names
            this.ctx.fillStyle = "#000";
            this.ctx.fillText(this.file[i], i * 45 + 10 + 22  , 8);
            this.ctx.fillText(this.file[i], i * 45 + 10 + 22  , 380-3);
            this.ctx.fillText(this.rank[i],  2 , i * 45 + 10 + 28);
            this.ctx.fillText(this.rank[i],  380-8 , i * 45 + 10 + 28);
            // Draw squares
            for (var j = 0; j < 8; j++) {
                this.ctx.beginPath();
                this.ctx.fillStyle = [colorBlack, colorWhite][(i + j) % 2];
                this.ctx.fillRect(j * 45 + 10, i * 45 + 10, 45, 45);
                this.ctx.closePath();
            }
        }
    }

}