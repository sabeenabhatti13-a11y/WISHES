function startEverything() {
    const music = document.getElementById('bgMusic');
    // Play music on first click
    music.play().catch(error => {
        console.log("Music play failed, will try on next interaction.");
    });
    nextSlide(2);
}

function nextSlide(num) {
    document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
    document.getElementById('slide' + num).classList.add('active');

    const sticker = document.getElementById('header-gif');
    // Stickers change logic with reliable links
    if (num <= 4) sticker.src = "https://media.tenor.com/7S8_oZ_E_p0AAAAi/mochi-peach-cat-cute.gif";
    if (num >= 5 && num <= 7) sticker.src = "https://media.tenor.com/S28_oZ_E_p0AAAAi/mochi-peach-cat-birthday.gif";
    if (num === 8) sticker.src = "https://media.tenor.com/X5v_7yO08E8AAAAi/mochi-peach-cat.gif";

    // Stop music if replaying
    if (num === 1) {
        const music = document.getElementById('bgMusic');
        music.pause(); music.currentTime = 0;
    }
}

function revealBirthdayMsg() {
    document.getElementById('msg-box').style.display = 'none';
    document.getElementById('full-msg').style.display = 'block';
    document.getElementById('next-after-tap').classList.remove('hidden');
}



function nextSlide(num) {
    // Sab slides hide karne ka logic
    document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
    
    const current = document.getElementById('slide' + num);
    if (current) {
        current.classList.add('active');
    }

    // Stickers logic for new slides (9 to 13)
    const sticker = document.getElementById('header-gif');
    if (num >= 9 && num <= 10) {
        sticker.src = "https://media.tenor.com/7S8_oZ_E_p0AAAAi/mochi-peach-cat-cute.gif";
    } else if (num >= 11) {
        sticker.src = "https://media.tenor.com/X5v_7y008E8AAAAi/mochi-peach-cat.gif";
    }
}