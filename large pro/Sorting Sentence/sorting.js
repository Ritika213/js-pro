const list = ['Malgudi Days', 'The White Tiger ', 'A Suitable Boy', 'The House of Blue Mangoes', 'Empire', 'The Shiva Trilogy', 

'The Palace of Illusions ', 'The Kishkindha Chronicles ', 'This is Not Your Story', 'Sacred Games', 'Byomkesh Bakshi ',
 'Murder in a Minute,',' Patang'];

function trm(word){
    return word.replace(/^(a |an |the )/i,'').trim();
}
const sortedList = list.sort( (a,b)=> trm(a) > trm(b) ? 1:-1);

document.querySelector("#list").innerHTML = sortedList
                .map(list => `<li>${list}</li>`)
                .join('');