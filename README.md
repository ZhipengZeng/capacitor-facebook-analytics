# capacitor-facebook-analytics

this is a capacitor 3 plugin for facebook analytics

## Install

```bash
npm install capacitor-facebook-analytics
npx cap sync
```

## API

<docgen-index>

* [`initAppEvents()`](#initappevents)
* [`logEvent(...)`](#logevent)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initAppEvents()

```typescript
initAppEvents() => Promise<string>
```

**Returns:** <code>Promise&lt;string&gt;</code>

--------------------


### logEvent(...)

```typescript
logEvent(options: { event: string; valueToSum?: number; params?: any; }) => Promise<string>
```

| Param         | Type                                                               |
| ------------- | ------------------------------------------------------------------ |
| **`options`** | <code>{ event: string; valueToSum?: number; params?: any; }</code> |

**Returns:** <code>Promise&lt;string&gt;</code>

--------------------

</docgen-api>
