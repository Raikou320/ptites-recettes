const toImg = function (canvas) {
    const img = canvas.toDataURL('image/png')
    return img
}

export default toImg