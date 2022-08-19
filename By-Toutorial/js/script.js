document.getElementById('border-btn').addEventListener('click', ()=>{
    const container = document.getElementById('friend-container'); 
    container.style.border = '3px solid red';
    container.style.padding = '10px';
    container.style.margin = '0px';
});

document.getElementById('background-btn').addEventListener('click', function(){
    const friendsDiv = document.getElementsByClassName('friend');
    for(const friend of friendsDiv){
        friend.style.backgroundColor = 'lightblue';
        friend.style.padding = '10px';
        friend.style.margin = '5px';
        friend.style.borderRadius = '10px';
    }
});

document.getElementById('add-friend').addEventListener('click', function(){
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
    <h3 class="friend-name">Frind-4</h3>
    <p>Sed odio magni ipsum.</p>
    `;

    container.appendChild(friendDiv);
});