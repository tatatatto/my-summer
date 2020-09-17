'usestrict'

const humanA = document.getElementById("human");
const buttonA = document.getElementById("buttonA");
const buttonB = document.getElementById("buttonB");
const buttonC = document.getElementById("buttonC");
const buttonD = document.getElementById("buttonD");
const buttonE = document.getElementById("buttonE");
const dayArea = document.getElementById("day");
const dayAnime = document.getElementById("day-anime");
const dayflame = document.getElementById("day-flame");
const monologueA = document.getElementById("monologueA");
const monologueB = document.getElementById("monologueB");
const blackBack = document.getElementById("black-back");
const tutorialA = document.getElementById("tutorialA");
const tutorialB = document.getElementById("tutorialB");
const tutorialC = document.getElementById("tutorialC");
const tutorialButton = document.getElementById("tutorial-button");
const tutorialArea = document.getElementById("tutorial-area");
const sabori = document.getElementById("sabori");
const monster= document.getElementById("monster");
const eventA = document.getElementById("event1-A");
const eventB = document.getElementById("event1-B");
const eventC = document.getElementById("event1-C");
var eventChecked = 0;
var dayValue = 1;

function goEvent(X){
  nextDayFunc2();
  var classNameA = "event" + X + "-A";
  var classNameB = "event" + X + "-B";
  var classNameC = "event" + X + "-C";
  if(X <= 3){
    var srcC = "./normal2/event" + X + "-C.png";
    eventC.classList.remove("beNone");
    eventC.classList.add(classNameC);
    eventC.src = srcC;
    setTimeout("stopEvent(" + X +")",9000);
    setTimeout("endBlack()",9000);
  }else if(X <= 4){
    eventC.remove();
    setTimeout("stopEvent(" + X +")",6400);
    setTimeout("endBlack()",6500);
  }else if(X <= 5){
    eventC.remove();
    setTimeout("stopEvent(" + X +")",9000);
    setTimeout("endBlack()",9000);
  }else if(X){
    if(dayValue=20){
      setTimeout("locationFuncA()",11000);
    }else{
      setTimeout("stopEvent(" + X +")",6400);
    setTimeout("endBlack()",6500);
    }
  }
  var srcA = "./normal2/event" + X + "-A.png";
  var srcB = "./normal2/event" + X + "-B.png";
  eventA.classList.remove("beNone");
  eventB.classList.remove("beNone");
  eventA.classList.add(classNameA);
  eventB.classList.add(classNameB);
  eventA.src = srcA;
  eventB.src = srcB;
}

function stopEvent(X){
  if(X <= 3){
    for(let i; i<7; i++){
      var classNameA = "event" + i + "-A";
      var classNameB = "event" + i + "-B";
      var classNameC = "event" + i + "-C";
      eventA.classList.remove(classNameA);
      eventB.classList.remove(classNameB);
      eventC.classList.remove(classNameC);
    }
    eventA.classList.add("beNone");
    eventB.classList.add("beNone");
    eventC.classList.add("beNone");
  }else if(X){
    for(let i; i<7; i++){
      var classNameA = "event" + i + "-A";
      var classNameB = "event" + i + "-B";
      eventA.classList.remove(classNameA);
      eventB.classList.remove(classNameB);
    }
    eventA.classList.add("beNone");
    eventB.classList.add("beNone");
  }
  eventChecked++;
}

function locationFuncA(){
  eventA.remove();
  eventB.remove();
  setTimeout("locationFuncB()",1000);
}

function locationFuncB(){
  window.location.href　=　"./my-summer2-ending.html";
}

function endBlack(){
  blackBack.classList.add("black-flash2");
  setTimeout("endBlack2()",1500);
}

function endBlack2(){
  blackBack.classList.remove("black-flash2");
  beNone(blackBack);
}


function beNone(element){
  //ディスプレイをnoneにする
  element.style.display = "none";
}
function beBlock(element){
  //ディスプレイをblockにする
  element.style.display = "block";
}
function firstFunction(){
  blackBack.classList.add("black-flash");
  setTimeout("monologueRemove()",2000);}

function monologueRemove(){
  monologueA.remove();
  monologueB.remove();
  setTimeout("blackNone()",1000);
}
function blackNone(){
  blackBack.classList.remove("black-flash");
  beNone(blackBack);
  document.title = "チュートリアル";
}
function monologue(){
monologueA.classList.add("monologueA");
monologueB.classList.add("monologueB");
setTimeout("firstFunction()",6000);
}


