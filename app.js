import axios from "axios";

const getData = async (input) => {

    let number = input;

    let endPointUsers = "https://jsonplaceholder.typicode.com/users?Id="+ number+"&id="+number;
    let endPointPosts = "https://jsonplaceholder.typicode.com/posts?userId="+ number;
    
    const {data : users} = await axios (endPointUsers);
    
    const {data : posts} = await axios (endPointPosts);
    
    let newObj = { users : users , posts : posts}

    return newObj;
};

export default getData;

