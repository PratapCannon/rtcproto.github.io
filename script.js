/* ═══════════════════════════════════════
   RTC HERITAGE PORTAL — script.js
   ═══════════════════════════════════════ */

window.onload = function () {

    /* ── GALLERY VIDEO ── */
    if ('IntersectionObserver' in window) {
        document.querySelectorAll('.gallery-card video').forEach(function (video) {
            var obs = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        video.play().catch(function () {});
                    } else {
                        video.pause();
                    }
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
            obs.observe(video);
        });
    }

    /* ── HERO SLIDER ── */
    var slides  = document.querySelectorAll('.slide');
    var current = 0;

    if (slides.length > 0) {
        slides.forEach(function(s) { s.classList.remove('active'); });
        slides[0].classList.add('active');

        setInterval(function () {
            slides[current].classList.remove('active');
            current = (current + 1) % slides.length;
            slides[current].classList.add('active');
        }, 6000);
    }

    /* ── STORY VIDEO PLAY BUTTON ── */
    var storyVideo   = document.getElementById('main-video');
    var storyPlayBtn = document.getElementById('play-overlay-btn');

    if (storyVideo && storyPlayBtn) {
        storyPlayBtn.addEventListener('click', function () {
            storyVideo.setAttribute('controls', '');
            storyVideo.style.pointerEvents = 'auto';
            storyPlayBtn.classList.add('hidden');
            storyVideo.play().catch(function (e) {
                console.log('Play error:', e);
            });
        });

        storyVideo.addEventListener('pause', function () {
            if (storyVideo.ended) return;
            storyVideo.removeAttribute('controls');
            storyVideo.style.pointerEvents = 'none';
            storyPlayBtn.classList.remove('hidden');
        });

        storyVideo.addEventListener('ended', function () {
            storyVideo.removeAttribute('controls');
            storyVideo.style.pointerEvents = 'none';
            storyPlayBtn.classList.remove('hidden');
        });
    }

    /* ── THEMES CAROUSEL ── */
   /* ── THEMES CAROUSEL ── */
var track = document.getElementById('themesScrollTrack');
var dots  = document.querySelectorAll('.ts-dot');
var step  = 0;
var total = 2;

function setWidths() {
    if (window.innerWidth <= 900) return;
    var w = track.parentElement.offsetWidth;
    track.querySelectorAll('.themes-pair').forEach(function(pair) {
        pair.style.width    = w + 'px';
        pair.style.minWidth = w + 'px';
    });
    track.style.width = (w * total) + 'px';
}

function goTo(n) {
    if (window.innerWidth <= 900) return;
    step = n;
    var w = track.parentElement.offsetWidth;
    track.style.transition = 'transform 1.2s cubic-bezier(0.76, 0, 0.24, 1)';
    track.style.transform  = 'translateX(-' + (step * w) + 'px)';
    dots.forEach(function(d, i) {
        d.classList.toggle('active', i === step);
    });
}

function resetMobile() {
    if (window.innerWidth <= 900) {
        track.style.transform  = '';
        track.style.transition = '';
        track.style.width      = '';
        track.querySelectorAll('.themes-pair').forEach(function(pair) {
            pair.style.width    = '';
            pair.style.minWidth = '';
        });
    }
}

if (track) {
    setWidths();

    if (dots.length) {
        dots.forEach(function(d) {
            d.addEventListener('click', function() {
                goTo(parseInt(d.dataset.step));
            });
        });
    }

    setInterval(function() {
        if (window.innerWidth > 900) {
            goTo((step + 1) % total);
        }
    }, 5000);

    window.addEventListener('resize', function() {
        if (window.innerWidth <= 900) {
            resetMobile();
        } else {
            setWidths();
            goTo(step);
        }
    });
}

}; /* ── END window.onload ── */


/* ═══════════════════════════════════════
   CROSS-PAGE CONTENT DATA
   ═══════════════════════════════════════ */

