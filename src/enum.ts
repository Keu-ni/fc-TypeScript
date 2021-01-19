enum StarBuksGrade {
    NORMAL,
    VIP,
    VVIP,
    SVIP
}

function getDiscount(v: StarBuksGrade): number {
    switch (v) {
        case StarBuksGrade.NORMAL:
            return 0;
        case StarBuksGrade.VIP:
            return 10;
        case StarBuksGrade.SVIP:
            return 30;
    }
}

console.log(getDiscount(StarBuksGrade.SVIP));
console.log(StarBuksGrade.SVIP);