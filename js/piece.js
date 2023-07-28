class Piece {
    constructor (ctx, rank, file, color) {
        this.ctx = ctx;
        this.rank = rank;
        this.file = file;
        this.color = color;
    }

    getPosition() {
        return this.rank + this.file;
    }
}