function dayAnimeFunc(){
  beNone(sabori);
  beNone(monster);
  sabori.classList.remove("flash4");
  monster.classList.remove("flash4");
  beBlock(dayAnime);
  dayAnime.classList.add("flashDay");
  switch(dayValue){
  case 2:
  dayArea.innerText = "1年生　10月";
  console.log("rtfyghj");
  break;
  case 3:
  dayArea.innerText = "2年生　4月";
  console.log("rtfyghj");
  break;
  case 4:
  dayArea.innerText = "2年生　10月";
  console.log("rtfyghj");
  break;
  case 5:
  dayArea.innerHTML = "2年生　4月<br>（2回目）";
  dayArea.classList.remove("day");
  dayArea.classList.add("day2");
  console.log("rtfyghj");
  break;
  case 6:
  dayArea.innerHTML = "2年生　10月<br>（2回目）";
  console.log("rtfyghj");
  break;
  case 7:
  dayArea.classList.remove("day2");
  dayArea.classList.add("day");
  dayArea.innerText = "3年生　4月";
  console.log("rtfyghj");
  break;
  case 8:
  dayArea.innerText = "3年生　10月";
  console.log("rtfyghj");
  break;
  case 9:
  dayArea.innerText = "4年生　4月";
  console.log("rtfyghj");
  break;
  case 10:
  dayArea.innerText = "4年生　5月";
  console.log("rtfyghj");
  break;
  case 11:
  dayArea.innerText = "4年生　6月";
  console.log("rtfyghj");
  break;
  case 12:
  dayArea.innerText = "4年生　7月";
  console.log("rtfyghj");
  break;
  case 13:
  dayArea.innerText = "4年生　8月";
  console.log("rtfyghj");
  break;
  case 14:
  dayArea.innerText = "4年生　9月";
  console.log("rtfyghj");
  break;
  case 15:
  dayArea.innerText = "4年生　10月";
  console.log("rtfyghj");
  break;
  case 16:
  dayArea.innerText = "4年生　11月";
  console.log("rtfyghj");
  break;
  case 17:
  dayArea.innerText = "4年生　12月";
  console.log("rtfyghj");
  break;
  case 18:
  dayArea.innerText = "4年生　1月";
  console.log("rtfyghj");
  break;
  case 19:
  dayArea.innerText = "4年生　2月";
  console.log("rtfyghj");
  break;
  case 20:
  dayArea.innerText = "4年生　3月";
  console.log("rtfyghj");
  break;}
  eventStart();
}

function nextDayFunc(){
  //イベントの表示の処理
  beNone(blackBack);
  beNone(dayAnime);
  dayAnime.classList.remove("flashDay");
  blackBack.classList.remove("flash8");
}

function nextDayFunc2(){
  //イベントの表示の処理
  beNone(dayAnime);
  dayAnime.classList.remove("flashDay");
}

function eventStart(){
  console.log(dayAnime.className);
  switch(dayValue){
    case 2:
    blackBack.classList.remove("flash8");
    setTimeout("goEvent(1);",4000);
    break;
    case 3:
    blackBack.classList.remove("flash8");      
    setTimeout("goEvent(2);",4000);
    break;
    case 4:
    blackBack.classList.remove("flash8");
    setTimeout("goEvent(3);",4000);
    break;
    case 7:
    blackBack.classList.remove("flash8");
    setTimeout("goEvent(4);",4000);
    break;
    case 19:
    blackBack.classList.remove("flash8");
    setTimeout("goEvent(5);",4000);
    break;
    case 20:
    blackBack.classList.remove("flash8");
    setTimeout("goEvent(6);",4000);
    break;
    default:
    setTimeout("nextDayFunc()",5900);
    break;
  }}



