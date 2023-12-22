let jokes= [
        
    "A programmer puts two glasses on his bedside table before going to sleep.\nA full one, in case he gets thirsty, and an empty one, in case he doesn't.",        "Oysters hate to give away their pearls because they are shellfish",
    "Your cat is so fat, you need to switch to NTFS to store a picture of her.",
   "A guy walks into a bar and asks for 1.4 root beers.\nThe bartender says \"I'll have to charge you extra, that's a root beer float\".\nThe guy says \"In that case, better make it a double.\"",
    "Debugging: Removing the needles from the haystack.",
    "I have a joke about Stack Overflow, but you would say  it's a duplicate.",
    "Debugging is like being the detective in a crime movie where you're also the murderer at the same time.",
    "Being a self-taught developer is almost the same as being a cut neck chicken because you have no sense of direction in the beginning.",
    "Today I learned that changing random stuff until your program works is \"hacky\" and a \"bad coding practice\" but if you do it fast enough it's \"Machine Learning\" and pays 4x your current salary.",
    "Knock knock.\nWho's there?\nRecursion.\nRecursion who?\nKnock knock.",
     "Why do programmers prefer dark mode? Because light attracts bugs!",
    "Why did the programmer quit his job? He didn't get arrays.",
    "Why do Java developers wear glasses? Because they don't see sharp.",
    "Why was the JavaScript developer sad? Because he didn't 'null' how to express himself.",
    "How do you comfort a JavaScript bug? You console it.",
    "Why do programmers prefer nature? It has a lot of trees.",
    "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
    "How many programmers does it take to change a light bulb? None. That's a hardware issue.",
    "Why did the programmer go broke? Because he used up all his cache.",
    "Why don't programmers like to go outside? The sunlight causes too many reflections.",
    "Why do programmers prefer dark chocolate? It's closer to byte size.",
    "Why was the developer's coffee always cold? Because he lost his Java.",
    "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
    "Why did the programmer get thrown out of school? Too much recursion in the classroom.",
    "Why don't programmers like to go to the beach? The shore has too many 'break' points.",
    "Why did the Python snake break up with the Anaconda? It had too many issues with commitment."
    
    ]

let index= Math.floor(Math.random()*jokes.length)  
// Get the selected joke
let selectedJoke = jokes[index];

// Update the content of the "joke" div
document.getElementById("joke").innerText = selectedJoke;