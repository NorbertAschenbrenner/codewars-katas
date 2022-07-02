export const likes = (a : string[]) : string => {
    // TODO
    switch (a.length) {
        case 0:
          return "no one likes this";
          break;
        case 1:
          return a[0] + " likes this";
          break;
        case 2:
          return a[0] + " and " + a[1] + " like this";
          break;
        case 3:
          return a[0] + ", " + a[1] + " and " + a[2] + " like this";
          break;
        default:
          return a[0] + ", " + a[1] + " and " + (a.length -2) + " others like this"
    }
  }
  