import "./app-filter.css";

const AppFilter = (props) => {
  const buttonsData = [
    { name: "all", label: "Все сотрудники" },
    { name: "rise", label: "На повышение" },
    { name: "moreThen1000", label: "З/П больше 1000$" },
  ];

  const elements = buttonsData.map((item) => {
    if (item.name === "all") {
      return (
        <button type="button" className="btn btn-light" key={item.name} onClick={() => props.onFilterSelect(item.name)}>
          {item.label}
        </button>
      );
    } else {
      return (
        <button type="button" className="btn btn-outline-light" key={item.name} onClick={() => props.onFilterSelect(item.name)}>
          {item.label}
        </button>
      );
    }
  });
  return (
    <div className="btn-group">
      {elements}
      {/*<button type="button" className="btn btn-light">
        Все сотрудники
      </button>
      <button
        type="button"
        className="btn btn-outline-light"
        onClick={props.increaseFilter}
      >
        На повышение
      </button>
      <button type="button" className="btn btn-outline-light">
        З/П больше 1000$
  </button>*/}
    </div>
  );
};

export default AppFilter;
