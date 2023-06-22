const api = process.env.REACT_APP_BACKEND_URL;


export async function getNotes(){
    const response = await fetch(`${api}/notes`)
    const json = await response.json()
    return json
}

export async function createNote(data){
    const response = await fetch(`${api}/notes`, {
        method: "POST",
        headers:{
            'Content-type':"application/json"
        },
        body: JSON.stringify(data)
    })
    const json = await response.json()
    console.log(json)
    return json
}