var allContent = {
    films: [
        { video: 'image/laya.mp4',      title: 'Voices of Laya',       desc: 'A portrait of the Layap people — their yak herding traditions, matrilineal customs, and the haunting songs sung at altitude.' },
        { video: 'image/deity.mp4',     title: 'The Living Deity',      desc: 'Following the annual Tsechu festival at Paro Dzong, where sacred cham dances invoke protection for an entire valley.' },
        { video: 'image/salt.mp4',      title: 'Salt & Passes',         desc: 'Tracing the ancient trade routes between Tibet and Bhutan through the eyes of the last generation of highland traders.' },
        { video: 'image/threads.mp4',   title: 'Threads of Kishuthara', desc: 'Inside the homes of Khoma village weavers, where silk patterns carry coded stories of ancestry and seasonal change.' },
        { video: 'image/monastery.mp4', title: 'The Monastery School',  desc: 'A year inside a remote shedra where young monks memorise ancient texts while navigating a rapidly modernising Bhutan.' },
        { video: 'image/merak.mp4',     title: 'Return to Merak',       desc: 'A Brokpa elder returns to the village of his birth after four decades — finding both change and a fierce cultural resilience.' }
    ],
    photoessay: [
        { img: 'image/Bhutan-Ceremonial-procession-getting-ready.jpg', title: 'Before the Mask',      desc: 'Backstage portraits of cham dancers preparing in silence — robes folded, faces calm before transformation.' },
        { img: 'image/Bhutan_mountains.jpg',                           title: 'Above the Cloud Line', desc: 'High-altitude landscapes of the Lunana Gewog, where glacial lakes reflect a sky untouched by light pollution.' },
        { img: 'image/ritual.jpeg',                                    title: 'Fire & Juniper',       desc: 'The lhab-sang smoke ritual at dawn — photographs of incense, prayer flags, and ash rising over mountain ridgelines.' },
        { img: 'image/namads.jpeg',                                    title: 'Felt & Flock',         desc: 'The craft of namda felt-making in Haa — hands pressing raw wool into dense, patterned mats beside open hearths.' },
        { img: 'image/culture.jpg',                                    title: 'The Harvest Table',    desc: 'Post-harvest gatherings in Phobjikha valley — red rice, ara, and communal meals laid on woven grass mats.' },
        { img: 'image/student.jpg',                                    title: 'Daughters of Sephu',   desc: 'Young women from Sephu balancing school notebooks and traditional striped kiras — two worlds in a single frame.' }
    ],
    vignettes: [
        { img: 'image/ritual.jpeg',          title: 'The Butter Lamp Room',       desc: 'A written sketch of an elderly nun who tends 108 lamps each morning in a monastery above Trongsa — alone, methodical, luminous.' },
        { img: 'image/Bhutan_mountains.jpg', title: 'When the Snow Comes Early',  desc: 'A Laya herder recounts the winter of 2019 — when unexpected snow buried pastureland and changed a migration route forever.' },
        { img: 'image/culture.jpg',          title: 'Ara & Absence',              desc: 'On the ritual of distilling home-brewed ara and the conversations it opens — grief, memory, and highland hospitality.' },
        { img: 'image/namads.jpeg',          title: 'The Archery Ground at Dusk', desc: 'A single afternoon at a village datse competition — laughter, rivalry, and unspoken language between lifelong friends.' },
        { img: 'image/education.webp',       title: 'Reading the Sky',            desc: 'An elder from Merak explains cloud formations and snowfall patterns — knowledge passed down without ever being written.' },
        { img: 'image/student.jpg',          title: 'The Last Thangka Painter',   desc: 'A portrait of a master thangka artist in his seventies — hands still steady, apprentice absent, pigments ground from stone.' }
    ]
};

var cardGrid   = document.querySelector('.inner-cards');
var filterOpts = document.querySelectorAll('.filter-option');

function renderCards(set) {
    var items = allContent[set];
    if (!cardGrid || !items) return;

    cardGrid.style.opacity    = '0';
    cardGrid.style.transform  = 'translateY(10px)';
    cardGrid.style.transition = 'opacity 0.25s ease, transform 0.25s ease';

    setTimeout(function () {
        cardGrid.innerHTML = items.map(function (item, i) {
            return '<a href="#" class="inner-card" style="animation-delay:' + (0.1 + i * 0.1) + 's">' +
                (item.video
                    ? '<video autoplay muted loop playsinline><source src="' + item.video + '" type="video/mp4"></video>'
                    : '<img src="' + item.img + '" alt="' + item.title + '">'
                ) +
                '<div class="inner-card-info"><h4>' + item.title + '</h4><p>' + item.desc + '</p></div>' +
                '</a>';
        }).join('');

        cardGrid.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
        cardGrid.style.opacity    = '1';
        cardGrid.style.transform  = 'translateY(0)';
    }, 250);
}

if (filterOpts.length && cardGrid) {
    filterOpts.forEach(function (opt) {
        opt.addEventListener('click', function (e) {
            e.preventDefault();
            filterOpts.forEach(function (o) { o.classList.remove('active'); });
            this.classList.add('active');

            var trigger = document.querySelector('.filter-trigger');
            if (trigger) trigger.childNodes[0].textContent = this.textContent + ' ';

            renderCards(this.dataset.set);
        });
    });
}