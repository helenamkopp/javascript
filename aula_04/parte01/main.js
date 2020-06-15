var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://www.google.com.br/');
xhr.send(null);

xhr.onreadystatechange = function() {
    if (xhr.onreadystatechange === 4){
        console.log(JSON.parse(xhr.responseText));
    }
}