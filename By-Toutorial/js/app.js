document.getElementById('border-btn').addEventListener('click', function () {
    addBorder();
});
// 
document.getElementById('add-friend').addEventListener('click', function () {
    // addFriend();
    const friendsContainer = document.getElementById('friend-container');
    const friend = document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML = `<h3 class="friend-name">New-Frind</h3>
    <p>Lorem ipsum dolor sit.</p>`;
    friendsContainer.appendChild(friend);
});


document.getElementById('background-btn').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = 'grey';
    }
});
function addBorder() {
    const friendsContainer = document.getElementById('friend-container');
    friendsContainer.style.border = '2px solid red';
    
}
