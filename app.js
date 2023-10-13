// Case1;
// let B = +prompt("Hafta kunini kiriting faqat sonda ");
// let kunlar;
// switch (kunlar) {
//   case 1:
//     kunlar = "Dushanba";
//     break;
//   case 2:
//     kunlar = "Seshanba";
//     break;
//   case 3:
//     kunlar = "Chorshanba";
//     break;
//   case 4:
//     kunlar = "Payshanba";
//     break;
//   case 5:
//     kunlar = "Juma";
//     break;
//   case 6:
//     kunlar = "Shanba";
//     break;
//   case 7:
//     kunlar = "Yakshanba";
//     break;
//   default:
//     kunlar = "Haftada 7 kun bor 8-kun yo'q -_-";
//     break;
// }
// document.write(kunlar);

// Case2;
// let B = +prompt("O'quvchini bahosini kiriting");
// let people;
// switch (B) {
//   case 1:
//     people = "Yomon";
//     break;
//   case 2:
//     people = "Qoniqarsiz";
//     break;
//   case 3:
//     people = "Qoniqarli";
//     break;
//   case 4:
//     people = "Yaxshi";
//     break;
//   case 5:
//     people = "A'lo";
//     break;
//   default:
//     people = "Baholar faqat 1-5gacha bo'ladi";
//     break;
// }
// document.write(people);

// Case3;
// let Fasl;
// let OyRaqami;
// switch (OyRaqami) {
//   case 1:
//     Fasl = "Qish";
//     break;
//   case 2:
//     Fasl = "Qish";
//     break;
//   case 3:
//     Fasl = "Bahor";
//     break;
//   case 4:
//     Fasl = "Bahor";
//     break;
//   case 5:
//     Fasl = "Bahor";
//     break;
//   case 6:
//     Fasl = "Yoz";
//     break;
//   case 7:
//     Fasl = "Yoz";
//     break;
//   case 8:
//     Fasl = "Yoz";
//     break;
//   case 9:
//     Fasl = "Kuz";
//     break;
//   case 10:
//     Fasl = "Kuz";
//     break;
//   case 11:
//     Fasl = "Kuz";
//     break;
//   case 12:
//     Fasl = "Qish";
//     break;

//   default:
//     Fasl = "Unday fasl yo'q";
//     break;

// document.write(Fasl);

// Case4;
// let OyRaqami = +prompt("Oy raqamini kiriting: ");
// let kun;
// let OyNomi;
// switch (OyRaqami) {
//   case 1:
//     OyRaqami = 31;
//     OyNomi = "Yanvar";
//     break;
//   case 2:
//     OyRaqami = "28/29";
//     OyNomi = "Fevral";
//     break;
//   case 3:
//     OyRaqami = 31;
//     OyNomi = "Mart";
//     break;
//   case 4:
//     OyRaqami = 30;
//     OyNomi = "Aprel";
//     break;
//   case 5:
//     OyRaqami = 31;
//     OyNomi = "May";
//     break;
//   case 6:
//     OyRaqami = 30;
//     OyNomi = "Iyun";
//     break;
//   case 7:
//     OyRaqami = 31;
//     OyNomi = "Iyul";
//     break;
//   case 8:
//     OyRaqami = 31;
//     OyNomi = "Avgust";
//     break;
//   case 9:
//     OyRaqami = 30;
//     OyNomi = "Sentabr";
//     break;
//   case 10:
//     OyRaqami = 31;
//     OyNomi = "Oktabr";
//     break;
//   case 11:
//     OyRaqami = 30;
//     OyNomi = "Noyabr";
//     break;
//   case 12:
//     OyRaqami = 31;
//     OyNomi = "Dekabr";
//     break;
//   default:
//     OyRaqami = "1-yilda 12ta oy bor";
//     OyNomi = null;
//     break;
// }
// if (OyNomi == null) {
//   document.write(OyRaqami);
// } else {
//   document.write(`${OyNomi} - ${OyRaqami}`);
// }

