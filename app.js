const drums = document.querySelectorAll('.drum')


drums.forEach( (drum)=>{

    
    drum.addEventListener('click', ()=>{
        
        let btnTextContent = drum.textContent
        
        PlayMusic(btnTextContent)
    })

    document.addEventListener('keypress', (object)=>{
        
        let keyButton = object.key

        PlayMusic(keyButton)
    })
}) 




function PlayMusic (key) {
    switch (key) {
        // W
        case 'w':
            let crash = new Audio('sounds/crash.mp3')
            crash.play()
        break;
        // A
        case 'a':
            let kick = new Audio('sounds/kick-bass.mp3')
            kick.play()
        break;
        // S
        case 's':
            let snare = new Audio('sounds/snare.mp3')
            snare.play()
        break;
        // D
        case 'd':
            let tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play()
        break;
        // J
        case 'j':
            let tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play()
        break;
        // K
        case 'k':
            let tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play()
        break;
        // L
        case 'l':
            let tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play()
        break;
    
        default:
            break;
    }
}