var StarBuksGrade;
(function (StarBuksGrade) {
    StarBuksGrade[StarBuksGrade["NORMAL"] = 0] = "NORMAL";
    StarBuksGrade[StarBuksGrade["VIP"] = 1] = "VIP";
    StarBuksGrade[StarBuksGrade["SVIP"] = 2] = "SVIP";
})(StarBuksGrade || (StarBuksGrade = {}));
function getDiscount(v) {
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
//# sourceMappingURL=enum.js.map