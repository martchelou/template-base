import { getPage, getModal } from './fetch.js';

const setupInteractions = () =>
{
    document.getElementById('content')?.addEventListener('click', e => 
    {
        const btn = e.target.closest('[data-action]');
        if (!btn) return;        
        const { action, id } = btn.dataset;        
        if (action === 'content') getPage(id+'.html', action, id.charAt(0).toUpperCase() + id.slice(1));
        if (action === 'modal') getModal(id+'.html');
    });
}
// home
document.getElementById('home').onclick = () => getPage('home.html','content', 'Home');

export {setupInteractions};