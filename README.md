# TDD vegetable garden

My notes and used resources for this assignment.

## Original tests

Based on the original tests, I wrote the code per test in order to pass the test. In the farm.js you can read these 3 functions under the comment //functions based on original tests on line 1. I tried to right these functions as short as possible. I commented out some of the intial functions to keep track of my thought process.

## Updated tests and code for new functionalities

I started to rewrite the original tests one by one in order to calculate costs, revenue and profit per crops and multiple corps. You can find these functions under the comment //Modified initial functions for new functionalities on line 28. Again the functions are as short as possible. 

## Original tests and code modified to include environmental factors

Again I rewrote the original tests to include environmental factors. The biggest challenge was to write the code for the getYieldForCropWithMore (I made a new const in order to keep the original tests). With More refers to more environmental factors that could or couldn't impact the yield.
The functions are under the comment //Modified initial functions to include environmental factors on line 52.

## Updated tests and code for new functionalities to include environmental factors

Again I updated all the tests for the new functionalities to include the environmental factors. The function getCostsPerCorp remained because the environment has no impact on the in this model. So I could re-use the original function. Also the function getYieldForCropWithMore could be re-used to simplify the code.  
The functions are under comment //Modified initial functions for new functionalities including environment on line 95.

## Additional note on rounding

In testing the data I encounted the following in the scenario where sun is low and wind is lots. The outcome I include in the test was 42. Based on the calculation for the crops as follows:

Corn: 3 (yield) * 0,5 (sun) * 0,4 (wind factor) * 10 (#crops) * 7 (salesPrice) = 42 - 50 (cost) = -8
PLUS 
Pumpkin: 3 (yield) * 0,7 (sun) * 2 (#crops) * 10 (salesPrice) = 56 - 6 (cost) = 50
TotalProfit: 42

The test failed with the following outcome:
  ● getTotalProfitWithMore › Calculate total profit with multiple crops and environment

    expect(received).toBe(expected) // Object.is equality

    Expected: 42
    Received: 42.00000000000001

With sun = high, wind = little the outcome of 395 passes. 
With sun = high, wind = medium the outcome of 300.5 passes.  

When I tried Math.round result, the later test does not pass anymore, probably due to roundings in the calculation. 

Therefore I decided to leave the model as is, knowing computers are not always very accurate in rounding, resulting in values as 42.00000000000001



