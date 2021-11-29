const assertEqual = require('../assertEqual');
const head = require('../head');


assertEqual(head([7]), 6);
assertEqual(head([]), undefined);
