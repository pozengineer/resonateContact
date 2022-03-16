import axios from "axios";
// const BASEURL = "https://randomuser.me/api/?inc=gender,name,email,picture";
const BASEURL = "https://jsonplaceholder.typicode.com/users";


export default {
    search: function () {
        return axios.get(BASEURL);
    }
};
