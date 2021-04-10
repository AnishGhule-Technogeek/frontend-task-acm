/*
Reference to this method from
https://stackoverflow.com/questions/195951/how-can-i-change-an-elements-class-with-javascript
 */

function toUpdateInfo1(){
    document.getElementById("info1").classList.remove('info');
    document.getElementById("info1").classList.add('info-full');
}

function toUpdateInfo2(){
    document.getElementById("info2").classList.remove('info');
    document.getElementById("info2").classList.add('info-full');
}

function toUpdateInfo3(){
    document.getElementById("info3").classList.remove('info');
    document.getElementById("info3").classList.add('info-full');
}

function toUpdateInfo4(){
    document.getElementById("info4").classList.remove('info');
    document.getElementById("info4").classList.add('info-full');
}

/*
commentBox is called and the ADD COMMENT button is displayed none.
submitComment prints the comment on clicking COMMENT.
 */

function commentBoxCall1(){
    document.getElementById("submit-comment-area1").style.display = "block";
    document.getElementById("comment-button1").style.display = "none";
}

function submitComment1(){
    document.getElementById("submit-comment-area1").style.display = 'none';
    document.getElementById("comment-button1").style.display = "none";

    let user_comment1 = document.querySelector('#comment-box-text1').value;
    document.getElementById("hidden-comment-box1").style.display = "block";
    document.getElementById("user-comment1").innerHTML = user_comment1;
}

function commentBoxCall2(){
    document.getElementById("submit-comment-area2").style.display = "block";
    document.getElementById("comment-button2").style.display = "none";
}

function submitComment2(){
    document.getElementById("submit-comment-area2").style.display = 'none';
    document.getElementById("comment-button2").style.display = "none";

    let user_comment2 = document.querySelector('#comment-box-text2').value;
    document.getElementById("hidden-comment-box2").style.display = "block";
    document.getElementById("user-comment2").innerHTML = user_comment2;
}

function commentBoxCall3(){
    document.getElementById("submit-comment-area3").style.display = "block";
    document.getElementById("comment-button3").style.display = "none";
}

function submitComment3(){
    document.getElementById("submit-comment-area3").style.display = 'none';
    document.getElementById("comment-button3").style.display = "none";

    let user_comment3 = document.querySelector('#comment-box-text3').value;
    document.getElementById("hidden-comment-box3").style.display = "block";
    document.getElementById("user-comment3").innerHTML = user_comment3;
}

function commentBoxCall4(){
    document.getElementById("submit-comment-area4").style.display = "block";
    document.getElementById("comment-button4").style.display = "none";
}

function submitComment4(){
    document.getElementById("submit-comment-area4").style.display = 'none';
    document.getElementById("comment-button4").style.display = "none";

    let user_comment4 = document.querySelector('#comment-box-text4').value;
    document.getElementById("hidden-comment-box4").style.display = "block";
    document.getElementById("user-comment4").innerHTML = user_comment4;
}

