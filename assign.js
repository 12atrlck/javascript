const card = [
    {
        profileName:'Sarah Smith',
        profileProfession:'Freelance Web Designer',
        profileStar:'2k',
        people:'10k',
        profileCase:'15',
        button:'Follow'
    }
]

let name = card[0].profileName;
let profession = card[0].profileProfession;
let star = card[0].profileStar;
let people = card[0].people;
let briefcase = card[0].profileCase;
let button = card[0].button;

document.getElementById('name').innerHTML = name;
document.getElementById('profession').innerHTML = profession;
document.getElementById('star').innerHTML = star;
document.getElementById('people').innerHTML = people;
document.getElementById('briefcase').innerHTML = briefcase;
document.getElementById('button').innerHTML = button