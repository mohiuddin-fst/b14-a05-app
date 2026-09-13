Project name: b14-a05-app

## About This Project: A05 is small web app, made for practice React and TypeScript. In this app, user can see many technology (React, Vue, Node.js, Docker, etc.) show as card. User can click "Add to Stack" button, and that technology go to "Your Stack" panel on right side of page. User also can remove one technology, or remove all technology, any time they want. That time also toast message will be pop up center of the top side.

## Technology I Use
- React
- TypeScript
- Vite
- Tailwind CSS
- daisyui
- react-toastify (for toast message)

## Feature About This Project

1. Add to Stack — user click button on card, technology add to "Your Stack" panel, and success toast message show.
2. No duplicate — same technology cannot add two time. If user try again, warning toast message show, and button change to "✓ Added to Stack".
3. Remove item — user can remove one technology only, or remove all technology one time (click "Remove All" button).

---

## React Questions (Answer in My Own Word)

### 1. What is JSX, and why is it used in React?

JSX mean JavaScript Ex. It is special syntax, we can write code that look like HTML, but inside JavaScript file. We use JSX because it is easy way to see how UI will look, and React understand this code and change it to real HTML for browser.

### 2. What is the difference between props and state?

Props is data we send from parent component to child component. Child only can read props, cannot change it. State is data that live inside component itself, and component can change state any time, using `useState`. So — props come from outside, state stay inside.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` hook help component "remember" value between render, and when value change, component render again automatic. In my project, I use `useState` for `stack` (list of technology user already pick), inside `Technologies.tsx`. I also use it in `App.tsx`, to keep `technologiesPromise` value only one time.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` hook let us run some code after component show on screen — this called "side effect", like fetching data, or talking to outside API. Normal way, we use `useEffect` to call `fetch()` inside it, then save result with `useState`.

In my project I actually use different, newer way — I use `useState(() => fetch...)` together with `Suspense` and `use()` hook, instead of `useEffect`. Both way do same job (load JSON data from file), but this new way little bit shorter to write.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

`key` prop help React know "which item is which" when list change — like when we add or remove item. If `key` missing, or same for every item, React get confuse, and maybe show wrong data on screen, or app become slow. In my project, I use `technology.id` as key, because every technology have own unique id.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering mean we show different UI, depend on some condition — same idea like if-else, but write inside JSX. Example in my project, file `YourStack.tsx`:

```tsx
{stack.length === 0
  ? "No technologies selected yet."
  : `${stack.length} Technology Selected`}
```

If `stack` array is empty, text "No technologies selected yet." show. If not empty, it show how many technology user pick.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Parent send data to child using **props** — same idea like function argument. Example, `Technologies.tsx` send `stack` and `setStack` down to `AvailableTechnologies`, then down again to `TechnologyCard`.

For child send data back to parent — child cannot change parent state direct. So parent give a **function** to child as prop (example: `setStack`), and child just call that function when it need. This way, child "ask" parent to change data, parent stay in control.
