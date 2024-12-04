// 1chi vazifa
// function romanToInt(s) {
//     // let s = "CM";
//     I = 1;
//     V = 5;
//     X = 10;
//     L = 50;
//     C = 100;
//     D = 500;
//     M = 1000;
//     let count = 0;
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] == "I" && s[i + 1] == "X") {
//         count -= 1;
//       } else if (s[i] == "C" && s[i + 1] == "M") {
//         count -= 100;
//       } else if (s[i] == "X" && s[i + 1] == "C") {
//         count -= 10;
//       } else if (s[i] == "C" && s[i + 1] == "D") {
//         count -= 100;
//       } else if (s[i] == "C" && s[i + 1] == "M") {
//         count -= 100;
//       } else if (s[i] == "X" && s[i + 1] == "L") {
//         count -= 10;
//       } else if (s[i] == "X" && s[i + 1] == "C") {
//         count -= 10;
//       } else if (s[i] == "I" && s[i + 1] == "V") {
//         count -= 1;
//       } else if (s[i] == "I") {
//         count += I;
//       } else if (s[i] == "V") {
//         count += V;
//       } else if (s[i] == "X") {
//         count += X;
//       } else if (s[i] == "L") {
//         count += L;
//       } else if (s[i] == "C") {
//         count += C;
//       } else if (s[i] == "D") {
//         count += D;
//       } else if (s[i] == "M") {
//         count += M;
//       }
//     }
//     return count;
//   }
//   console.log(romanToInt("MCMXCIV"));








// //  2chi vazifa
// let str = "A man, a plan, a canal: Panama";

// let res = "";
// for (let i = str.length -1; i >= 0; i--) {
//   if (str[i] !== " ") {
//     if (str[i] !== ":") {
//       if (str[i] !== ",") {
//         res += str[i].toLowerCase();
//       }
//     }
//   }
// }
// console.log(res == res.split("").reverse().join(""));




// //  4chi vazifa
// let str = "   fly me   to   the moon  ";
// let str2 = str.trim().split(" ");
// res = "";
// for (let i = 0; i < str2.length; i++) {
//   res = str2[i];
// }
// console.log(res);