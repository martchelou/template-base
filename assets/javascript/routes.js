import { getPage } from './fetch.js'

switch (location.hash)
{
    case '':
    case '#home':
        getPage('home.html','content','Home');        
        break;
    case '#about':
        getPage('about.html','content','About');
        break;
    default:
        throw new Error('Eita!!! A rota não existe');    
        break;
}