import React from "react";
//import { post } from "axios";
import axios from "axios";

class CustomerAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      userName: "",
      birthday: "",
      gender: "",
      job: "",
      fileName: "",
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.addCustomer().then((response) => {
      console.log(response.data);
    });
  };

  handleFileChange = (e) => {
    this.setState({
      file: e.target.files[0],
      fileName: e.target.value,
    });
  };
  handleValueSubmit = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  addCustomer = () => {
    const url = "/api/customers";
    const formData = new FormData();
    formData.append("image", this.state.file);
    formData.append("userName", this.state.userName);
    formData.append("birthday", this.state.birthday);
    formData.append("gender", this.state.gender);
    formData.append("job", this.state.job);

    const config = {
      header: {
        "content-type": "multipart/form-data",
      },
    };
    return axios(url, formData, config);
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <h1>고객추가</h1>
        프로필 이미지:
        <input
          type="file"
          name="file"
          file={this.state.file}
          value={this.state.fileName}
          onChange={this.handleFileChange}
          placeholder="Search..."
          readOnly={false}
        />
        <br />
        이름:
        <input
          type="text"
          name="userName"
          //value={this.state.userName}
          onChange={this.handleValueChange}
        />
        <br />
        생년월일:
        <input
          type="text"
          name="birthday"
          //value={this.state.birthday}
          onChange={this.handleValueChange}
          placeholder="Search..."
          readOnly={false}
        />
        <br />
        성별:
        <input
          type="text"
          name="gender"
          //value={this.state.gender}
          onChange={this.handleValueChange}
          placeholder="Search..."
          readOnly={false}
        />
        <br />
        직업:
        <input
          type="text"
          name="job"
          //value={this.state.job}
          onChange={this.handleValueChange}
          placeholder="Search..."
          readOnly={false}
        />
        <button type="submit" defaultValue="">
          추가하기
        </button>
      </form>
    );
  }
}

export default CustomerAdd;