// Case5;
// let A = +prompt("1-sonni kiriting");
// let B = +prompt("2-sonni kiriting");
// let belgilar = +prompt(
//   "Qaysini bajarish kerak 1-Qo'shish, 2-Ayrish, 3-Ko'paytirish 4-Bo'lish"
// );
// let Res;
// let MatematikBelgilar;

// switch (operation) {
//   case 1:
//     Res = A + B;
//     MatematikBelgilar = "+";
//     break;
//   case 2:
//     Res = A - B;
//     MatematikBelgilar = "-";
//     break;
//   case 3:
//     Res = A * B;
//     MatematikBelgilar = "/";
//     break;
//   case 4:
//     Res = A / B;
//     MatematikBelgilar = "*";
//     break;
//   default:
//     break;
// }

// if (Res == undefined) {
//   document.write(
//     "Matematikada 4 ta amal bor"
//   );
// } else {
//   document.write(A + MatematikBelgilar + B  == Res);
// }

// Case6;

// let UzunlikBirliklari = +prompt(
//   "Siz kiritmoqchi bo'lgan uzunlik o'lchovini tanlang: 1-Kilometr 2-Metr 3-Detsimetr 4-Santimetr 5-Millimetr "
// );
// let Uzunliklar;
// let uzunlik = +prompt("Uzunligini kiriting: ");
// let Metr;
// let UzunliklarHattosi =
//   "faqatgina 5ta uzunlik birligini metrga qilish mumkin";
// switch (UzunlikBirliklari) {
//   case 1:
//     Uzunliklar = "kilometr";
//     uzunlik = Metr * 1000;
//     break;
//   case 2:
//     Uzunliklar = "metr";
//     uzunlik = Metr;
//     break;
//   case 3:
//     Uzunliklar = "detsimetr";
//     uzunlik = Metr / 10;
//     break;
//   case 4:
//     Uzunliklar = "santimetr";
//     uzunlik = Metr / 100;
//     break;
//   case 5:
//     Uzunliklar = "millimetr";
//     uzunlik = Metr / 1000;
//     break;
//   default:
//     break;
// }

// if (!Uzunliklar) {
//   document.write(UzunliklarHattosi);
// } else {
//   document.write(uzunlik + Uzunliklar >= Metr + "Metr" );
// }

// Case7;
// let OlchovBirliklari = +prompt(
//   "og'irlik olchov birligini kiriting 1-Tonna, 2-Sentner, 3-Kilogram, 4-Gram,  5-Milligram "
// );
// let ogirlik = +prompt("Og'irlikni kiriting: ");
// let Hatolik =
//   "Killogramga faqatgina 5ta o'girlik olchov birligini kirgizish mumkin";
// let BirligNomi;
// let Killogram;

// switch (OlchovBirliklari) {
//   case 1:
//     BirligNomi = "Tonna";
//     Killogram = ogirlik * 1000;
//     break;
//   case 2:
//     BirligNomi = "Sentner";
//     Killogram = ogirlik * 100;
//     break;
//   case 3:
//     BirligNomi = "Kilogramm";
//     Killogram = ogirlik;
//     break;
//   case 4:
//     BirligNomi = "Gramm";
//     Killogram = ogirlik / 1000;
//     break;
//   case 5:
//     BirligNomi = "Milligram";
//     Killogram = ogirlik / 1000000;
//     break;
//   default:
//     break;
// }

// if (!BirligNomi) {
//   document.write(Hatolik);
// } else {
//   document.write(
//     ogirlik.toString; BirligNomi; >= Killogram.toString;
//   )
// }

