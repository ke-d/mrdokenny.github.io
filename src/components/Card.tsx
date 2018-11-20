import * as React from 'react';
import { Panel } from 'react-bootstrap';
import Loading from './Loading';

interface CardProp {
  loading: boolean;
  error: number;
  title: string;
}
class Card extends React.Component<CardProp> {
  public render() {
    const { loading, title, error } = this.props;
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3">{title}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          {loading ? (
            error !== 0 ? (
              <p>Woops! There was an problem loading this card :(</p>
            ) : (
                <Loading height={50} />
              )
          ) : (
              this.props.children
            )}
        </Panel.Body>
      </Panel>
    );
  }
}

export default Card;
