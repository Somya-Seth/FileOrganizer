function help(){
    console.log(`
    These are myCLI commands in various situations:
    1. node main.js tree <path>
    2. node main.js organize<path>
    3. node main.js help
    `);
}

module.exports={
    //key:value
    help:help
}