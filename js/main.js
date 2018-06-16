// header js and skills animation
const header = document.querySelector('header')
const skills = document.getElementById('skills')
const headerWrapper = document.querySelector('.navbar-container')
const navbar = document.querySelector('.nav-bar')
document.addEventListener('scroll', function () {
  if (window.scrollY > 90) {
    headerWrapper.classList.add('white-bg')
  }
  else {
    headerWrapper.classList.remove('white-bg')
  }
  if (window.scrollY + window.innerHeight - 200 > skills.offsetTop) {
    skills.querySelector('ul').classList.add('slide-in')
  }
  else {
    skills.querySelector('ul').classList.remove('slide-in')
  }
})



// masthead js
const hello = document.getElementById('hello')
typeEffect(hello)

function typeEffect(element) {
  var greeting = ['Hi there! I am Joseph. ', 'A Web Developer. ', 'A Passionate Learner. ', 'Nice to meet you! ']
  var greetingCounter = 0
  let index = 0
  var innerText = ''
  setInterval(function () {
    greetingCounter++
    if (greetingCounter > greeting[index].length) {
      index = (index + 1) % greeting.length
      greetingCounter = 0
    }
    element.textContent = greeting[index].substring(0, greetingCounter)
  }, 100)
}

var anchorLinks = document.querySelectorAll(".nav-item>a")
console.log(anchorLinks);

anchorLinks.forEach(function (e) {
  var targetId = e.href.split('#')[e.href.split('#').length - 1]
  var target = document.getElementById(targetId)

  e.addEventListener('click', function (event) {
    if (window.scrollTo) {
      event.preventDefault();
      window.scrollTo({ "behavior": "smooth", "top": target.offsetTop });
    }
  })
})

// <!-- swiper -->
var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,

  // pagination
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 4000,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

const APP_ID = 'XbpmBbqWlM1facxh938Bu6ml-MdYXbMMI'
const APP_KEY = '2eROdo9GLACuxInoNaluVeB1'

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})

var commentsForm = document.getElementById('comments')

commentsForm.addEventListener("submit", function (e) {
  e.preventDefault()
  console.log("Submit")
  var userName = document.getElementById("userName").value
  var comment = document.getElementById("comment").value
  if (userName && comment) {
    commentUpload(userName, comment)
  }
  else if (userName) {
    alert("Comment field cannot be empty!")
  }
  else {
    alert("Username field cannot be empty!")
  }
})

var commentList = document.getElementById("savedComments")
var savedComments = new AV.Query("Comments")
savedComments.find().then(function (comments) {
  comments.forEach((e) => {
    var li = document.createElement('li')
    var user = document.createElement('span')
    var comment = document.createElement('span')
    user.innerText = 'User: ' + e.attributes.user
    comment.innerText = 'Message:' + e.attributes.comment
    li.appendChild(user)
    li.appendChild(comment)
    commentList.appendChild(li)
  })
})


function commentUpload(userName, comment) {
  var CommentsObject = AV.Object.extend('Comments')
  var commentsObject = new CommentsObject()
  commentsObject.save({
    user: userName,
    comment: comment
  }).then(function () {
    console.log("Succuess")

    var li = document.createElement('li')
    var user = document.createElement('span')
    var comment = document.createElement('span')
    user.innerText = 'User: ' + commentsObject.attributes.user
    comment.innerText ='Message: ' + commentsObject.attributes.comment
    li.appendChild(user)
    li.appendChild(comment)
    commentList.appendChild(li)
  })
}