// import Frame from './frame.vue';
// export default Frame;
function Frame(width, height) {

    if (!(this instanceof Frame)) {
        return new Frame(width, height);
    }

    this.width = width;
    this.height = height;

    return this;
}
export { Frame };