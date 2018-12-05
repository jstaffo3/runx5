function scaleSprite(object, scale) {
    object.scale.setTo(scale);
    object.body.setRectangle(object.width, object.height);
}