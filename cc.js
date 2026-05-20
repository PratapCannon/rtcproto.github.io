/* ── MOBILE DROPDOWNS (click) ── */
document.querySelectorAll('.has-dropdown').forEach(function(item) {
    item.addEventListener('click', function(e) {
        if (window.innerWidth <= 900) {
            // If the click was on a child link inside the dropdown, let it navigate
            var clickedLink  = e.target.closest('a');
            var toggleLink   = item.querySelector(':scope > a');
            if (clickedLink && clickedLink !== toggleLink) return;

            const drop  = item.querySelector('.mega-dropdown') || item.querySelector('.dropdown');
            const arrow = item.querySelector('.arrow');
            if (!drop) return;
            const isOpen = drop.classList.contains('mobile-open');
            document.querySelectorAll('.mega-dropdown.mobile-open,.dropdown.mobile-open').forEach(d => d.classList.remove('mobile-open'));
            document.querySelectorAll('.has-dropdown .arrow').forEach(a => a.style.transform = '');
            if (!isOpen) { drop.classList.add('mobile-open'); if (arrow) arrow.style.transform = 'rotate(180deg)'; }
            e.preventDefault();
        }
    });
});