function insert(n) {
    document.form.textview.value += n;
}

function equal() {
    document.form.textview.value = eval(document.form.textview.value);
}

function Back() {
    let op = document.form.textview.value;
    document.form.textview.value = op.substring(0,op.length-1);
}

function Clear() {
    document.form.textview.value = "";
}