function clickA(){
  //イベントごとに動作を止めたり、日数関連の処理、日数が変わるときのアニメーションの一部実行
  console.log(dayValue);
  console.log(eventChecked);
  if(dayValue == 2 && eventChecked == 0){
    console.log("sdfhgiouaesjrghose");
    //カップルsnsイベント
    return;
  }else if(dayValue == 3 && eventChecked == 1){
    return;
    //お花見snsイベント
  }else if(dayValue == 4 && eventChecked == 2){
    return;
    //留年イベント
  }else if(dayValue == 7 && eventChecked == 3){
    return;
    //自分探しイベント
  }else if(dayValue == 19 && eventChecked == 6){
    return;
    //情報商材イベント
  }else if(dayValue == 20 && eventChecked == 18){
    return;
    //ラスト
  }
    dayValue++;
    console.log(dayValue);
    setTimeout("dayAnimeFunc()",4000);
    beBlock(blackBack);
    blackBack.classList.add("flash8");
    beBlock(sabori);
    sabori.classList.add("flash4");
    switch(dayValue){
      case 2:
        dayArea.innerText = "1年生　10月";
        console.log("rtfyghj");
        break;
        case 3:
        dayArea.innerText = "2年生　4月";
        console.log("rtfyghj");
        break;
        case 4:
        dayArea.innerText = "2年生　10月";
        console.log("rtfyghj");
        break;
        case 5:
        dayArea.innerHTML = "2年生　4月<br>（2回目）";
        console.log("rtfyghj");
        break;
        case 6:
        dayArea.innerHTML = "2年生　10月<br>（2回目）";
        dayAnime.classList.remove("day-anime");
        dayAnime.classList.add("day-anime6");
        console.log("rtfyghj");
        break;
        case 7:
        dayArea.innerText = "3年生　4月";
        dayAnime.classList.remove("day-anime6");
        dayAnime.classList.add("day-anime");
        console.log("rtfyghj");
        break;
        case 8:
        dayArea.innerText = "3年生　10月";
        console.log("rtfyghj");
        break;
        case 9:
        dayArea.innerText = "4年生　4月";
        console.log("rtfyghj");
        break;
        case 10:
        dayArea.innerText = "4年生　5月";
        console.log("rtfyghj");
        break;
        case 11:
        dayArea.innerText = "4年生　6月";
        dayAnime.classList.remove("day-anime");
        dayAnime.classList.add("day-anime11");
        console.log("rtfyghj");
        break;
        case 12:
        dayArea.innerText = "4年生　7月";
        dayAnime.classList.remove("day-anime11");
        dayAnime.classList.add("day-anime");
        console.log("rtfyghj");
        break;
        case 13:
        dayArea.innerText = "4年生　8月";
        dayAnime.classList.remove("day-anime");
        dayAnime.classList.add("day-anime13");
        console.log("rtfyghj");
        break;
        case 14:
        dayArea.innerText = "4年生　9月";
        dayAnime.classList.remove("day-anime13");
        dayAnime.classList.add("day-anime");
        console.log("rtfyghj");
        break;
        case 15:
        dayArea.innerText = "4年生　10月";
        dayAnime.classList.remove("day-anime");
        dayAnime.classList.add("day-anime15");
        console.log("rtfyghj");
        break;
        case 16:
        dayArea.innerText = "4年生　11月";
        dayAnime.classList.remove("day-anime15");
        dayAnime.classList.add("day-anime16");
        console.log("rtfyghj");
        break;
        case 17:
        dayArea.innerText = "4年生　12月";
        dayAnime.classList.remove("day-anime16");
        dayAnime.classList.add("day-anime17");
        console.log("rtfyghj");
        break;
        case 18:
        dayArea.innerText = "4年生　1月";
        dayAnime.classList.remove("day-anime17");
        dayAnime.classList.add("day-anime18");
        console.log("rtfyghj");
        break;
        case 19:
        dayArea.innerText = "4年生　2月";
        dayAnime.classList.remove("day-anime18");
        dayAnime.classList.add("day-anime19");
        console.log("rtfyghj");
        break;
        case 20:
        dayArea.innerText = "4年生　3月";
        dayAnime.classList.remove("day-anime19");
        dayAnime.classList.add("day-anime20");
        console.log("rtfyghj");
        break;
    }
    dayAnime.innerHTML = soliloquy[dayValue];
}

