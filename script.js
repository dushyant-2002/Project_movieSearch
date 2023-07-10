const inp = document.querySelector('#inp');
const btn = document.querySelector('button');


btn.addEventListener('click',()=>{
    const search = inp.value;
    getMovies(search);
    
})
inp.addEventListener('keypress',(e)=>{
    if(e.keyCode===13){
    const search = inp.value;
    getMovies(search);
    // console.log(search);
    // console.log(e);
    }
    
})
function getMovies(search){
    const url = `https://api.tvmaze.com/search/shows?q=${search}`;
    const container = document.querySelector('.container');
    container.innerText="";
    axios.get(url)
    .then((res)=>{
        console.log(res);

        for(let movie of res.data){
            if(movie.show.image){
            const div = document.createElement('div');
            div.setAttribute('class','list');
            const img = document.createElement('img');
            img.setAttribute('src',movie.show.image.medium);
            const title  = document.createElement('p');
            title.innerText=movie.show.name;
            div.append(img);
            div.append(title);
            container.append(div);
        }
        
    }
    

        
    })
    
    


}