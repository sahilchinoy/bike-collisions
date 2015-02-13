var incidents = [
{"count": 7, "streets": "DWIGHT WY and MARTIN LUTHER KING JR WY", "coordinates": [37.8633623, -122.2720937], "danger": 14},
{"count": 6, "streets": "GILMAN ST and PERALTA AV", "coordinates": [37.8809064, -122.2877621], "danger": 16},
{"count": 3, "streets": "VINE ST and WALNUT ST", "coordinates": [37.8803583, -122.2681855], "danger": 13},
{"count": 5, "streets": "DWIGHT WY and SAN PABLO AV", "coordinates": [37.8610865, -122.2896167], "danger": 12},
{"count": 4, "streets": "BERRYMAN ST and MARTIN LUTHER KING JR WY", "coordinates": [37.8832521, -122.2742923], "danger": 10},
{"count": 3, "streets": "MABEL ST and RT 13", "coordinates": [37.8527429, -122.2836967], "danger": 8},
{"count": 3, "streets": "HEARST AV and MCGEE AV", "coordinates": [37.8727255, -122.2777174], "danger": 8},
{"count": 4, "streets": "RUSSELL ST and SACRAMENTO ST", "coordinates": [37.85490160000001, -122.2794491], "danger": 9},
{"count": 3, "streets": "6TH ST and DWIGHT CRES", "coordinates": [37.8608402, -122.2953555], "danger": 8},
{"count": 5, "streets": "PRINCE ST and SHATTUCK AV", "coordinates": [37.8530915, -122.2662101], "danger": 13},
{"count": 3, "streets": "BANCROFT WY and MCKINLEY AV", "coordinates": [37.86683670000001, -122.2736418], "danger": 8},
{"count": 5, "streets": "MARTIN LUTHER KING JR WY and VIRGINIA ST", "coordinates": [37.8760157, -122.2735244], "danger": 12},
{"count": 12, "streets": "CENTER ST and SHATTUCK AV", "coordinates": [37.8703057, -122.2680389], "danger": 33},
{"count": 4, "streets": "BOWDITCH ST and DWIGHT WY", "coordinates": [37.8654206, -122.2561427], "danger": 14},
{"count": 5, "streets": "ALLSTON WY and SACRAMENTO ST", "coordinates": [37.8674161, -122.2815695], "danger": 11},
{"count": 3, "streets": "CARLETON ST and MARTIN LUTHER KING JR WY", "coordinates": [37.8606384, -122.271792], "danger": 7},
{"count": 4, "streets": "HEARST AV and SAN PABLO AV", "coordinates": [37.8704156, -122.292626], "danger": 10},
{"count": 4, "streets": "KING ST and RT 13", "coordinates": [37.8539099, -122.2742341], "danger": 10},
{"count": 3, "streets": "PARKER ST and REGENT ST", "coordinates": [37.8633594, -122.2576071], "danger": 9},
{"count": 3, "streets": "MILVIA ST and STUART ST", "coordinates": [37.85823389999999, -122.269236], "danger": 11},
{"count": 10, "streets": "BANCROFT WY and PIEDMONT AV", "coordinates": [37.8695901, -122.2523046], "danger": 25},
{"count": 6, "streets": "BANCROFT WY and SACRAMENTO ST", "coordinates": [37.86583950000001, -122.2813956], "danger": 15},
{"count": 5, "streets": "ELLSWORTH ST and PARKER ST", "coordinates": [37.8627552, -122.2626275], "danger": 15},
{"count": 3, "streets": "DANA ST and HASTE ST", "coordinates": [37.8657305, -122.260915], "danger": 8},
{"count": 16, "streets": "HEARST AV and OXFORD ST", "coordinates": [37.8741388, -122.2663575], "danger": 45},
{"count": 7, "streets": "BANCROFT WY and ELLSWORTH ST", "coordinates": [37.8681263, -122.2637263], "danger": 17},
{"count": 11, "streets": "HEARST AV and MARTIN LUTHER KING JR WY", "coordinates": [37.873328, -122.273212], "danger": 28},
{"count": 7, "streets": "7TH ST and FOLGER AV", "coordinates": [37.8500482, -122.2907992], "danger": 20},
{"count": 3, "streets": "BOWDITCH ST and CHANNING WY", "coordinates": [37.8672098, -122.2565217], "danger": 8},
{"count": 4, "streets": "ROSE ST and SHATTUCK AV", "coordinates": [37.8820373, -122.2694543], "danger": 10},
{"count": 4, "streets": "CHANNING WY and ELLSWORTH ST", "coordinates": [37.8663329, -122.263353], "danger": 9},
{"count": 3, "streets": "CHANNING WY and SACRAMENTO ST", "coordinates": [37.8639938, -122.2814175], "danger": 8},
{"count": 4, "streets": "CHANNING WY and PIEDMONT AV", "coordinates": [37.8680584, -122.2518164], "danger": 10},
{"count": 4, "streets": "PARK HILLS RD and WILDCAT CANYON RD", "coordinates": [37.8960177, -122.2557768], "danger": 12},
{"count": 6, "streets": "MARTIN LUTHER KING JR WY and ROSE ST", "coordinates": [37.8814538, -122.2740885], "danger": 13},
{"count": 7, "streets": "HEARST AV and SPRUCE ST", "coordinates": [37.874247, -122.2653738], "danger": 18},
{"count": 3, "streets": "SACRAMENTO ST and WOOLSEY ST", "coordinates": [37.8506266, -122.2783198], "danger": 6},
{"count": 6, "streets": "DANA ST and DURANT AV", "coordinates": [37.8675165, -122.2612739], "danger": 14},
{"count": 3, "streets": "10TH ST and ADDISON ST", "coordinates": [37.8675876, -122.2928899], "danger": 10},
{"count": 3, "streets": "ALLSTON WY and MCGEE AV", "coordinates": [37.8682111, -122.2772279], "danger": 7},
{"count": 8, "streets": "RT 123 and UNIVERSITY AV", "coordinates": [37.8690521, -122.2921723], "danger": 19},
{"count": 4, "streets": "2ND ST and GILMAN ST", "coordinates": [37.87847989999999, -122.3057555], "danger": 14},
{"count": 6, "streets": "ADELINE ST and FAIRVIEW ST", "coordinates": [37.8506846, -122.2706115], "danger": 14},
{"count": 4, "streets": "COLUSA AV and MARIN AV", "coordinates": [37.8895826, -122.2788656], "danger": 11},
{"count": 3, "streets": "9TH ST and HEARST AV", "coordinates": [37.8724805, -122.279548], "danger": 8},
{"count": 5, "streets": "ALLSTON WY and SAN PABLO AV", "coordinates": [37.8663701, -122.2913134], "danger": 12},
{"count": 5, "streets": "SHATTUCK AV and STUART ST", "coordinates": [37.8585341, -122.2669003], "danger": 16},
{"count": 14, "streets": "HEARST AV and SHATTUCK AV", "coordinates": [37.8738795, -122.2685274], "danger": 36},
{"count": 4, "streets": "MICHIGAN AV and SPRUCE ST", "coordinates": [37.901591, -122.2702682], "danger": 12},
{"count": 3, "streets": "9TH ST and DWIGHT WY", "coordinates": [37.8606466, -122.2918124], "danger": 6},
{"count": 3, "streets": "DWIGHT WY and FULTON ST", "coordinates": [37.8642505, -122.2652527], "danger": 8},
{"count": 3, "streets": "DOHR ST and RUSSELL ST", "coordinates": [37.8546105, -122.2811692], "danger": 9},
{"count": 4, "streets": "MARTIN LUTHER KING JR WY and PARKER ST", "coordinates": [37.8615405, -122.2718902], "danger": 10},
{"count": 7, "streets": "ALLSTON WY and OXFORD ST", "coordinates": [37.8696581, -122.2657298], "danger": 16},
{"count": 5, "streets": "ALCATRAZ AV and SACRAMENTO ST", "coordinates": [37.84791329999999, -122.2776885], "danger": 12},
{"count": 9, "streets": "CHANNING WY and TELEGRAPH AV", "coordinates": [37.866914, -122.2587858], "danger": 26},
{"count": 3, "streets": "CARLETON ST and FULTON ST", "coordinates": [37.8615733, -122.2646854], "danger": 9},
{"count": 11, "streets": "COLLEGE AV and WEBSTER ST", "coordinates": [37.8558553, -122.252929], "danger": 27},
{"count": 6, "streets": "BOWDITCH ST and DURANT AV", "coordinates": [37.8681063, -122.2567029], "danger": 14},
{"count": 4, "streets": "EUNICE ST and SPRUCE ST", "coordinates": [37.8860666, -122.2665962], "danger": 11},
{"count": 3, "streets": "CHANNING WY and RT 123", "coordinates": [37.862872, -122.2900545], "danger": 7},
{"count": 5, "streets": "HASTE ST and MILVIA ST", "coordinates": [37.8645658, -122.2699428], "danger": 9},
{"count": 6, "streets": "CALIFORNIA ST and DWIGHT WY", "coordinates": [37.8624713, -122.2789871], "danger": 16},
{"count": 14, "streets": "COLLEGE AV and RUSSELL ST", "coordinates": [37.8584799, -122.2531821], "danger": 37},
{"count": 4, "streets": "DELAWARE ST and RT 123", "coordinates": [37.87167609999999, -122.2930211], "danger": 9},
{"count": 12, "streets": "FRONTAGE RD and UNIVERSITY AV", "coordinates": [37.8662875, -122.3054876], "danger": 30},
{"count": 7, "streets": "MARTIN LUTHER KING JR WY and RT 13", "coordinates": [37.8542718, -122.2711408], "danger": 16},
{"count": 8, "streets": "MARTIN LUTHER KING JR WY and PRINCE ST", "coordinates": [37.8524898, -122.2709328], "danger": 20},
{"count": 4, "streets": "ADDISON ST and CURTIS ST", "coordinates": [37.8684756, -122.2893517], "danger": 14},
{"count": 3, "streets": "BLAKE ST and CALIFORNIA ST", "coordinates": [37.861638, -122.2785329], "danger": 11},
{"count": 9, "streets": "ADDISON ST and MILVIA ST", "coordinates": [37.8708687, -122.2706451], "danger": 25},
{"count": 3, "streets": "BANCROFT WY and OXFORD ST", "coordinates": [37.8805159, -122.2670654], "danger": 8},
{"count": 5, "streets": "BLAKE ST and MILVIA ST", "coordinates": [37.86275029999999, -122.2697406], "danger": 11},
{"count": 14, "streets": "CHANNING WY and SHATTUCK AV", "coordinates": [37.8658022, -122.2675057], "danger": 38},
{"count": 4, "streets": "ASHBY AV and MABEL ST", "coordinates": [37.8527429, -122.2836967], "danger": 10},
{"count": 3, "streets": "MARIN AV and THE ALAMEDA", "coordinates": [37.8888828, -122.2765258], "danger": 6},
{"count": 6, "streets": "BANCROFT WY and COLLEGE AV", "coordinates": [37.8692972, -122.2546034], "danger": 15},
{"count": 3, "streets": "MARTIN LUTHER KING JR WY and STUART ST", "coordinates": [37.8579613, -122.2714923], "danger": 9},
{"count": 4, "streets": "7TH ST and DWIGHT WY", "coordinates": [37.8601953, -122.2940515], "danger": 10},
{"count": 5, "streets": "RT 13 and SACRAMENTO ST", "coordinates": [37.8532935, -122.2789409], "danger": 15},
{"count": 3, "streets": "SACRAMENTO ST and WARD ST", "coordinates": [37.8578354, -122.279892], "danger": 6},
{"count": 6, "streets": "SHATTUCK AV and VIRGINIA ST", "coordinates": [37.8765922, -122.2689462], "danger": 15},
{"count": 5, "streets": "CARLETON ST and SHATTUCK AV", "coordinates": [37.8612545, -122.2671221], "danger": 12},
{"count": 3, "streets": "9TH ST and ALLSTON WY", "coordinates": [37.8659284, -122.2935297], "danger": 7},
{"count": 4, "streets": "DURANT AV and FULTON ST", "coordinates": [37.8669493, -122.2657063], "danger": 7},
{"count": 3, "streets": "DERBY ST and MILVIA ST", "coordinates": [37.8600276, -122.2694365], "danger": 8},
{"count": 9, "streets": "DERBY ST and TELEGRAPH AV", "coordinates": [37.8614007, -122.2589916], "danger": 17},
{"count": 5, "streets": "HOPKINS ST and PERALTA AV", "coordinates": [37.8779773, -122.2888634], "danger": 12},
{"count": 4, "streets": "MARIN AV and SPRUCE ST", "coordinates": [37.8931593, -122.2676922], "danger": 11},
{"count": 4, "streets": "RT 123 and VIRGINIA ST", "coordinates": [37.8734354, -122.2935944], "danger": 12},
{"count": 3, "streets": "DERBY ST and FULTON ST", "coordinates": [37.8606783, -122.2645005], "danger": 11},
{"count": 5, "streets": "HEARST AV and MILVIA ST", "coordinates": [37.8736106, -122.2709039], "danger": 11},
{"count": 5, "streets": "HEARST AV and RT 123", "coordinates": [37.8704156, -122.292626], "danger": 14},
{"count": 4, "streets": "ROSE ST and WALNUT ST", "coordinates": [37.8821812, -122.268396], "danger": 13},
{"count": 4, "streets": "SHATTUCK AV and SHATTUCK PL", "coordinates": [37.8808618, -122.2693133], "danger": 11},
{"count": 5, "streets": "HEARST AV and LEROY AV", "coordinates": [37.87533519999999, -122.2583139], "danger": 13},
{"count": 3, "streets": "DWIGHT WY and REGENT ST", "coordinates": [37.8652063, -122.2577897], "danger": 8},
{"count": 16, "streets": "ALCATRAZ AV and COLLEGE AV", "coordinates": [37.8512587, -122.2524698], "danger": 41},
{"count": 6, "streets": "ALLSTON WY and CALIFORNIA ST", "coordinates": [37.8637919, -122.2790677], "danger": 18},
{"count": 3, "streets": "SAN BENITO RD and SPRUCE ST", "coordinates": [37.8907843, -122.2672074], "danger": 11},
{"count": 7, "streets": "ASHBY AV and MARTIN LUTHER KING JR WY", "coordinates": [37.8542718, -122.2711408], "danger": 19},
{"count": 6, "streets": "ASHBY AV and SHATTUCK AV", "coordinates": [37.8552946, -122.2665022], "danger": 14},
{"count": 8, "streets": "RT 13 and SHATTUCK AV", "coordinates": [37.8552946, -122.2665022], "danger": 20},
{"count": 4, "streets": "HOPKINS ST and THE ALAMEDA", "coordinates": [37.8854196, -122.2749326], "danger": 10},
{"count": 3, "streets": "GRIZZLY PEAK BL and SHASTA RD", "coordinates": [37.8899645, -122.2522154], "danger": 9},
{"count": 5, "streets": "ARCH ST and HEARST AV", "coordinates": [37.8745441, -122.2639584], "danger": 13},
{"count": 5, "streets": "MILVIA ST and PARKER ST", "coordinates": [37.8618417, -122.2696373], "danger": 13},
{"count": 5, "streets": "CARLETON ST and SACRAMENTO ST", "coordinates": [37.8595844, -122.2804119], "danger": 12},
{"count": 8, "streets": "PARKER ST and TELEGRAPH AV", "coordinates": [37.8632728, -122.2587294], "danger": 15},
{"count": 12, "streets": "CHANNING WY and MARTIN LUTHER KING JR WY", "coordinates": [37.8651782, -122.2723067], "danger": 31},
{"count": 3, "streets": "HOPKINS ST and MONTEREY AV", "coordinates": [37.8816783, -122.2819304], "danger": 8},
{"count": 6, "streets": "GILMAN ST and RT 80", "coordinates": [37.8715926, -122.272747], "danger": 15},
{"count": 3, "streets": "BANCROFT WY and SAN PABLO AV", "coordinates": [37.8646125, -122.2907521], "danger": 6},
{"count": 3, "streets": "BONAR ST and UNIVERSITY AV", "coordinates": [37.86964589999999, -122.2874929], "danger": 8},
{"count": 3, "streets": "9TH ST and HEINZ AV", "coordinates": [37.8539297, -122.289681], "danger": 8},
{"count": 4, "streets": "MILVIA ST and WARD ST", "coordinates": [37.859118, -122.2693305], "danger": 11},
{"count": 5, "streets": "CHANNING WY and MILVIA ST", "coordinates": [37.8654556, -122.270051], "danger": 17},
{"count": 4, "streets": "EUCLID AV and GRIZZLY PEAK BL", "coordinates": [37.9018905, -122.2671179], "danger": 11},
{"count": 8, "streets": "ROSE ST and SPRUCE ST", "coordinates": [37.882475, -122.2661506], "danger": 22},
{"count": 4, "streets": "RT 123 and RT 13", "coordinates": [37.8521407, -122.286737], "danger": 13},
{"count": 4, "streets": "6TH ST and HEARST AV", "coordinates": [37.8693195, -122.2980949], "danger": 11},
{"count": 9, "streets": "SACRAMENTO ST and UNIVERSITY AV", "coordinates": [37.8703644, -122.2818585], "danger": 26},
{"count": 12, "streets": "BANCROFT WY and DANA ST", "coordinates": [37.8684357, -122.2614604], "danger": 32},
{"count": 10, "streets": "COLLEGE AV and DWIGHT WY", "coordinates": [37.865707, -122.2539054], "danger": 26},
{"count": 3, "streets": "SOLANO AV and TULARE AV", "coordinates": [37.8911985, -122.2824112], "danger": 7},
{"count": 7, "streets": "COLLEGE AV and HASTE ST", "coordinates": [37.8665789, -122.2540827], "danger": 19},
{"count": 3, "streets": "BENVENUE AV and RT 13", "coordinates": [37.85689300000001, -122.2542661], "danger": 8},
{"count": 6, "streets": "BANCROFT WY and BOWDITCH ST", "coordinates": [37.8690034, -122.2568986], "danger": 16},
{"count": 9, "streets": "KITTREDGE ST and SHATTUCK AV", "coordinates": [37.8684776, -122.2679492], "danger": 25},
{"count": 3, "streets": "CEDAR ST and JUANITA WY", "coordinates": [37.87623079999999, -122.2866587], "danger": 6},
{"count": 10, "streets": "BANCROFT WY and FULTON ST", "coordinates": [37.8678341, -122.2658836], "danger": 34},
{"count": 5, "streets": "DERBY ST and MARTIN LUTHER KING JR WY", "coordinates": [37.8597597, -122.2716921], "danger": 13},
{"count": 4, "streets": "CALIFORNIA ST and OREGON ST", "coordinates": [37.8563151, -122.2774311], "danger": 9},
{"count": 3, "streets": "MCGEE AV and RUSSELL ST", "coordinates": [37.8555862, -122.2750093], "danger": 7},
{"count": 5, "streets": "COLUSA AV and SOLANO AV", "coordinates": [37.8913376, -122.279817], "danger": 9},
{"count": 3, "streets": "6TH ST and UNIVERSITY AV", "coordinates": [37.868032, -122.2977077], "danger": 5},
{"count": 20, "streets": "ADELINE ST and ALCATRAZ AV", "coordinates": [37.8487531, -122.2713266], "danger": 55},
{"count": 3, "streets": "KITTREDGE ST and OXFORD ST", "coordinates": [37.8687275, -122.266171], "danger": 8},
{"count": 10, "streets": "SHATTUCK AV and VINE ST", "coordinates": [37.8802352, -122.2692423], "danger": 25},
{"count": 3, "streets": "MILVIA ST and VIRGINIA ST", "coordinates": [37.8763056, -122.2712271], "danger": 9},
{"count": 17, "streets": "DWIGHT WY and MILVIA ST", "coordinates": [37.86365929999999, -122.2698367], "danger": 46},
{"count": 3, "streets": "MARIN AV and TULARE AV", "coordinates": [37.8894223, -122.2818408], "danger": 6},
{"count": 3, "streets": "ASHBY AV and KING ST", "coordinates": [37.8539099, -122.2742341], "danger": 6},
{"count": 4, "streets": "CARLETON ST and MILVIA ST", "coordinates": [37.8609468, -122.2695388], "danger": 12},
{"count": 3, "streets": "TELEGRAPH AV and WOOLSEY ST", "coordinates": [37.8529677, -122.2601833], "danger": 9},
{"count": 4, "streets": "BLAKE ST and MARTIN LUTHER KING JR WY", "coordinates": [37.86246, -122.2719957], "danger": 9},
{"count": 3, "streets": "MARIN AV and THE CIRCLE", "coordinates": [37.8902227, -122.2722477], "danger": 8},
{"count": 4, "streets": "MCGEE AV and UNIVERSITY AV", "coordinates": [37.8709273, -122.2775126], "danger": 10},
{"count": 11, "streets": "EUCLID AV and HEARST AV", "coordinates": [37.8751149, -122.2601603], "danger": 29},
{"count": 5, "streets": "ASHBY AV and SAN PABLO AV", "coordinates": [37.8521407, -122.286737], "danger": 11},
{"count": 4, "streets": "EUCLID AV and EUNICE ST", "coordinates": [37.8865977, -122.2623651], "danger": 11},
{"count": 6, "streets": "COLLEGE AV and PARKER ST", "coordinates": [37.8636146, -122.2536932], "danger": 22},
{"count": 3, "streets": "ADDISON ST and SHATTUCK AV", "coordinates": [37.87116830000001, -122.2682847], "danger": 9},
{"count": 9, "streets": "7TH ST and UNIVERSITY AV", "coordinates": [37.8681459, -122.2966091], "danger": 18},
{"count": 6, "streets": "STUART ST and TELEGRAPH AV", "coordinates": [37.8595432, -122.2592466], "danger": 14},
{"count": 8, "streets": "CHANNING WY and DANA ST", "coordinates": [37.8666209, -122.2610857], "danger": 19},
{"count": 5, "streets": "CEDAR ST and SAN PABLO AV", "coordinates": [37.8752241, -122.2940302], "danger": 10},
{"count": 5, "streets": "OREGON ST and TELEGRAPH AV", "coordinates": [37.858601, -122.2593035], "danger": 14},
{"count": 5, "streets": "7TH ST and HEINZ AV", "coordinates": [37.8534795, -122.2919047], "danger": 11},
{"count": 5, "streets": "BERKELEY WY and SHATTUCK AV", "coordinates": [37.8729955, -122.2685382], "danger": 10},
{"count": 5, "streets": "ADELINE ST and WOOLSEY ST", "coordinates": [37.8519295, -122.2700332], "danger": 14},
{"count": 5, "streets": "CEDAR ST and SHATTUCK AV", "coordinates": [37.8784363, -122.2690398], "danger": 11},
{"count": 3, "streets": "10TH ST and BANCROFT WY", "coordinates": [37.8643904, -122.2918556], "danger": 7},
{"count": 5, "streets": "SHATTUCK AV and WOOLSEY ST", "coordinates": [37.8523792, -122.2661169], "danger": 14},
{"count": 11, "streets": "ADDISON ST and SACRAMENTO ST", "coordinates": [37.869446, -122.2817599], "danger": 29},
{"count": 3, "streets": "ACTON ST and RT 13", "coordinates": [37.8532113, -122.2813997], "danger": 9},
{"count": 5, "streets": "ACTON ST and UNIVERSITY AV", "coordinates": [37.8700631, -122.2842597], "danger": 14},
{"count": 5, "streets": "HASTE ST and PIEDMONT AV", "coordinates": [37.8668214, -122.2518383], "danger": 10},
{"count": 8, "streets": "ASHBY AV and COLLEGE AV", "coordinates": [37.8570436, -122.2530418], "danger": 22},
{"count": 3, "streets": "DELAWARE ST and SHATTUCK AV", "coordinates": [37.8747884, -122.2687373], "danger": 8},
{"count": 4, "streets": "OREGON ST and SHATTUCK AV", "coordinates": [37.8576334, -122.2667994], "danger": 8},
{"count": 3, "streets": "PARKER ST and WARRING ST", "coordinates": [37.864131, -122.2502923], "danger": 7},
{"count": 10, "streets": "HASTE ST and TELEGRAPH AV", "coordinates": [37.8660242, -122.2586271], "danger": 25},
{"count": 3, "streets": "HASTE ST and MARTIN LUTHER KING JR WY", "coordinates": [37.8642817, -122.2721967], "danger": 8},
{"count": 4, "streets": "COLLEGE AV and DERBY ST", "coordinates": [37.8621145, -122.2535514], "danger": 11},
{"count": 6, "streets": "OXFORD ST and VIRGINIA ST", "coordinates": [37.876888, -122.266674], "danger": 16},
{"count": 6, "streets": "CEDAR ST and MILVIA ST", "coordinates": [37.8781329, -122.2714229], "danger": 14},
{"count": 7, "streets": "SAN PABLO AV and UNIVERSITY AV", "coordinates": [37.8690521, -122.2921723], "danger": 18},
{"count": 3, "streets": "6TH ST and ADDISON ST", "coordinates": [37.8667178, -122.2972542], "danger": 8},
{"count": 3, "streets": "CONTRA COSTA AV and SOLANO AV", "coordinates": [37.890891, -122.2755601], "danger": 8},
{"count": 3, "streets": "HEARST AV and SACRAMENTO ST", "coordinates": [37.8718774, -122.2821882], "danger": 7},
{"count": 3, "streets": "GRANT ST and HEARST AV", "coordinates": [37.8730128, -122.2754462], "danger": 8},
{"count": 9, "streets": "CHANNING WY and FULTON ST", "coordinates": [37.8660389, -122.2656468], "danger": 23},
{"count": 3, "streets": "ELLSWORTH ST and STUART ST", "coordinates": [37.8591827, -122.2618928], "danger": 7},
{"count": 4, "streets": "CEDAR ST and OXFORD ST", "coordinates": [37.8787078, -122.2668595], "danger": 10},
{"count": 15, "streets": "ALLSTON WY and MILVIA ST", "coordinates": [37.8690594, -122.2704546], "danger": 37},
{"count": 6, "streets": "HASTE ST and SHATTUCK AV", "coordinates": [37.864875, -122.2675421], "danger": 13},
{"count": 3, "streets": "ALLSTON WY and GRANT ST", "coordinates": [37.869424, -122.2750668], "danger": 9},
{"count": 6, "streets": "TELEGRAPH AV and WEBSTER ST", "coordinates": [37.8551925, -122.2597591], "danger": 15},
{"count": 8, "streets": "ADELINE ST and HARMON ST", "coordinates": [37.8496793, -122.2711471], "danger": 26},
{"count": 3, "streets": "CALIFORNIA ST and DERBY ST", "coordinates": [37.8589948, -122.2779836], "danger": 7},
{"count": 5, "streets": "OXFORD ST and ROSE ST", "coordinates": [37.8823365, -122.2672637], "danger": 16},
{"count": 3, "streets": "SUNSET LN and WILDCAT CANYON RD", "coordinates": [37.8996393, -122.2607107], "danger": 9},
{"count": 10, "streets": "CALIFORNIA ST and HEARST AV", "coordinates": [37.8724262, -122.2799648], "danger": 23},
{"count": 4, "streets": "CARLETON ST and ELLSWORTH ST", "coordinates": [37.8618571, -122.2624409], "danger": 9},
{"count": 5, "streets": "FULTON ST and STUART ST", "coordinates": [37.8588861, -122.2641351], "danger": 16},
{"count": 8, "streets": "EUCLID AV and KEITH AV", "coordinates": [37.8905117, -122.2632019], "danger": 21},
{"count": 8, "streets": "GRANT ST and UNIVERSITY AV", "coordinates": [37.871216, -122.2752559], "danger": 21},
{"count": 3, "streets": "6TH ST and GILMAN ST", "coordinates": [37.879372, -122.3013291], "danger": 8},
{"count": 13, "streets": "CRYSTAL WY and EUCLID AV", "coordinates": [37.8876604, -122.2621652], "danger": 39},
{"count": 3, "streets": "CURTIS ST and DELAWARE ST", "coordinates": [37.8720937, -122.2898191], "danger": 7},
{"count": 3, "streets": "FRESNO ST and SOLANO AV", "coordinates": [37.8914372, -122.2781711], "danger": 9},
{"count": 3, "streets": "HOPKINS ST and SACRAMENTO ST", "coordinates": [37.880995, -122.2832534], "danger": 9},
{"count": 4, "streets": "COLLEGE AV and WOOLSEY ST", "coordinates": [37.8538875, -122.2527361], "danger": 13},
{"count": 4, "streets": "ADELINE ST and OREGON ST", "coordinates": [37.857428, -122.2682845], "danger": 11},
{"count": 6, "streets": "BANCROFT WY and MILVIA ST", "coordinates": [37.8672755, -122.2702534], "danger": 13},
{"count": 18, "streets": "SHATTUCK AV and UNIVERSITY AV", "coordinates": [37.8721732, -122.2678009], "danger": 42},
{"count": 11, "streets": "BLAKE ST and SHATTUCK AV", "coordinates": [37.8630812, -122.2671851], "danger": 28},
{"count": 9, "streets": "ADELINE ST and ASHBY AV", "coordinates": [37.8547666, -122.2689264], "danger": 23},
{"count": 4, "streets": "DANA ST and DWIGHT WY", "coordinates": [37.86483339999999, -122.2607244], "danger": 11},
{"count": 6, "streets": "ASHBY AV and TELEGRAPH AV", "coordinates": [37.8561771, -122.2597288], "danger": 18},
{"count": 6, "streets": "RT 13 and TELEGRAPH AV", "coordinates": [37.8561771, -122.2597288], "danger": 18},
{"count": 4, "streets": "EUCLID AV and RIDGE RD", "coordinates": [37.8760335, -122.260333], "danger": 10},
{"count": 4, "streets": "BERKELEY WY and MARTIN LUTHER KING JR WY", "coordinates": [37.8724567, -122.2731207], "danger": 10},
{"count": 4, "streets": "BERKELEY WY and OXFORD ST", "coordinates": [37.873372, -122.2661207], "danger": 9},
{"count": 3, "streets": "JONES ST and RT 123", "coordinates": [37.8763741, -122.2945447], "danger": 6},
{"count": 10, "streets": "MILVIA ST and UNIVERSITY AV", "coordinates": [37.871918, -122.2706021], "danger": 22},
{"count": 4, "streets": "DELAWARE ST and SACRAMENTO ST", "coordinates": [37.8730549, -122.2823245], "danger": 11},
{"count": 3, "streets": "9TH ST and VIRGINIA ST", "coordinates": [37.8729968, -122.295793], "danger": 7},
{"count": 3, "streets": "BANCROFT WY and MARTIN LUTHER KING JR WY", "coordinates": [37.8669897, -122.2725025], "danger": 13},
{"count": 3, "streets": "BANCROFT WY and BARROW LN", "coordinates": [37.8688307, -122.2583329], "danger": 8},
{"count": 3, "streets": "CALIFORNIA ST and RT 13", "coordinates": [37.8535627, -122.276915], "danger": 7},
{"count": 3, "streets": "4TH ST and GILMAN ST", "coordinates": [37.8789319, -122.3035092], "danger": 9},
{"count": 3, "streets": "ASHBY AV and DOMINGO AV", "coordinates": [37.8580732, -122.2438431], "danger": 10},
{"count": 3, "streets": "10TH ST and UNIVERSITY AV", "coordinates": [37.8688246, -122.2932768], "danger": 5},
{"count": 6, "streets": "DWIGHT WY and TELEGRAPH AV", "coordinates": [37.8651365, -122.2584315], "danger": 11},
{"count": 3, "streets": "PARKER ST and SHATTUCK AV", "coordinates": [37.8621674, -122.2670845], "danger": 9},
{"count": 5, "streets": "SACRAMENTO ST and TYLER ST", "coordinates": [37.852408, -122.278734], "danger": 13},
{"count": 12, "streets": "ADDISON ST and MARTIN LUTHER KING JR WY", "coordinates": [37.8705876, -122.272894], "danger": 30},
{"count": 3, "streets": "CHESTNUT ST and UNIVERSITY AV", "coordinates": [37.8696879, -122.2880534], "danger": 7},
{"count": 3, "streets": "HAROLD WY and KITTREDGE ST", "coordinates": [37.8683236, -122.2691149], "danger": 6},
{"count": 3, "streets": "HILLEGASS AV and WOOLSEY ST", "coordinates": [37.8536486, -122.254767], "danger": 11},
{"count": 3, "streets": "MARTIN LUTHER KING JR WY and OREGON ST", "coordinates": [37.8570557, -122.2713947], "danger": 7},
{"count": 6, "streets": "DERBY ST and SHATTUCK AV", "coordinates": [37.8603284, -122.267118], "danger": 13},
{"count": 7, "streets": "CEDAR ST and RT 123", "coordinates": [37.8752241, -122.2940302], "danger": 16},
{"count": 3, "streets": "HOWE ST and TELEGRAPH AV", "coordinates": [37.8571259, -122.259505], "danger": 8},
{"count": 7, "streets": "FULTON ST and HASTE ST", "coordinates": [37.86514750000001, -122.265459], "danger": 16},
{"count": 5, "streets": "FRANCISCO ST and SHATTUCK AV", "coordinates": [37.8756785, -122.2687298], "danger": 11},
{"count": 3, "streets": "MILVIA ST and ROSE ST", "coordinates": [37.88173990000001, -122.2718259], "danger": 7},
{"count": 3, "streets": "ASHBY AV and ELLIS ST", "coordinates": [37.8540403, -122.2732255], "danger": 6},
{"count": 10, "streets": "DWIGHT WY and SHATTUCK AV", "coordinates": [37.8639679, -122.2674246], "danger": 26},
{"count": 3, "streets": "ASHBY AV and FRONTAGE RD", "coordinates": [37.8491678, -122.3001161], "danger": 8},
{"count": 3, "streets": "OREGON ST and SACRAMENTO ST", "coordinates": [37.8560377, -122.2795493], "danger": 8},
{"count": 3, "streets": "ALLSTON WY and RT 123", "coordinates": [37.8663701, -122.2913134], "danger": 10},
{"count": 4, "streets": "DURANT AV and TELEGRAPH AV", "coordinates": [37.867814, -122.2589767], "danger": 11},
{"count": 7, "streets": "CHANNING WY and COLLEGE AV", "coordinates": [37.8674951, -122.2542489], "danger": 16},
{"count": 5, "streets": "RUSSELL ST and TELEGRAPH AV", "coordinates": [37.8576734, -122.2595135], "danger": 15},
{"count": 4, "streets": "MILVIA ST and OREGON ST", "coordinates": [37.8573198, -122.2691339], "danger": 11},
{"count": 3, "streets": "MARTIN LUTHER KING JR WY and WARD ST", "coordinates": [37.8588669, -122.2715948], "danger": 8},
{"count": 3, "streets": "HEARST AV and LA LOMA AV", "coordinates": [37.8755274, -122.2568119], "danger": 6},
{"count": 12, "streets": "BANCROFT WY and SHATTUCK AV", "coordinates": [37.8675985, -122.2676968], "danger": 31},
{"count": 7, "streets": "HILLEGASS AV and RT 13", "coordinates": [37.85672080000001, -122.2555046], "danger": 16},
{"count": 4, "streets": "BOWDITCH ST and HASTE ST", "coordinates": [37.8663193, -122.2563434], "danger": 9},
{"count": 3, "streets": "CAMELIA ST and RT 123", "coordinates": [37.8787321, -122.2953011], "danger": 8},
{"count": 4, "streets": "ADELINE ST and RUSSELL ST", "coordinates": [37.856268, -122.2687132], "danger": 10},
{"count": 9, "streets": "DURANT AV and SHATTUCK AV", "coordinates": [37.8666989, -122.2676075], "danger": 22},
{"count": 5, "streets": "CALIFORNIA ST and UNIVERSITY AV", "coordinates": [37.8706401, -122.2797647], "danger": 12},
{"count": 5, "streets": "ADDISON ST and BOLIVAR DR", "coordinates": [37.86572900000001, -122.302119], "danger": 18},
{"count": 12, "streets": "MARTIN LUTHER KING JR WY and UNIVERSITY AV", "coordinates": [37.8716087, -122.2730269], "danger": 33},
{"count": 3, "streets": "PRINCE ST and TELEGRAPH AV", "coordinates": [37.8537156, -122.2600823], "danger": 8},
{"count": 7, "streets": "DWIGHT WY and SACRAMENTO ST", "coordinates": [37.8621859, -122.2811937], "danger": 19},
{"count": 5, "streets": "EUCLID AV and HILGARD AV", "coordinates": [37.87863249999999, -122.2608912], "danger": 15},
{"count": 7, "streets": "ALLSTON WY and MARTIN LUTHER KING JR WY", "coordinates": [37.8687926, -122.2726916], "danger": 18},
{"count": 5, "streets": "BANCROFT WY and RT 123", "coordinates": [37.8646125, -122.2907521], "danger": 14},
{"count": 11, "streets": "RUSSELL ST and SHATTUCK AV", "coordinates": [37.85674059999999, -122.2666813], "danger": 30},
{"count": 10, "streets": "OXFORD ST and UNIVERSITY AV", "coordinates": [37.8723917, -122.2661629], "danger": 25},
{"count": 7, "streets": "CENTER ST and MARTIN LUTHER KING JR WY", "coordinates": [37.8696915, -122.2727922], "danger": 16},
{"count": 9, "streets": "BANCROFT WY and TELEGRAPH AV", "coordinates": [37.8687287, -122.2591604], "danger": 23},
{"count": 10, "streets": "CENTER ST and OXFORD ST", "coordinates": [37.8705998, -122.2659311], "danger": 23},
{"count": 5, "streets": "SOLANO AV and THE ALAMEDA", "coordinates": [37.8914515, -122.2770904], "danger": 14},
{"count": 8, "streets": "DWIGHT WY and WARRING ST", "coordinates": [37.865934, -122.250464], "danger": 20},
{"count": 8, "streets": "ALLSTON WY and SHATTUCK AV", "coordinates": [37.8693776, -122.2680349], "danger": 21},
{"count": 4, "streets": "ASHBY AV and DEAKIN ST", "coordinates": [37.8558198, -122.2624614], "danger": 9},
{"count": 7, "streets": "GILMAN ST and SANTA FE AV", "coordinates": [37.8814875, -122.2908759], "danger": 21},
{"count": 3, "streets": "CARLETON ST and SAN PABLO AV", "coordinates": [37.8580681, -122.2884927], "danger": 8},
{"count": 14, "streets": "CENTER ST and MILVIA ST", "coordinates": [37.8699847, -122.2705579], "danger": 35},
{"count": 3, "streets": "DURANT AV and ELLSWORTH ST", "coordinates": [37.8672329, -122.2635606], "danger": 8}]