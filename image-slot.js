class ImageSlot extends HTMLElement {
  connectedCallback() {
    if (this.querySelector('img')) return;
    const text = this.getAttribute('placeholder') || '';
    this.style.cssText += ';display:flex;align-items:center;justify-content:center;background:#f0e8e0;color:#8a736a;font:400 13px/1.5 sans-serif;text-align:center;padding:16px;';
    const span = document.createElement('span');
    span.textContent = text;
    this.appendChild(span);
  }
}
customElements.define('image-slot', ImageSlot);
