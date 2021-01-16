<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped>
button {
    background-color: white;
    margin: 10px;
    padding: 10px;
}

button.cta {
    background-color: teal;
    color: white;
}
</style>