 const drawTree = (numHeight) => {
    for(let height = 1; height <= numHeight; height++) {
        let tree = "";
        for(let whiteSpace = 1; whiteSpace <= numHeight-height; whiteSpace++){
            tree = tree + " ";
        }
        for(let hashtag=1; hashtag<=height; hashtag++){
            tree = tree + "#";
        }
    console.log(tree);
    }
}
let numHeight = 7;
const message = "Sorry, I don't print triangles less than three levels";
numHeight < 3 ? console.log(message) : drawTree(numHeight);