

// import kaboom lib
import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("kartka","christmas.jpg");

loadSprite("stworek", "Bibbble.png");
loadSound("muzyka", "Przybieżeli.mp3");

add([
    sprite("kartka")
])

const stworek = add([
    sprite("stworek"),
    pos(0,0)
])

onMouseRelease(()=>play("muzyka"))

let wprawo = true

stworek .onUpdate(()    => {
    if (wprawo && stworek . pos.x < 600)
        stworek.pos.x += 1

        else if(!wprawo && stworek. pos.x >50)
            stworek.pos.x -= 1

            else wprawo^= true
})