function download(img, name) {
    const link = document.createElement('a');
    link.href = img.src;
    link.download = name;
    link.click()
}

export default download