function clickB(){
  //イベントごとに動作を止めたり、日数関連の処理、日数が変わるときのアニメーションの一部実行
  console.log(dayValue);
  console.log(eventChecked);
  if(dayValue == 2 && eventChecked == 0){
    //カップルsnsイベント
    console.log("sdfhgiouaesjrghose");
    return;
  }else if(dayValue == 3 && eventChecked == 1){
    return;
    //お花見snsイベント
  }else if(dayValue == 4 && eventChecked == 2){
    return;
    //留年イベント
  }else if(dayValue == 7 && eventChecked == 3){
    return;
    //自分探しイベント
  }else if(dayValue == 19 && eventChecked == 6){
    return;
    //情報商材イベント
  }else if(dayValue == 20 && eventChecked == 18){
    return;
    //ラスト
  }

  dayValue++;
  console.log(dayValue);
  setTimeout("dayAnimeFunc()",4000);
  beBlock(blackBack);
  blackBack.classList.add("flash8");
  beBlock(monster);
  monster.classList.add("flash4");
  switch(dayValue){
    case 2:
      dayArea.innerText = "1年生　10月";
      console.log("rtfyghj");
      break;
      case 3:
      dayArea.innerText = "2年生　4月";
      console.log("rtfyghj");
      break;
      case 4:
      dayArea.innerText = "2年生　10月";
      console.log("rtfyghj");
      break;
      case 5:
      dayArea.innerHTML = "2年生　4月<br>（2回目）";
      console.log("rtfyghj");
      break;
      case 6:
      dayArea.innerHTML = "2年生　10月<br>（2回目）";
      dayAnime.classList.remove("day-anime");
      dayAnime.classList.add("day-anime6");
      console.log("rtfyghj");
      break;
      case 7:
      dayArea.innerText = "3年生　4月";
      dayAnime.classList.remove("day-anime6");
      dayAnime.classList.add("day-anime");
      console.log("rtfyghj");
      break;
      case 8:
      dayArea.innerText = "3年生　10月";
      console.log("rtfyghj");
      break;
      case 9:
      dayArea.innerText = "4年生　4月";
      console.log("rtfyghj");
      break;
      case 10:
      dayArea.innerText = "4年生　5月";
      console.log("rtfyghj");
      break;
      case 11:
      dayArea.innerText = "4年生　6月";
      dayAnime.classList.remove("day-anime");
      dayAnime.classList.add("day-anime11");
      console.log("rtfyghj");
      break;
      case 12:
      dayArea.innerText = "4年生　7月";
      dayAnime.classList.remove("day-anime11");
      dayAnime.classList.add("day-anime");
      console.log("rtfyghj");
      break;
      case 13:
      dayArea.innerText = "4年生　8月";
      dayAnime.classList.remove("day-anime");
      dayAnime.classList.add("day-anime13");
      console.log("rtfyghj");
      break;
      case 14:
      dayArea.innerText = "4年生　9月";
      dayAnime.classList.remove("day-anime13");
      dayAnime.classList.add("day-anime");
      console.log("rtfyghj");
      break;
      case 15:
      dayArea.innerText = "4年生　10月";
      dayAnime.classList.remove("day-anime");
      dayAnime.classList.add("day-anime15");
      console.log("rtfyghj");
      break;
      case 16:
      dayArea.innerText = "4年生　11月";
      dayAnime.classList.remove("day-anime15");
      dayAnime.classList.add("day-anime16");
      console.log("rtfyghj");
      break;
      case 17:
      dayArea.innerText = "4年生　12月";
      dayAnime.classList.remove("day-anime16");
      dayAnime.classList.add("day-anime17");
      console.log("rtfyghj");
      break;
      case 18:
      dayArea.innerText = "4年生　1月";
      dayAnime.classList.remove("day-anime17");
      dayAnime.classList.add("day-anime18");
      console.log("rtfyghj");
      break;
      case 19:
      dayArea.innerText = "4年生　2月";
      dayAnime.classList.remove("day-anime18");
      dayAnime.classList.add("day-anime19");
      console.log("rtfyghj");
      break;
      case 20:
      dayArea.innerText = "4年生　3月";
      dayAnime.classList.remove("day-anime19");
      dayAnime.classList.add("day-anime20");
      console.log("rtfyghj");
      break;
  }
  dayAnime.innerHTML = soliloquy[dayValue];
}




monologue();



