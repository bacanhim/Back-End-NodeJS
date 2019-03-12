function operacao(v1, v2, op){
    if (op=="+"){
        res=v1+v2;
        console.log(res);
    }
    if (op=="-"){
        res=v1-v2;
        console.log(res);
    }
    if (op=="*"){
        res=v1*v2;
        console.log(res);
    }
    if (op=="/"){
        res=v1/v2;
        console.log(res);
    }
}
operacao(10, 10, '/');