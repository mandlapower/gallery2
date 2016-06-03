var avatars = []
var stream_url = 'https://aes.yookos.com/v1/jomski2009/feeds/default';
var defaultStreamUrl = '';

var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4MmNkNzVkNi1hNGY3LTRjZmItOTVkNC0yZTI5NjgxYTg2ZmQiLCJzdWIiOiIzYjU5OTQ2Zi02Mzk3LTQ2NjgtYTdhZi1iYWIyZWNlNzAyNzMiLCJzY29wZSI6WyJvcGVuaWQiLCJwYXNzd29yZC53cml0ZSIsIm9hdXRoLmFwcHJvdmFscyJdLCJjbGllbnRfaWQiOiJ1c2VyYWNjb3VudCIsImNpZCI6InVzZXJhY2NvdW50IiwiYXpwIjoidXNlcmFjY291bnQiLCJncmFudF90eXBlIjoicGFzc3dvcmQiLCJ1c2VyX2lkIjoiM2I1OTk0NmYtNjM5Ny00NjY4LWE3YWYtYmFiMmVjZTcwMjczIiwidXNlcl9uYW1lIjoiam9tc2tpMjAwOSIsImVtYWlsIjoiam9tZUBlcmFjdGlvbi5vcmciLCJyZXZfc2lnIjoiMzFjZjBlNzEiLCJpYXQiOjE0NDY4MDcyODksImV4cCI6MTc2MjE2NzI4OSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3VhYS9vYXV0aC90b2tlbiIsInppZCI6InVhYSIsImF1ZCI6WyJ1c2VyYWNjb3VudCIsIm9wZW5pZCIsInBhc3N3b3JkIiwib2F1dGgiXX0.-8daR_i80E8Vix4fL6lY7E0yKIMaUhZ2pThl1J8BEek'
}

export const fetchAvatars = () =>{
    return fetch('https://aes.yookos.com/v1/ginald-tkb/feeds/public', {headers:headers}).then((response) =>{
        return response.json().then((json) => {
            return json.list.map((item) => item.actor.avatar)
        })
    })
}

export const fetchActivities = (url) => {
    console.log(url);
    return fetch(url, {headers:headers}).then((response) => {
        return response.json().then((json)=>{
            console.log(json)
            return json
        })
    })
}

