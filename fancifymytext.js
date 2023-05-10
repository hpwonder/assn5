function showAlert() {
    var textarea = document.getElementById('userText');
    textarea.style.fontSize = '24pt';
  }
  
  function fancyChange() {
    var textarea = document.getElementById('userText');
    var fancyShmancy = document.getElementById('fancyShmancy');
    var boringBetty = document.getElementById('boringBetty');
  
    if (fancyShmancy.checked) {
      alert('FancyShmancy selected!');
      textarea.style.fontWeight = 'bold';
      textarea.style.color = 'blue';
      textarea.style.textDecoration = 'underline';
    } else if (boringBetty.checked) {
      alert('BoringBetty selected!');
      textarea.style.fontWeight = 'normal';
      textarea.style.color = 'black';
      textarea.style.textDecoration = 'none';
    }
  }
  
  function moo() {
    var textarea = document.getElementById('userText');
    var text = textarea.value;
    var sentences = text.split('.');
  
    for (var i = 0; i < sentences.length; i++) {
      if (sentences[i].trim() !== '') {
        var words = sentences[i].split(' ');
        words[words.length - 1] = words[words.length - 1] + '-Moo';
        sentences[i] = words.join(' ');
      }
    }
  
    text = sentences.join('.').toUpperCase();
    textarea.value = text;
  }
  