import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John", salary: 100, increase: true, id: 1, rise: true },
        { name: "Bob", salary: 1000, increase: false, id: 2, rise: false },
        { name: "Tom", salary: 10000, increase: false, id: 3, rise: false },
      ],
      term: "",
      filter: "",
    };
  }
  deleteItem = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const before = data.splice(0, index);
      const after = data.splice(index + 1);
      const newData = [...before, ...after];
      return { data: newData };
    });
  };
  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.state.data.length + 1,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };
  onTogleIncrease = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const old = data[index];
      const newItem = { ...old, increase: !old.increase };
      const newArray = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];
      return { data: newArray };
    });
  };
  onTogleRise = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const old = data[index];
      const newItem = { ...old, rise: !old.rise };
      const newArray = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];
      return { data: newArray };
    });
  };
  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };
  onUpdateSearch = (term) => {
    this.setState({ term: term });
  };
  filterPost = (items, filter) => {
    switch (filter) {
      case "rise":
        return items.filter((item) => item.rise);
      case "moreThen1000":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };
  onFilterSelect = (filter) =>{
    this.setState({filter:filter})
  }
  render() {
    const { data, term, filter } = this.state;
    const employees = this.state.data.length;
    console.log(employees);
    const increased = this.state.data.filter((item) => {
      return item.increase;
    }).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} data={data} onFilterSelect={this.onFilterSelect}
          />
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onTogleIncrease={this.onTogleIncrease}
          onTogleRise={this.onTogleRise}
        />
        <EmployeesAddForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
