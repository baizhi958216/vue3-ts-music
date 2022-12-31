<template>
    <Component :is="icon" :size="size" :fill="fill" />
</template>

<script setup lang="ts">
const { icon, size, fill } = defineProps<{
    icon: any,
    size?: number | string,
    fill?: string | string[]
}>()
</script>

<style scoped>

</style>