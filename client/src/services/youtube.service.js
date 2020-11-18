export const getSubscribersCount = async () => {
    const response = await fetch('youtube/current-subscribers-count');
    return response.json();
}