var str1 = 'Betty Botter had some butter, "but" she said, "this butter\'s bitter.\nIf I bake this bitter butter, it would make my batter bitter. But a bit of better butter – that would make my batter better."\n';
var str2 = "She sells seashells by the seashore";
var str3 = "might you might a mightned might into an un-mightned might like a mightner mightmight a mightned might into an un-mightned might?";
  alert("Just a string:\n" + str1 + "Lenght:" + str1.length +
  "\n" + "Character number 2 is:" + ' '+ str1.charAt(2) + 
  "\n" + "Concatenation in a phrase:\n" + str1 + 
  'So she bought a bit of butter, better than her bitter butter, and she baked it in herbatter, and the batter was not bitter.So \'twas better Betty Botter bought a bit of better butter.' 
  + "\n" + "To uppercase:" + " " + str2.toUpperCase() + 
  "\n" + "Replace all occurrences:\n" 
  + str3.replaceAll('might','can'));