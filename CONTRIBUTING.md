# Best Practices

I strongly recommend to look into the following list of best practices. The more attention you are willing to pay to the following rules, the more resources we are able to save, so please try to get a good grasp of them.

## Use relevant libraries

Before jumping into wirting code straight away, spend a minute or two browsing the existing code and check if there is nothing new you should know.

For example, in this project we are using the **MUI components library**, so try to use it **whenever you can**. If using it turns out impossible, use **styled components library** instead.
But remember, almost **never create "bare" components**, so try not to leave any `<div>` that are not styled components.

## Use typescript

In this project we are using typescript, so let's not waste it's potential.
Generally, we would want to **add types everywhere we can**. When needed, feel free to create interfaces, especially when it comes to components **props**.

For example:

```tsx
...
interface Props {
    firstProp: firstPropType
    secondProp: secondPropType
    ...
}
```

There is one exception when you are not supposed to insert a type. Try not to use `any` type, unless you explicitly expect `any` type.

## Don't create empty components or pages

Everytime you create a page or a component think what is the purpose of it in regard to your task/pull request. If there is no purpose, don't bother creating it.

This is the example of what **we should avoid**:

```tsx
// bad
export function SomeComponent(): JSX.Element {
    return <div>Some Compnent</div>
}
```

## Don't use absolute paths when importing

When importing watch out how you specify the path of the import.

```tsx
// good
import { SomeComponent } from "./SomeComponent"

// bad
import { SomeComponent } from "components/SomeComponent"
```

## Default exports only for pages

In this project we would rather **not use default imports**, but there is **one exception** and these are **pages**.

```tsx
// good
export default function SomePage() {
    ...
}

export function SomeComponent() {
    ...
}
```

## Don't use inline styles

All styling in the project is going to be done using the MUI components library or styled components, so we should **never use inline styles**.

```tsx
// good
const StyledComponent = styled.div`
    margin: 20px
`

export function SomeComponent() {
    return (
        <StyledComponent>
            ...
        </StyledComponent>
    )
}

// bad
export function SomeComponent() {
    return (
        <div styles={{ margin: 20 }}>
            ...
        </div>
    )
}
```

## Use rem instead of pixels

In order to make our pages look consistent for every user, we're going to be using rem units instead of pixels.

```tsx
// good
const SomeComponent = styled.div`
    margin: 5rem
`

// bad
const SomeComponent = styled.div`
    margin: 20px
`
```

## Extract mappings

Everytime we're mapping through the array of data, we would want to extract the content that the map returns to a separate component.

```tsx
// good
import { ArrayItem } from './components'
...
export function SomeComponent () {
return (
    ...
    <>
        {
            array.map((arrayItem, idx) => (
                <ArrayItem arrayItem={arrayItem} key={idx}/>
            ))
        }
    </>
)}

// ArrayItem.tsx
export function ArrayItem () {
    return (
        <div>
            <div> first field: {arrayItem.firstField}<div/>
            <div> second field: {arrayItem.secondField}<div/>
        <div/>
    )
}

// bad
export function SomeComponent () {
    return (
        ...
        <>
            {
                array.map((arrayItem, idx) => (
                    <div>
                        <div> first field: {arrayItem.firstField}<div/>
                        <div> second field: {arrayItem.secondField}<div/>
                    <div/>
                ))
            }
        </>
    )
}
```

## Make directiories for groups of components

Whenever you feel like the comoponents you are working on share some common traits/uses, create a directory and store them there. It's not only going to help navigating through the directories, but also keeps the code well structured.
