const ToggleableMixin = {
  getInitialState() {
    return { isVisible: false };
  },
  toggle() {
    const { isVisable } = this.state;
    const newState = !isVisable;
    this.setState({ isVisable: newState });
  },
  show() {
    this.setState({ isVisable: true });
  },

  hide() {
    this.setState({ isVisable: false });
  },
};


export default ToggleableMixin;
