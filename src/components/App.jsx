import { Form } from './Form/Form';
import s from './App.module.css';
import { Component } from 'react';
import { Profile } from './Profile/Profile';

export class App extends Component {
  state = {
    isFormFilled: false,
    formData: {},
  };

  handleSubmitFirm = data => {
    this.setState({ isFormFilled: true, formData: data });
  };

  render() {
    const { isFormFilled } = this.state;

    return (
      <div className={s.container}>
        {isFormFilled ? (
          <Profile data={this.state.formData} />
        ) : (
          <Form onSubmit={this.handleSubmitFirm} />
        )}
      </div>
    );
  }
}
