export async function createNewUser(username, password, userType){
    try {
        const newUser = {
            username: username,
            password: password,
            userType: userType
        };
        const response = await fetch(
            process.env.REACT_APP_FETCH_URL + "createNewUser",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin" : "*",
                    "referrerPolicy": "origin",
                },
                body: JSON.stringify(newUser)
            }
        );
        const data = await JSON.parse(response);
        console.log(data)
    } catch (error) {
        console.log(error)
    }
};
export async function authCheck(){
    try {
        const jwtToken = getCookie("jwt_token");
        const response = await fetch(
            process.env.REACT_APP_FETCH_URL + "checkPersistentLogin",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin" : "*",
                    "referrerPolicy": "origin",
                    "Authorization": `Bearer ${jwtToken}`
                },
            },
        );
        return await JSON.parse(response)
    } catch (error) {
        console.log(error)
    }
};
export function writeCookie (key, value, days) {
    let date = new Date()
    days = days || 365

    date.setDate(date.getDate() + days)

    let cookie = document.cookie = key + "=" + value + "; expires=" + date.toUTCString() + "; path=/"
    return cookie
};
export function getCookie (cookieName) {
    const re = new RegExp(`(?<=${cookieName}=)[^;]*`)
    console.log(re)
    try {
        let cookie = document.cookie.match(re)[0]
        console.log(cookie)
        return cookie
    } catch (error) {
        console.log('cookie not found')
        return false
    }
};
export async function loginUser(username, password){
    try {
        const response = await fetch(process.env.REACT_APP_FETCH_URL+"loginUser/", {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin" : "*",
                "referrerPolicy": "origin",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        });
        const data = await JSON.parse(response);
        writeCookie("jwt_token", data.token, 7);
        return {username: data.username, success: true}
    } catch (error) {
        console.log(error)
    }
};
export async function readPlayerCharacters(playerObject){
    try {
        const response = await fetch(process.env.REACT_APP_FETCH_URL+"readPlayerCharacters/", {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*",
                "referrerPolicy":"origin",
            },
            body: JSON.stringify(playerObject)

        });
        const data = await JSON.parse(response);
        return data
    } catch (error) {
        console.log(error)
    }
}
export async function updatePlayer(playerObject){
    try {
        const response = await fetch(process.env.REACT_APP_FETCH_URL+"updatePlayer/", {
            method: "PATCH",
            headers: {
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*",
                "referrerPolicy":"origin",
            },
            body: JSON.stringify(playerObject)
        });
        const data = await JSON.parse(response);
        return data
    } catch (error) {
        console.log(error)
    }
};
export async function updateCharacter(characterObject){
    try {
        const response = await fetch(process.env.REACT_APP_FETCH_URL+"updateCharacter/", {
            method: "PATCH",
            headers: {
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*",
                "referrerPolicy":"origin",
            },
            body: JSON.stringify(characterObject)
        });
        const data = await JSON.parse(response);
        return data.character        
    } catch (error) {
        console.log(error)
    }
};
export async function readPlayer(username){
    try {
        const response = await fetch(process.env.REACT_APP_FETCH_URL+"readPlayer/", {
            method: "PUT",
            headers: {
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*",
                "referrerPolicy":"origin",
            },
            body: JSON.stringify({username: username})
        });
        const data = await JSON.parse(response);
        return data
    } catch (error) {
        console.log(error)
    }
}