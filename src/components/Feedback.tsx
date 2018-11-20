import * as React from 'react';
import { Button, Checkbox, FormControl, FormGroup } from 'react-bootstrap';

class Feedback extends React.Component {
  public state = {
    email: '',
    honeyPot: '',
    isAnon: false,
    submitted: false,
    text: { value: '', validation: null },
  };

  public onSubmitButton() {
    if (this.state.text.value.length > 0 && this.state.honeyPot === '') {
      fetch('https://api.kennydo.com/feedback', {
        body: JSON.stringify({
          text: this.state.text,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      this.setState({ submitted: true });
    }
  }

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
        <form
          target="frame"
          action="/redirect"
          onSubmit={() => this.onSubmitButton()}
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
        <iframe style={{ display: 'none' }} name="frame" />
      </div>
    );
  }
}

export default Feedback;
