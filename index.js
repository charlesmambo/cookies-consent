const modalPopContainer = document.getElementById('modal-pop-up');
const loginForm = document.getElementById('login-form');
const closeBtn = document.getElementById('close-btn');
const articles = document.querySelectorAll('article');
const articleLinks = document.querySelectorAll('.read-more');
const modalText = document.getElementById('modal-text');
const declineBtn = document.getElementById('decline-btn');
const modalBtns = document.getElementById('modal-btn-container');

closeBtn.addEventListener('click', function(){
    modalPopContainer.style.display = 'none';
});

declineBtn.addEventListener('mouseenter', ()=>{
    modalBtns.classList.toggle('modal-btn-container-reverse')
    console.log('entered')
})

loginForm.addEventListener('submit', function(e){
    e.preventDefault();

    const formData = new FormData(loginForm);
    const getFullName = formData.get('fullName');
    
    modalText.innerHTML = `
    <div class="modal-inner-loading">
      <img src="images/loading.svg" class="loading">
      <p id="upload-text">Uploading your data to the dark web...</p>
     </div>
    `

    setTimeout(function(){
       document.getElementById('upload-text').innerHTML = ` Making the sale...`
    }, 1500)


    setTimeout(function(){
        document.getElementById('inner-modal').innerHTML = `
        <h2>Congratulations <span class="modal-display-name"> ${getFullName}</span>, 🎉! </h2>
        <p>Now you can read our latest daily news</p>
        <div class="idiot-gif">
            <img src="images/celebra.gif">
        </div>
        `
        closeBtn.disabled = false;
        closeBtn.addEventListener('click', function(){
            articles.forEach(article =>{
                article.classList.remove('fade-away')
            })
            articleLinks.forEach(articleLink =>{
                articleLink.classList.remove('article-link')
            })
        });
       
     }, 3000)

})

setTimeout(() =>{
    modalPopContainer.style.display = 'block';
    
}, 1500)

setTimeout(() =>{
    articles.forEach(article =>{
        article.classList.add('fade-away')
    })
    articleLinks.forEach(articleLink =>{
        articleLink.classList.add('article-link')
    })
    
}, 3000)

