import api from "./axios";

const fetchRandomUser = ()=>{
    return api.get("/api");
}
export default fetchRandomUser;