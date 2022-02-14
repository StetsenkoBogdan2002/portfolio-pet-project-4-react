import "./employees-list-item.css";

const EmployeesListItem = (props) => {
  const { name, salary, onDelete, onTogleIncrease, onTogleRise, increase, rise } = props;
  let mainClass = "list-group-item d-flex justify-content-between";
  if (increase) {
    mainClass += " increase";
  }
  if (rise) {
    mainClass += " like";
  }
  return (
    <li className={mainClass}>
      <span onClick={onTogleRise} className="list-group-item-label">
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + "$"}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={onTogleIncrease}
          type="button"
          className="btn-cookie btn-sm "
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn-sm " onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
