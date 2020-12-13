const { default: fetch } = require('node-fetch');
const FormData = require('form-data');

const imgurAPIURL = "https://api.imgur.com/3/image/";
const header = { 'Authorization': `Client-ID ${process.env.IMGUR_CLIENT_ID}` };

const uploadImage = async (imageString, user) => {
    if(!imageString) return

    const form = new FormData();
    form.append('image', imageString.replace(/^data:image\/png;base64,/, ""));
    form.append('type', 'base64');
    form.append('title', user && user.name + ' - PekoCard');

    const response = await fetch(imgurAPIURL, {method: 'POST', headers: header, body: form});
    const json = await response.json();

    if(json.success && json.status === 200) {
        updateImage(json.data.id, json.data.deletehash, user);
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
        const { description } = json.data;
        return description;
    }else {
        return null;
    }
}

const updateImage = (id, deleteHash, user) => {
    const twitterDisplayName = user.provider === 'twitter' ? `\nTwitter username: @${user.username}` : '';
    console.log(twitterDisplayName);
    const description = `This is an auto-generated PekoCard. To view/download/print the image, visit:\n${process.env.CLIENT_URL + '/pekoCard/' + user.name.replace(' ', '-') + '_' + id}\n\nEmployee Name: ${user.name}\nEmployee ID: ${user.employeeID}\nPhoto Source: ${user.photo}` + twitterDisplayName;
    
    const form = new FormData();
    form.append("description", description);

    // Update the description with the generated ID. No need to wait for this one
    fetch(imgurAPIURL + deleteHash, {method: 'POST', headers: header, body: form});
}

module.exports = { uploadImage, getImage }