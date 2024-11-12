//import logo from "./logo.svg";
import "./App.css";
import CustomerTable from "./components/CustomerTable";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
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
});

class App extends Component {
  state = {
    customers: "",
  };

  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ customers: res }))
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("api/customers");
    const body = await response.json();
    return body;
  };

  render() {
    //const { classes } = this.props;
    return (
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
            {this.state.customers
              ? this.state.customers.map((customer) => {
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
              : ""}
          </TableBody>
        </StyledTable>
      </StyledPaper>
    );
  }
}
export default withStyles(styles)(App);
