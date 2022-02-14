import './employees-add-form.css';
import { Component } from 'react';
class EmployeesAddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            salary:0,
        }
    }
    onValueChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value,
        })

    }
    addNewItem = (e)=>{
        e.preventDefault();
        this.props.addItem(this.state.name, this.state.salary)
    }
    render(){
    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?" onChange={this.onValueChange} name="name"  value={this.state.name}/>
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?" onChange={this.onValueChange} name="salary" value={this.state.salary}/>

                <button type="submit"
                        className="btn btn-outline-light" onClick={this.addNewItem}>Добавить</button>
            </form>
        </div>
    )}
}

export default EmployeesAddForm;