let names = prompt("What animal is the superhero most similar to?", '')
let regular_name = new RegExp ("^[a-zA-Z]{1,20}$")
let regular_gender = new RegExp("(^male$)|(^female$)")
let regular_age = new RegExp("^[1-9][0-9]*$")

if (!names || !regular_name.test(names)) {
	alert("Wrong input")
} else {
	let gender = prompt("Is the superhero male or female? Leave blank if unknown or other.")
	if (gender && !regular_gender.test(gender.toLowerCase())) {
		 alert("Wrong input")
	}
	else {
		 let age = prompt("How old is the superhero?") 
		 if (!age || age.length > 5 || !regular_age.test(age)) {
			  alert("Wrong input")
		 } else {
			  allResult(names, gender, age);    
		 }
	}
}

function allResult(names, gender, age) {
	let result = `The superhero name is: ${names} -`
	if (gender === "male" && + age < 18) {
		 result += "boy"
	} 
	else if (gender === "male" && + age > 18 ) {
		 result += "man"
	}
	else if (gender === "female" && + age < 18) {
		 result += "girl"
	}
	else if (gender === "female" && +age > 18 ) {
		 result += "woman"
	}
	else if (gender === "" && +age < 18) {
		 result += "kid"
	}
	else if (gender === "" && +age > 18) {
		 result += "hero"
	}
	alert(result)
} 