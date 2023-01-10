// Instructions can be found in imperative_vs_declarative.md

export function longPasswords(passwords:any) {
  return passwords.filter((element:any) => (element.length >= 9 )); 
}
