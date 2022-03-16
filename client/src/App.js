import React from 'react';
import './App.css';
import axios from "axios";
import SiteHead from './components/SiteHead';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {

    state = {
        employees: [],
    };

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        // axios.get(`https://randomuser.me/api/?results=20&nat=Aus`)
        .then(res => {
            this.setState({ employees: res.data });
            // console.log(res.data);
        });
    }


    render() {
        return (
            <Router>
                <div className="App">
                    <SiteHead />
                    {this.state.employees.length > 0 &&
                    <Navbar employees={this.state.employees} />
                    }
                </div>
            </Router>
        );
    }
}

export default App;
