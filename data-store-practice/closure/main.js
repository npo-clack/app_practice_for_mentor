const rootDB = {
    yourAnswer: null,
};
console.log('aa')

// function submit (formEvent){
//     formEvent.preventDefault();

//     console.log(formEvent.target);

//     return false;
// }

const form = document.getElementById('form'); 

form.addEventListener('submit', event => {
    // イベントを停止する
    event.preventDefault();
  
    // なんかの処理
    console.log('form submitted ✅');

    // TODO
  });