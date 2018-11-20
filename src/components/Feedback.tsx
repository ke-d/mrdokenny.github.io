import graphqlTag from 'graphql-tag';
import * as React from 'react';
import { Mutation } from 'react-apollo';
import { Button, Checkbox, FormControl, FormGroup } from 'react-bootstrap';

const ADD_FEEDBACK = graphqlTag`
  mutation AddFeedBack ($text: String!){
    createFeedBack(text: $text)
  }
`;

class Feedback extends React.Component {
  public state = {
    email: '',
    honeyPot: '',
    isAnon: false,
    submitted: false,
    text: { value: '', validation: null },
  };

  public render() {
    if (this.state.submitted) {
      return (
        <p>
          <b>Thank you for the submission.</b>
        </p>
      );
    }
    return (
      <div>
        <p>
          <b>Or Send an Anonymous Comment</b>
        </p>
        <Mutation mutation={ADD_FEEDBACK}>
          {
            addFeedback => (
              <form
                target="frame"
                action="/redirect"
                onSubmit={(e) => {
                  e.preventDefault();
                  addFeedback({ variables: { text: this.state.text } });
                  this.setState({ submitted: true });
                }}
              >
                <FormGroup
                  controlId="text"
                  validationState={this.state.text.validation}
                >
                  {/* <Checkbox onChange={(e) => this.setState({ isAnon: e.target.checked, email: "" })}>
                          Anonymous
                      </Checkbox>
                      {
                          !this.state.isAnon &&
                              <FormControl
                              type="email"
                              placeholder="Email"
                              value={this.state.email}
                              onChange={(e) => this.setState({ email: e.target.value })}/>
                      } */}
                  <textarea
                    value={this.state.text.value}
                    onChange={e =>
                      this.setState({
                        text: {
                          validation: e.target.value === '' ? 'error' : 'success',
                          value: e.target.value,
                        },
                      })
                    }
                    className="form-control"
                  />
                </FormGroup>
                <div style={{ display: 'none' }}>
                  <label>Keep this field blank</label>
                  <input
                    value={this.state.honeyPot}
                    onChange={e => this.setState({ honeyPot: e.target.value })}
                    type="text"
                  />
                </div>
                <Button style={{ marginTop: '7px', float: 'right' }} type="submit">
                  Submit
            </Button>
              </form>
            )
          }
        </Mutation>
        <iframe style={{ display: 'none' }} name="frame" />
      </div>
    );
  }
}

export default Feedback;
