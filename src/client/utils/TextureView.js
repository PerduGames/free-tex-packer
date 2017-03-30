class TextureView {

    constructor() {
        this.view = document.createElement("canvas");
        this.view.style.border = "1px solid #000";
    }

    show(data, padding=0) {
        let ctx = this.view.getContext("2d");

        let width=0, height=0;

        for(let item of data) {
            if(item.x + item.width > width) {
                width = item.x + item.width;
            }
            if(item.y + item.height > height) {
                height = item.y + item.height;
            }
        }

        this.view.width = width;
        this.view.height = height;

        ctx.clearRect(0, 0, width, height);

        for(let item of data) {
            let img = item.image;

            if(item.rotated) {
                ctx.save();
                ctx.translate(item.x+item.width, item.y);
                ctx.rotate(Math.PI/2);
                ctx.drawImage(img, item.spriteSourceSize.x, item.spriteSourceSize.y, item.spriteSourceSize.w, item.spriteSourceSize.h, padding, padding, item.spriteSourceSize.w, item.spriteSourceSize.h);
                ctx.restore();
            }
            else {
                ctx.drawImage(img, item.spriteSourceSize.x, item.spriteSourceSize.y, item.spriteSourceSize.w, item.spriteSourceSize.h, item.x+padding, item.y+padding, item.spriteSourceSize.w, item.spriteSourceSize.h);
            }
        }
    }

}

export default TextureView;