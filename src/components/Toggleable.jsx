import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Toggleable extends Component {
    static propTypes = {
      render: PropTypes.func.isRequired,
    }

    constructor(props) {
      super(props);

      this.state = {
        isVisable: false,
      };
    }

    toggle = () => {
      const { isVisable } = this.state;
      const newState = !isVisable;
      this.setState({ isVisable: newState });
    }

      show = () => this.setState({ isVisable: true });

      hide = () => this.setState({ isVisable: false });

      render() {
        const { isVisable } = this.state;
        const { render } = this.props;
        return render({
          isVisable,
          toggle: this.toggle,
          show: this.show,
          hide: this.hide,
        });
      }
}
