const { default: fetch } = require('node-fetch');
const FormData = require('form-data')

const imgurAPIURL = "https://api.imgur.com/3/image/";

const uploadImage = async (imageString, user) => {
    if(!imageString) return

    const form = new FormData();
    form.append('image', imageString.replace(/^data:image\/png;base64,/, ""));
    form.append('type', 'base64');
    if(user) {
        form.append('title', user && 'Generated PekoCard - ' + user.name)
        form.append('body', JSON.stringify(user))
    }

    const response = await fetch(imgurAPIURL, {
        method: 'POST',
        headers: { 'Authorization': `Client-ID ${process.env.IMGUR_CLIENT_ID}` },
        body: form
    });

    const json = await response.json();

    if(json.success && json.status === 200) {
        return json.data.id;
    }else {
        return null;
    }
}

const getImage = async (imageString) => {
    if(!imageString) return null;

    const response = await fetch(imgurAPIURL + imageString, {
        method: 'GET',
        headers: { 'Authorization': `Client-ID ${process.env.IMGUR_CLIENT_ID}` }
    });

    const json = await response.json();
    
    if(json.success && json.status === 200) {
        const { id, description } = json.data;
        const userParsed = JSON.parse(description);
        const user = {
            id: id,
            name: userParsed.name,
            photo: userParsed.photo,
            secret: userParsed.secret
        };

        return user;
    }else {
        return null;
    }
}

module.exports = { uploadImage, getImage }