// Case8;
// let birthDate = prompt(
//   "Tug'ilgan oyingiz, kuningiz va yilingizni ushbu ko'rinishda kiriting (MM/DD/YYYY): "
// );
// let oy = +birthDate.slice(0, 2);
// let sana = +birthDate.slice(3, 5);
// let yil = +birthDate.slice(6, 10);
// let Hatolik = "Tug'ilgan kuningizni kiriting";
// let OyNomi;
// let Kun;
// switch (month) {
//   case 1:
//     OyNomi = "Yanvar";
//     Kun = 31;
//     break;
//   case 2:
//     OyNomi = "Fevral";
//     Kun = 28;
//     break;
//   case 3:
//     OyNomi = "Mart";
//     Kun = 31;
//     break;
//   case 4:
//     OyNomi = "Aprel";
//     Kun = 30;
//     break;
//   case 5:
//     OyNomi = "May";
//     Kun = 31;
//     break;
//   case 6:
//     OyNomi = "Iyun";
//     Kun = 30;
//     break;
//   case 7:
//     OyNomi = "Iyul";
//     Kun = 31;
//     break;
//   case 8:
//     OyNomi = "Avgust";
//     Kun = 31;
//     break;
//   case 9:
//     OyNomi = "Sentabr";
//     Kun = 30;
//     break;
//   case 10:
//     OyNomi = "Oktabr";
//     Kun = 31;
//     break;
//   case 11:
//     OyNomi = "Noyabr";
//     Kun = 30;
//     break;
//   case 12:
//     OyNomi = "Dekabr";
//     Kun = 31;
//     break;
//   default:
//     break;
// }
// if (!OyNomi || yil > 2023 || sana > Kun) {
//   document.write("Tug'ilgan kuningizni hato kirgazdingiz");
// } else {
//   document.write(
//     "Siz " + yil + "yil " + sana + "sana " + OyNomi + "oyda" + "da tu'gilgansiz"
//   );
// }

// Case9;
// let OyRaqami = +prompt("Oy raqamini kiriting");
// let sana = +prompt("Kunni kiriting");
// let Hatolik = "Sana hato kiritildi";
// let OyNomi;
// let KunlarSoni;

// if (KunlarSoni == date) {
//   OyRaqami++;
//   sana = 1;
// }
// switch (OyRaqami) {
//   case 1:
//     OyNomi = "Yanvar";
//     KunlarSoni = 31;
//     break;
//   case 2:
//     OyNomi = "Fevral";
//     KunlarSoni = 28;
//     break;
//   case 3:
//     OyNomi = "Mart";
//     KunlarSoni = 31;
//     break;
//   case 4:
//     OyNomi = "Aprel";
//     KunlarSoni = 30;
//     break;
//   case 5:
//     OyNomi = "May";
//     KunlarSoni = 31;
//     break;
//   case 6:
//     OyNomi = "Iyun";
//     KunlarSoni = 30;
//     break;
//   case 7:
//     OyNomi = "Iyul";
//     KunlarSoni = 31;
//     break;
//   case 8:
//     OyNomi = "Avgust";
//     KunlarSoni = 31;
//     break;
//   case 9:
//     OyNomi = "Sentabr";
//     KunlarSoni = 30;
//     break;
//   case 10:
//     OyNomi = "Oktabr";
//     KunlarSoni = 31;
//     break;
//   case 11:
//     OyNomi = "Noyabr";
//     KunlarSoni = 30;
//     break;
//   case 12:
//     OyNomi = "Dekabr";
//     KunlarSoni = 31;
//     break;
//   default:
//     break;
// }

// if (!OyNomi || KunlarSoni < sana) {
//   document.write(Hatolik);
// } else {
//   document.write("Siz kiritgan sana" + sana + OyNomi);
// }

Case10;
let Y = prompt(
  "Robot yo'nalishini tanlang:  Sh-Shimol  J-Janub G-G'arb  S-Sharq"
).toUpperCase();
let B = +prompt(
  "Buyruqni tanlang 1-Harakatni davom etiraver  2-Harakat chapga burilgin  3-Harakat o'ngga burilgin"
);
let harakat;
let yonalish;
switch (Y) {
  case "Sh":
    yonalish = "Shimol";
    break;
  case "J":
    yonalish = "Janub";
    break;
  case "G":
    yonalish = "G'arb";
    break;
  case "S":
    yonalish = "Sharq";
    break;
  default:
    break;
}