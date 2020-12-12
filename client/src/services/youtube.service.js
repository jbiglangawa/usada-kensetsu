export const getSubscribersCount = async () => {
    const response = await fetch(process.env.REACT_APP_API_URL + 'youtube/current-subscribers-count');
    return response.json();
}