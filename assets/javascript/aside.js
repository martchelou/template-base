const aside = document.querySelector('aside');
if (aside) 
{
    function asideClose() 
    {
      aside.classList.remove('open'); 
    }
    document.querySelector('#menu').addEventListener('click', (e) => 
    {
        e.preventDefault();
        aside.classList.toggle('open');
    });
    if (document.querySelector('#close')) 
    {
        document.querySelector('#close').addEventListener('click', (e) => 
        {
            e.preventDefault();
            asideClose();
        });
    }
}