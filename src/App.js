import logo from "./logo.svg";
import "./App.css";
import Customer from "./components/Customer";

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
    <div>
      {customers.map((customer) => {
        return (
          <Customer
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
    </div>
  );
}

export default App;
