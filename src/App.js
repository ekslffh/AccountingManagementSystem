import React from "react";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "홍길동",
    birthday: "231222",
    gender: "남자",
    job: "의적",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "이순신",
    birthday: "080922",
    gender: "남자",
    job: "장군",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "나성민",
    birthday: "990201",
    gender: "남자",
    job: "상남자",
  },
];

class App extends React.Component {
  render() {
    return (
      <div>
        {customers.map((c) => {
          return (
            <Customer
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
