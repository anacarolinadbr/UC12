// O JS pode ser exatamente este:
const toggle = document.getElementById('toggle-tema');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.textContent = document.body.classList.contains('dark')
    ? 'Ativar tema claro'
    : 'Ativar tema escuro';
});