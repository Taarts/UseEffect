useState: adds state and means of updating it to a function component

useEffect for side effects

- something happens & I want the side effect to be executed

added counter to App.tsx with a button to interact with the user

"const listOfDataToWatchForChanges = [count]
useEffect(theCountChanged, listOfDataToWatchForChanges)"

above simplified to "useEffect(theCountChanged, [count])"

added additional buttons that call the function [count]
useEffect allows to define one function, so no matter WHICH button is calling the [count] function, useEffect is acting on that call.

changes:
from -
useEffect(theCountChanged, [count])

function handleClickButton() {
setCount(count + 1)
}
function theCountChanged() {
console.log(`the count is now ${count}`)
}
to - an inline useEffect function

useEffect be called at least ONCE. Runs when the component mounts.
viewed in the console -

to not view the first call, but it still runs
function () {
if (count !== 0) {
console.log(`the count is now ${count}`)
}
}
