const formatMoney = value =>{
    const formatter = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD"
    })
    return formatter.format(value)
}

const calculateDebt = (quantity,term)=>{
    let totalDebt = quantity

    switch(term){
        case 6: totalDebt *= 1.15
            break;
        case 12: totalDebt *= 1.5
            break;
        case 18: totalDebt *= 2.
            break;
        case 24: totalDebt *= 2.75
            break;
    }

    return totalDebt
}

export {formatMoney, calculateDebt}