/**
 * Prueba: Convocatoria13122018/Desarrollador(a)/ Programador Grupo Esoft
 * by Julian Echeverri Ruiz
 * 
 * NOTA: El script fue interpretado en node V10.10.0
 */


let testMatriz = (n,m)=>{
    if(n>=2 && m>=2){
        let nums = []; // Almacena los valores que va a tener la matriz
        for(let i=1; i<=n*m;i++){
            nums.push(i);
        }
    let arreglo=[]; //Almacena la Matriz
    for(let i=0; i<n; i++){
        let fila= [];
        for(let i=0; i<m; i++){
            fila.push(nums.splice(Math.floor(Math.random()*nums.length),1)[0]); //Asigna cada valor Aleatoreamente
        }
        arreglo.push(fila)
    }
    
    let res = []; //Almacena la suma de cada columna
    for(let i=0; i<m; i++){
        let sum = 0;
        for(let j=0; j<n; j++){
            sum += arreglo[j][i]
        }
        res.push(sum);
    }

    let resColPares=res.filter((e,index)=>{ //Arreglo con la suma de las columnas pares
        if(index%2==0){
            return e;
        }
    })

    let promedioColPares = resColPares.reduce((a,b) => a + b, 0) / resColPares.length //Promedio de la suma de las columnas pares

    let colsMayoresPormPar = res.filter((e)=>{ //Contiene un array con la suma de las columnas que son mayores a promedioColPares
        if(e>promedioColPares){
            return e;
        }
    })

    console.log(arreglo)

    console.log("==========================================")
    console.log(res)
    console.log("==========================================")

    console.log(`Promedio columnas pares = ${promedioColPares}`)
    console.log(`Cantidad de columnas cuyo total es mayor que ${promedioColPares} = ${colsMayoresPormPar.length} `)
    
}else{
    console.log('Los argumentos deben ser Mayores que 2')
}
}

testMatriz(3,3)