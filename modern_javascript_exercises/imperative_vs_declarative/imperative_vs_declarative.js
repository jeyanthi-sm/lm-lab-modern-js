// Instructions can be found in imperative_vs_declarative.md

export function longPasswords(passwords) {
  let longPasswords = [];
  passwords.forEach(element => { if (element.length >= 9 ) 
    longPasswords.push(element);
    
  });
  return longPasswords;
}
