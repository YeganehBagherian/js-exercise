const mounthnum = 8 ;

if ( mounthnum === 1)console.log("Farvardin");
else if (mounthnum === 2)console.log("Ordibehesht");
else if (mounthnum === 3)console.log("Khordad");
else if (mounthnum === 4)console.log("Tir");
else if (mounthnum === 5)console.log("Mordad");
else if (mounthnum === 6)console.log("Shahrivar");
else if (mounthnum === 7)console.log("Mehr");
else if (mounthnum === 8)console.log("Aban");
else if(mounthnum === 9)console.log("Azar");
else if (mounthnum === 10)console.log("Dey");
else if(mounthnum === 11)console.log("Bahman");
else if(mounthnum === 12)console.log("Esfand");

switch (mounthnum) {
     case 1:
     case 2:
     case 3:
        console.log("Bahar");
        break;
     case 4:
     case 5:
     case 6:
        console.log("Tabestan");
        break;
     case 7:
     case 8:
     case 9:
        console.log("Paiez");
        break;
     case 10:
     case 11:
     case 12:
        console.log("Zemestan");
        break;
    default:
        break;
}