//onlickのなかにonclickを入れることで動作の判定の正確性が担保される。例えばチュートリアルを終わらせないとチュートリアルと関係ないボタンを押しても反応しないなど
tutorialButton.onclick = () => {
  //チュートリアルonclick1回目。チュートリアルのメッセージを切り替える
  beNone(tutorialA);
  tutorialButton.classList.remove("tutorial-buttonA");
  tutorialButton.classList.add("tutorial-buttonB");
  beBlock(tutorialB);
tutorialButton.onclick = () => {
  //チュートリアルonclick2回目。メッセージを切り替える。ボタンの位置とメッセージを「次へ」からゲームを始めるにかえる
  beNone(tutorialB);
  beBlock(tutorialC);
  tutorialButton.classList.remove("tutorial-buttonB");
  tutorialButton.classList.add("tutorial-buttonC");
  tutorialButton.innerText = "ゲームを始める";
tutorialButton.onclick = () => {
  //チュートリアルonclick3回目。チュートリアルを削除し、タイトルを変える
  document.title = "ぼくのながいなつやすみ";
  tutorialArea.remove();
  //下の関数で「寝る」と「ゲーム」以外の行動を選べなくなる
  buttonA.onclick = () => {
    console.log(dayValue);
    console.log(eventChecked);
    var tenValue = document.a.ten.checked;
    console.log(tenValue);
    switch(dayValue){
      case 2:
      var eventChecked = 1;
      break;
      case 3:
      var eventChecked = 2;
      break;
      case 4:
      var eventChecked = 3;
      break;
      case 7:
      var eventChecked = 4;
      break;
      case  8:
      var eventChecked = 4;
      break;
      case 21:
      var eventChecked = 5;
      break;
    }
    if(tenValue){
      console.log("bbb");
      for(let i = 0; i<15; i++){
        clickA();
      }}else{
      clickA();
    }
  }
  buttonB.onclick = () => {
    console.log(dayValue);
    console.log(eventChecked);
    var tenValue = document.a.ten.checked;

    switch(dayValue){
      case 2:
      var eventChecked = 1;
      break;
      case 3:
      var eventChecked = 2;
      break;
      case 4:
      var eventChecked = 3;
      break;
      case 7:
      var eventChecked = 4;
      break;
      case 8:
      var eventChecked = 4;
      break;
      case 21:
      var eventChecked = 5;
      break;
    }
    console.log(tenValue);
    if(tenValue){
      for(let i = 0; i<15; i++){
        clickB();}
      }else{
      clickB();
    }}
  buttonC.onclick = () => {
    alert("しかしかしこさが足りない");}
  buttonD.onclick = () => {
    alert("おお　カズマ！　しんでしまうとは　なにごとだ！");}
  buttonE.onclick = () => {
    alert("しかし人生経験が足りない");}}}}


    const soliloquy = [
    "帳尻合わせ",
    "帳尻合わせ",
    "あー、Fラン大学とか人生詰んだわw",//4>10 1年 2
    "この講義後何回休めたっけ",//10>4　1年 3
    "えっ、り、留年……？",//4>10　2年 4
    "俺はあんな猿たちとは違う",//10>4　2年 5
    "俺はこんなところで<br>燻っているような人間じゃない", //4>10　2年 6
    "あー、コミュ障で人生詰んだわw", //10>4　2年 7
    "あ、強化ダンジョンの時間だ", //4>10　3年 8
    "あー、大学だりぃ。休むか。", //10>4　3年 9
    "俺は発達障害なんだ！！", //4>5 4年 10
    "あー、あの講義もうサボれない。<br>……ま、いっか。必修じゃないし",  //5>6 4年 11
    "意識高けぇww", //6>7 4年 12
    "専門学校だ！専門学校に行って<br>手に職業つけるんだ", //7>8 4年 13
    "な、夏休みが終わっちゃったの……？", //8>9 4年 14
    "中小企業でまったり稼いで<br>普通にていければそれでいい", //9>10 4年 15
    "就活とか茶番だわ。<br>あんなので俺の何がわかるんだよ", //10>11 4年 16
    "俺は公務員になって<br>安定した生活を送るんだ", //11>12 4年 17
    "クソクソクソ！<br>学歴フィルターのせいで<br>就職ができない", //12>1 4年 18
    "あー、ねむ。<br>……今日の面接いくのやめた。<br>なんかあそこブラックっぽいし",//1>2 4年 19
    "証券にソルジャー就職wwバカだなww", //2>3 4年 20
  ]