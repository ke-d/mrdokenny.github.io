import * as React from 'react';
import { Card } from 'react-bootstrap';
import Loading from './Loading';

interface CardProp {
  loading: boolean;
  error?: Error;
  title: string;
  style?: React.CSSProperties;
}
class LoadingCard extends React.Component<CardProp> {
  public render() {
    const { loading, title, error, style } = this.props;
    return (
      <Card style={style}>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          {loading ? (
            error ? (
              <p>Woops! There was an problem loading this card :(</p>
            ) : (
              <Loading height={50} />
            )
          ) : (
            this.props.children
          )}
        </Card.Body>
      </Card>
    );
  }
}

export default LoadingCard;
