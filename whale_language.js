btn.addEventListener('click',function(){
  var input = document.getElementById('whale').value;
  const vowels = ['a','e','i','o','u'];
  const resultArray = [];
  const btn = document.getElementById('btn');

for (let i = 0; i < input.length; i++){
  // console.log('i is '+ i);
  for(let j = 0; j < vowels.length;j++){
    if(input[i] === vowels[j]){
      if(input[i] === 'e'){
        resultArray.push('ee');
      }
      else if(input[i] === 'u'){
        resultArray.push('uu');
      }
      else{
        resultArray.push(input[i]);
      }
    }
  }
}
  var el = document.getElementById('said');
el.textContent = resultArray.join('').toUpperCase();
})
