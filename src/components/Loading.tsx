import * as React from 'react';
// tslint:disable-next-line:import-name
import Spinner from 'react-spinner-material';
const offset = 50;

const styles = {
  center: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
};

interface LoadingProps {
  height?: number;
}

class Loading extends React.Component<LoadingProps> {
  public state = {
    height: window.innerHeight - offset,
  };

  public updateDimensions() {
    const newHeight = window.innerHeight - offset;
    this.setState({
      height: newHeight,
    });
  }

  public componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }
  public render() {
    const { height } = this.props;
    return (
      <div
        style={{
          ...styles.center,
          height: `${height ? height : window.innerHeight - 50}px`,
        }}
      >
        <Spinner
          size={height ? height : 120}
          spinnerColor={'#333'}
          spinnerWidth={5}
          visible={true}
        />
      </div>
    );
  }
}

export default Loading;
