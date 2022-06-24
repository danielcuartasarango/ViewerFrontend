const API_URL = "http://127.0.0.1:8000/api/root";


export const listGraph= async () => {
    return await fetch(API_URL);
};


export const registerGraph= async (newGraph) => {
    return await fetch(API_URL,{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : newGraph
    });
};


export const getGraphbyId = async(id)=> {
  
    var ids = API_URL+"/"+id;
    return await fetch(id)
};
export const getGraphbyIdf = async (id) => {
    return await fetch(API_URL+"/queyranne/"+id)
};
export const deleteGraph = async (id) => {
    return await fetch(API_URL+"/"+id, {
        method : 'DELETE'
    })
};