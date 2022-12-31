<template>
    <div class="module-menu" v-for="(item, i) in menus" :key="i">
        <div class="title">{{ item.name }}</div>
        <div class="menus" v-for="menu in item.menus" :key="menu.key">
            <router-link :to="{ name: menu.key }">
                <IconPark :icon="menu.icon" :size="25" />
                {{ menu.name }}
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useMenu } from './useMenu'
import IconPark from '@/components/common/iconPark.vue'
const { menus } = useMenu()
</script>

<style scoped lang="scss">
.module-menu{
    width: 20vw;
    min-width: 170px;
    max-width: 245px;

    .menus{
        width: 100%;
        height: 5vh;
        margin: 2vh 0;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(110, 255, 207);
        border-radius: 13px;
    }

    a{
        color: #000;
        text-decoration: none;
        display: flex;
        justify-content: space-around;
        width: 40%;
    }
}
</style>