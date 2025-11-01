const itemsContainer = document.querySelector('.elements');
const savedContainer = document.querySelector('.save');
const addBtn = document.querySelector('.addElementButton');
const saveBtn = document.querySelector('.saveButton');

addBtn.addEventListener('click', () => {
    const newObject = document.createElement('div');
    newObject.classList.add('element');
    newObject.innerHTML = `
        <input type="text" class="elemInput">
        <input type="text" class="elemInput">
        <button type="button" class="upButton">&uarr;</button>
        <button type="button" class="downButton">&darr;</button>
        <button type="button" class="removeButton">&times;</button>
    `;
    itemsContainer.append(newObject);
});

saveBtn.addEventListener('click', () => {
    let savedObjects = '{';
    document.querySelectorAll('.element').forEach(item => {
        const first = item.querySelector('input:nth-child(1)').value;
        const second = item.querySelector('input:nth-child(2)').value;
        savedObjects += `"${first}":"${second}",`;
    });
    savedContainer.textContent = savedObjects.replace(/,$/, '}');
});

itemsContainer.addEventListener('click', e => {
    const obj = e.target.closest('.element');
    if (!obj) return;
    
    if (e.target.classList.contains('upButton')) {
        const prev = obj.previousElementSibling;
        prev?.before(obj);
    }
    else if (e.target.classList.contains('downButton')) {
        const next = obj.nextElementSibling;
        next?.after(obj);
    }
    else if (e.target.classList.contains('removeButton')) {
        obj.remove();
    }
});