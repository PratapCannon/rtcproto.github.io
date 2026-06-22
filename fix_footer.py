from pathlib import Path
import re
pattern = re.compile(r'(?s)<footer class="site-footer">.*?</footer>')
replacement = '''<footer class="site-footer">
    <nav class="footer-nav-links">
        <a href="vmo.html">VMO</a>
        <a href="partners.html">Partners</a>
        <a href="#">Contact Us</a>
        <a href="#">Terms of Use</a>
    </nav>
    <span class="footer-copy">© 2025 RTC Heritage Portal — Royal Thimphu College, Bhutan</span>
</footer>'''
updated = []
for path in Path('.').glob('*.html'):
    text = path.read_text(encoding='utf-8', errors='replace')
    if pattern.search(text):
        new_text = pattern.sub(replacement, text)
        if new_text != text:
            path.write_text(new_text, encoding='utf-8', newline='\n')
            updated.append(path.name)
print('Updated', len(updated), 'files')
for name in updated:
    print(name)
