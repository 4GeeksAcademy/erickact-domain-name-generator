let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extens = [".com", ".net", ".us", ".io"]

for (let i of pronoun) {
    for (let j of adj) {
      for (let k of noun) {
        for (let l of extens) {
          console.log(i + j + k + l);
        }
      }
    }
  }




