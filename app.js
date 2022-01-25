// varaibles for assigning user data
const userImg = document.querySelector('img');
const userName = document.getElementById('user-name')
const userAge = document.getElementById('user-age')
const userCity = document.getElementById('user-city')
const userFollowers = document.getElementById('followers');
const userLikes = document.getElementById('likes');
const userPhotos = document.getElementById('photos');

// component user data 
const userData = {
    img: './images/image-victor.jpg',
    userName: 'Victor Crest',
    userAge: 26,
    city: 'London',
    followers: 80,
    likes: 803,
    photos: 1.4
}

// assignig user data to varaibles
userImg.src = userData.img;
userName.textContent = userData.userName;
userAge.textContent = userData.userAge;
userCity.textContent = userData.city
userFollowers.textContent = `${userData.followers}K`;
userLikes.textContent = `${userData.likes}K`;
userPhotos.textContent = `${userData.photos}K`;