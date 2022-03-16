import React from "react";
import "./style.css";
import Card from '../Card';

class ListHeader extends React.Component {

    state = {
        alphabetical: true,
        ascending: true,
        sortedEmployees: [],
        employees: []
    }

    componentDidMount() {
        if (this.state.sortedEmployees.length < 1) {
            this.setState({
                sortedEmployees: this.props.empList
            })
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.empList !== prevProps.empList) {
            this.setState({
                sortedEmployees: this.props.empList
            })
        }
    }

    sortName = () => {
        let sortEmp = [];
        if (this.state.alphabetical) {
            sortEmp = this.props.empList.sort((a, b) => {
                var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                if (nameA < nameB)
                    return -1
                if (nameA > nameB)
                    return 1
                return 0
            })
        } else {
            sortEmp = this.props.empList.sort((a, b) => {
                var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                if (nameA > nameB)
                    return -1
                if (nameA < nameB)
                    return 1
                return 0
            })
        }
        this.setState({
            alphabetical: !this.state.alphabetical,
            sortedEmployees: sortEmp

        })
    }

    sortId = () => {
        let sortEmp = [];
        if (this.state.ascending) {
            sortEmp = this.props.empList.sort((a, b) => {
                var nameA = a.id, nameB = b.id;
                if (nameA < nameB)
                    return -1
                if (nameA > nameB)
                    return 1
                return 0
            })
        } else {
            sortEmp = this.props.empList.sort((a, b) => {
                var nameA = a.id, nameB = b.id;
                if (nameA > nameB)
                    return -1
                if (nameA < nameB)
                    return 1
                return 0
            })
        }
        this.setState({
            ascending: !this.state.ascending,
            sortedEmployees: sortEmp

        })
    }

    render() {
        return (

            <div>
                <div className="header">
                    <div><p onClick={this.sortId} className="id">Id</p></div>
                    <div><p onClick={this.sortName} className="name">Name</p> </div>
                    <div>Company</div>
                    <div>City</div>
                    <div>Phone No.</div>
                    <div>Email</div>
                </div>

                {
                    this.state.sortedEmployees.length > 0 &&
                    this.state.sortedEmployees.map((item, index) => (

                        <Card 
                            key={index}
                            id={item.id}
                            name={item.name}
                            company={item.company.name}
                            city={item.address.city}
                            phone={item.phone}
                            email={item.email}
                        />
                    ))
                }
            </div>
        );
    }
}

export default ListHeader;
