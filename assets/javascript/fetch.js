import { BASE_URL } from "./base.js";
import { setupInteractions } from "./nav.js";
import { modalOpen } from "./modal.js";

const getData = async (url) => 
{
    try {
        return await fetch(BASE_URL + url).then(res => res.ok ? res.text() : Promise.reject(res));
    } catch (error) {
        console.error('Error fetching modal content:', error);
        throw error;
    }    
}
const getModal = async (url) => 
{
    try {
        const data = await getData(url);
        modalOpen(data);
    } catch (error) {
        console.error('Error fetching modal content:', error);
    }
}
const getPage = async (url,id,title="Template Base") => 
{
    document.getElementById(id).innerHTML = `<div class="spinner">loading</div>`;
    document.title = title;
    try {
        const data = await getData(url);
        document.getElementById(id).innerHTML = data
        setupInteractions()
    } catch (error) {
        document.getElementById(id).innerHTML = `<p>Error loading content.</p>`;        
    }    
}

export {getPage, getData, getModal};