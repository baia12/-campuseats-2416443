## Week 1

1. What is the difference between building a UI imperatively (plain DOM code) and declaratively
   (React)?
   Imperative means we tell the computer **step by step what to do**.React is declarative, we tell **what we want the UI to look like**, and React handle the steps.

2. Why must a component name start with a capital letter?
   Because React use **capital letter to know it is a component**. Small letter usually treated as normal HTML tag.
3. What does a fragment <>...</> do, and why not just use a <div>?
   Fragment let us group many elements **without adding extra HTML element**. We use it instead of `<div>` when we don't need another container.

4. Name one benefit of splitting the UI into small components.
   It make the code **easier to manage and reussee**.
