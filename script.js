function generateList(array) {
    let ul = document.createElement('ul');
    array.forEach(element => {
        let li = document.createElement('li');
        if (!Array.isArray(element)) {
            li.textContent = `${element}`;
        } else {
            let newUl = generateList(element);
            li.append(newUl);
        }
        ul.append(li);
    });
    return ul;
}

document.body.append(generateList([1, 2, 3, [1, 2, 3]]));
