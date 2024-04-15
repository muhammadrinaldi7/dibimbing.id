import { buaya } from "./class.js";
import { Person } from "./class.js";
import { Binatang } from "./class.js";
import { Persegi } from "./class.js";

const Person3 = new Person("Aldi", 23);

Person3.greet();

const pet = new Binatang("Garry",9,"Mamalia");


const Predator = new buaya("Franki",12,"Predator","Kancil");

Predator.Menyerang();
Predator.Makan();

const hitungLuas = new Persegi();

hitungLuas.hitungLuas(4,5);