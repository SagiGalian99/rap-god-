var words = ["סטייל","גרב","נעל","מחשב","נייר","עורך דין","משפט","אוזניה","שמן","רעב","אהבה","שונא","רואה","שומע","תפוח","ארוך","לאפה","אתר","מים","פרופסור","רוסיה","פאלפון","אריה","עקרב","זמן","חרוב","בלט","עץ","שווארמה","במה","ספה","משחק","בננה","רמפה","יוטיוב","שיר","חיה","מטען","שש","מצחיק","סופר","מקדים","מלך","סיכוי",""]
function clicked(){
    document.getElementById("rndword").innerHTML = words[Math.floor(Math.random() * words.length)];
}