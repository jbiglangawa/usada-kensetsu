export const getSubscribersCount = async() => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}youtube/current-subscribers-count`);
    return response.json();
}

export const getPekoraMinecraftVideoList = async() => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}youtube/pekora-minecraft-video`);
    return response.json();
}

export const getPekoraAllVideoList = async() => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}youtube/pekora-all-video`);
    return response.json();
}