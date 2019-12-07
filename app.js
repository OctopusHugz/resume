function displayPosition(name, title, description) {
    console.log('Name: ' + name.toUpperCase());
    console.log('Career: ' + title);
    console.log('Description: ' + description);
}

displayPosition('Colson Scott', 'Full Stack Software Developer', 'I am just A man in THE world.');

console.log('');

console.log('My Interests:');
console.log('* Programming');
console.log('* Dogs');
console.log('* Nature');
console.log('* Sports');

console.log('');

console.log('My Previous Experience:');
console.log('* Programming');
console.log('* Dog Walking');
console.log('* Nature Strolling');

console.log('');

console.log('My Skills:');



function displaySkill(skillName, boolean) {
    if (boolean == true) {
        console.log('* BAM: ' + skillName);
    } else {
        console.log('* ' + skillName);
    }
}

displaySkill('Spanish', false);
displaySkill('Javascript', true);
displaySkill('C', true);
displaySkill('HTML', false);
displaySkill('CSS', false);
displaySkill('Responsive Design', true);
displaySkill('Bootstrap', false);
displaySkill('Swift', true);
displaySkill('Gatsby', true);