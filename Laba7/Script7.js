function RemoveFigure(elementId) 
{
    const element = document.getElementById(elementId);
    element.remove();
}

function SelectFigure(elementId) 
{
    const element = document.getElementById(elementId);
    element.style.backgroundColor = 'yellow';
}

function SelectTriangle(elementId) 
{
    const element = document.getElementById(elementId);
    element.style.borderBottomColor = 'yellow';
}

function CreateBaseFigure(inputId, type) 
{
    const input = document.getElementById(inputId);
    const amount = parseInt(input.value);
    const parent = document.getElementById('figures');
    
    for (let i = 0; i < amount; i++) 
	{
        const figure = CreateFirgureType(type);
        parent.appendChild(figure);
    }
}

function CreateFirgureType(type) 
{
    const size = Math.random() * 250 + 50;
    const positionX = Math.random() * (window.innerWidth - size);
	const positionY = Math.random() * (window.innerHeight - size);
    
    const figure = document.createElement('div');
	figure.id = Math.floor(Math.random()*1000000)
	
	figure.style.position = 'absolute';
    figure.style.opacity = '0.9';
    figure.style.left = `${positionX}px`;
    figure.style.top = `${positionY}px`;
    
    ApplyFigureStyles(figure, type, size);
	
	figure.ondblclick = () => RemoveFigure(figure.id);
    
    if (type === 'triangle') 
	{
        figure.onclick = () => SelectTriangle(figure.id);
    } else 
	{
        figure.onclick = () => SelectFigure(figure.id);
    }
    
    return figure;
}

function ApplyFigureStyles(element, type, size)
{
    switch (type) 
	{
        case 'rect':
            element.style.backgroundColor = 'red';
            element.style.border = '3px solid black';
            element.style.width = `${size}px`;
            element.style.height = `${size}px`;
            break;
            
        case 'circle':
            element.style.backgroundColor = 'green';
            element.style.border = '3px solid black';
            element.style.width = `${size}px`;
            element.style.height = `${size}px`;
            element.style.borderRadius = '100%';
            break;
            
        case 'triangle':
            element.style.border = `${size}px solid transparent`;
            element.style.borderBottom = `${size * (Math.random() + 1)}px solid blue`;
            element.style.boxSizing = 'border-box';
            break;
    }
}

function CreateRect(inputId) 
{
    CreateBaseFigure(inputId, 'rect');
}

function CreateTri(inputId) 
{
    CreateBaseFigure(inputId, 'triangle');
}

function CreateCircle(inputId) 
{
    CreateBaseFigure(inputId, 'circle');
}