import React from "react";
import Jumbotron from "../../components/Jumbotron";
import { Row, Container } from "../../components/Grid";
import { ContactCard } from '../Contacts';
import { Card, Col } from 'react-bootstrap';
import "./style.css";

class ListHeader extends React.Component {
    state = {
        alphabetical: true,
        ascending: true,
        sortedEmployees: [],
        employees: [],
        matches: window.matchMedia("(min-width: 992px)").matches
    }

    componentDidMount() {
        const handler = e => this.setState({ matches: e.matches });
        window.matchMedia("(min-width: 768px)").addListener(handler);

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
            <Container fluid>
            <Jumbotron>
                <div className='pageTitleContainer'>
                    {this.state.matches && <h1>Contacts On My List</h1>}
                    {!this.state.matches && <h5>Contacts On My List</h5>}
                </div>
            </Jumbotron>
            <Row>
                <Col className='header'>
                    <Card.Title onClick={this.sortName} className="nameHeading">Name</Card.Title>
                </Col>
            </Row>
            <Row>
                {this.state.sortedEmployees && this.state.sortedEmployees.length &&
                    this.state.sortedEmployees.map((contact, index) => {
                        return (
                            <ContactCard key={contact.id} contact={contact} />
                        );
                    })
                }
                {this.state.sortedEmployees && !this.state.sortedEmployees.length && <h5>No Contacts to Display</h5>}
            </Row>
        </Container>
        );
    }
}

export default ListHeader;
