//import logo from "./logo.svg";
import "./App.css";
import CustomerTable from "./components/CustomerTable";
import CustomerAdd from "./components/CustomerAdd";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  CircularProgress,
} from "@material-ui/core/";
import { withStyles, styled } from "@material-ui/core/styles";
import { Component } from "react";

// Styled 컴포넌트 정의
const StyledPaper = styled(Paper)({
  width: "100%",
  marginTop: "24px",
  overflow: "auto",
});

const StyledTable = styled(Table)({
  minWidth: 1080,
});

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3), //theme.spacing.unit * 3,
    overflow: "auto",
  },
  table: {
    minWidth: 1080,
  },
  progress: {
    margin: theme.spacing(2),
  },
});

class App extends Component {
  state = {
    customers: "",
    completed: 0,
  };

  //1. constructor()
  //2. componentWillMount()
  //3. render()
  //4. componentDidMount()
  //5. props or state => shouldComponentUpdate()

  componentDidMount() {
    //this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then((res) => this.setState({ customers: res }))
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("api/customers");
    const body = await response.json();
    return body;
  };

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
    console.log("completed " + completed);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <StyledPaper>
          <StyledTable>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>생일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.customers ? (
                this.state.customers.map((customer) => {
                  return (
                    <CustomerTable
                      key={customer.id}
                      id={customer.id}
                      name={customer.name}
                      image={customer.image}
                      birthday={customer.birthday}
                      gender={customer.gender}
                      job={customer.job}
                    />
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan="6" align="center">
                    <CircularProgress
                      className={classes.progress}
                      variant="determinate"
                      value={this.state.completed}
                    />
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </StyledTable>
        </StyledPaper>
        <CustomerAdd />
      </div>
    );
  }
}
export default withStyles(styles)(App);
