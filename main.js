var imgarray = [
  'picture0',
  'picture0',
  'picture1',
  'picture1',
  'picture2',
  'picture2',
  'picture3',
  'picture3',
  'picture4',
  'picture4',
  'picture5',
  'picture5',
  'picture6',
  'picture6',
  'picture7',
  'picture7',
];

var randomcounter = 16;

function testFunction() {
  for (i = 0; i < 16; i++) {
    var random = Math.floor(Math.random(randomcounter) * randomcounter);

    // var currentimg = <a href="picture{random}"></a>;

    // document.getElementById('imgcontainer').children.item[
    //   i
    // ].innerHTML = currentimg;

    var randompicture = imgarray[random];

    var div = document.createElement('div');
    div.setAttribute('id', 'imgdiv' + randomcounter);
    document.getElementById('imgcontainer').appendChild(div);

    var img = document.createElement('img');
    img.src = '' + randompicture + '.jpg';

    document.getElementById('imgdiv' + randomcounter).appendChild(img);

    var overlay = document.createElement('div');
    overlay.setAttribute('class', 'overlay');
    document.getElementById('imgdiv' + randomcounter).appendChild(overlay);

    imgarray.splice(random, 1);

    randomcounter--;
  }
}

testFunction();
