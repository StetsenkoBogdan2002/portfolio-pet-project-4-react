import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({
  data,
  onDelete,
  onTogleRise,
  onTogleIncrease,
}) => {
  let items = data.map((item) => {
    return (
      <EmployeesListItem
        name={item.name}
        salary={item.salary}
        increase={item.increase}
        rise={item.rise}
        key={item.id}
        onDelete={() => onDelete(item.id)}
        onTogleIncrease={() => onTogleIncrease(item.id)}
        onTogleRise={() => onTogleRise(item.id)}
      />
    );
  });
  return <ul className="app-list list-group">{items}</ul>;
};

export default EmployeesList;
