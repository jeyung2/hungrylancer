import logo from "./logo.svg";
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
    marginTop: theme.spacing.unit * 3,
    overflow: "auto",
  },
  table: {
    minWidth: 1080,
  },
});

const customers = [
  {
    id: 1,
    image: "https://picsum.photos/200/300?random=1",
    name: "홍길동",
    birthday: "123456",
    gender: "남자",
    job: "대학생",
  },
  {
    id: 2,
    image: "https://picsum.photos/200/300?random=2",
    name: "박제영",
    birthday: "711123",
    gender: "남자",
    job: "프리랜서",
  },
  {
    id: 3,
    image: "https://picsum.photos/200/300?random=3",
    name: "박현지",
    birthday: "111221",
    gender: "여자",
    job: "중학생",
  },
];

function App() {
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
          {customers.map((customer) => {
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
          })}
        </TableBody>
      </StyledTable>
    </StyledPaper>
  );
}

export default withStyles(styles)(App);
