const getUrlToModal = async (url) =>
{
    fetch(BASE_URL + url)
    .then(res => res.ok ? res.text() : Promise.reject(res))
    .then(data => modalOpen(data))
    .catch(error => console.error('Error fetching modal content:', error));
}
const getUrl = async (url,id,title="Template Base") =>
{
    document.getElementById(id).innerHTML = `<div class="spinner">loading</div>`;
    fetch(BASE_URL + url)
    .then(res => res.ok ? res.text() : Promise.reject(res))
    .then(data => document.getElementById(id).innerHTML = data)
    .catch(error => console.error('Error fetching result content:', error));
    document.title = title;
}