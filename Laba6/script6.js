const leftButton = document.querySelector('.leftButton');
const middleButton = document.querySelector('.middleButton');
const rightButton = document.querySelector('.rightButton');

const leftColumn = document.querySelector('.leftImageContainer');
const rightColumn = document.querySelector('.rightImageContainer');

leftButton.addEventListener('click', () => 
{
    createBigAndSmolColumns(leftColumn, rightColumn);
});

rightButton.addEventListener('click', () => 
{
    createBigAndSmolColumns(rightColumn, leftColumn);
});

const createBigAndSmolColumns = (bigColumn, smallColumn) => 
{
    bigColumn.style.flexBasis = '95%';
    bigColumn.querySelector('img').style.width = '75%';
    bigColumn.querySelector('img').style.display = 'block';
    smallColumn.style.flexBasis = '5%';
    smallColumn.querySelector('img').style.display = 'none';
};



middleButton.addEventListener('click', () => 
{
    rightColumn.style.flexBasis = '50%';
    rightColumn.querySelector('img').style.width = '100%';
    rightColumn.querySelector('img').style.display = 'block';
    leftColumn.style.flexBasis = '50%';
    leftColumn.querySelector('img').style.display = 'block';
    leftColumn.querySelector('img').style.width = '100%';
});

middleButton.click();