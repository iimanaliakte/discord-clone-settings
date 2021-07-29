const auth = firebase.auth();

const UserPFP = document.querySelector('#pfp');
const LogOutBtn = document.querySelector('#logoutbtn');

LogOutBtn.addEventListener('click', e =>{
    auth.signOut();
});

const Changepfpbtn = document.querySelector('#changepfpbtn');
const pfpUrlInput = document.querySelector('#photourl');


Changepfpbtn.addEventListener("click", (e) =>{

//&& pfpUrlInput.value.endsWith('.jpg')  jpeg|jpg|gif|png

    if(pfpUrlInput.value != '' && pfpUrlInput.value.includes('.jpeg') || pfpUrlInput.value.includes('.jpg') || pfpUrlInput.value.includes('.gif') || pfpUrlInput.value.includes('.png')  ){
    auth.onAuthStateChanged(user =>{
        if(user){
            user.updateProfile({
                photoURL: pfpUrlInput.value,
              }).then(e =>{
                  window.location.reload();
              }).then(e =>{
                  pfpUrlInput.value = '';
              }).catch(e =>{alert(e.message)});
        }
        else{
           window.location = './welcome.html';
        }
    });
}
else{
    alert('Put a Url in the box to change your Avatar (It needs to be a .jpg or .gif link)');
    // (It needs to be a .jpg link)
}
});


auth.onAuthStateChanged(async user =>{
    if(user){
        console.log(user);
        UserPFP.src = user.photoURL;
        
    }else{
       window.location = './welcome.html';
    }
});
