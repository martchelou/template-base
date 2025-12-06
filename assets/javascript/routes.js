switch (location.hash)
{
    case '':
    case '#home':
        getUrl('home.html','result','Home');
        break;
    case '#about':
        getUrl('about.html','result','About');
        break;
    default:
        throw new Error('Eita!!! A rota não existe');    
        break;
}