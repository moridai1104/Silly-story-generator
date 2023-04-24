
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  return array [Math.floor(Math.random()*array.length)];
}
//function 関数名(引数){処理}
//関数名 randomValueFromArray
//引数 array
//戻り値 return array
//{処理} Math.floor 数値以下の最大整数を返す
//{処理} Math.random 0～1までをランダムに返す
//{処理} array.length 配列の数
//return arrayには、ランダムに0-0.9999×3なのでmin0max2.9999
//Math.floorは、０か１か２に 


let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

let insertx = ['Willy the Goblin',
                  'Big Daddy',
                  'Father Christmas'];

let inserty = ['the soup kitchen',   
                 'Disneyland',
                 'the White House'];


let insertz = ['spontaneously combusted',
                  'melted into a puddle on the sidewalk',
                  'turned into a slug and crawled away'];


randomize.addEventListener('click', result);

//HTMLのrandomizeがクリックで発動。resultへ

function result() {
  let newStory = storyText;
  let xItem = randomValueFromArray(insertx);
  let yItem = randomValueFromArray(inserty);
  let zItem = randomValueFromArray(insertz);
  //storyTextを変換してnewStoryに代入
  //randomValueFromArrayで「012」が生成
  //insertの3つの配列が選択され〇Itemへ代入

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);
  //newStroyの:insert〇:を〇Itemへ

  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Bob',name);
  }
  //もしcustomNameが空でなければ
  //newStoryのBobをnameに変更

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300*0.0071429) + ' stones';
    let temperature =  Math.round((94-32)/1.8) + ' centigrade';
    newStory = newStory.replace('300 pounds',weight);
    newStory = newStory.replace('94 farenheit',temperature);
  }
  //UKをチェックしたら
  //Math.roundの少数点の計算を四捨五入して整数+〇〇
  //newStoryをreplace


  story.textContent = newStory;
  story.style.visibility = 'visible';
}
//HTMLのstoryにtextContentプロパティでnewStoryを表示
//visibilityプロパティ'visible'表示'hidden'非表示

