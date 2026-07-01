import { BASE_URL } from "./base.js";
import { setupInteractions } from "./nav.js";
import { modalOpen } from "./modal.js";

const getData = async (url) => 
{
    try {
        const resp = await fetch(BASE_URL + url);
        if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`);
        return resp.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }    
}
const getText = async (url) =>
{
    try {
        const page = await fetch(BASE_URL + url);
        if (!page.ok) throw new Error(`HTTP error! status: ${page.status}`);
        return page.text();
    } catch (error) {
        console.error('Error fetching text:', error);
        throw error;
    }
}
const getModal = async (url) => 
{
    try {
        const data = await getText(url);
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
        const data = await getText(url);
        document.getElementById(id).innerHTML = data;
        setupInteractions();        
    } catch (error) {
        document.getElementById(id).innerHTML = `<p>Error loading content.</p>`;        
    }    
}
export {getPage, getData, getModal};