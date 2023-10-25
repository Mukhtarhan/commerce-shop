<template>
  <header class="header">
    <div class="header-top">
        <div class="header-top-search">
            <img src="search.png" alt="">
        </div>
        <a href="#" class="header-logo">Avion</a>
        <div class="header-top-right">
            <a href="#" class="header-top-right__cart">
                <img src="header-shopping--cart.svg" alt="">
            </a>
            <a href="" class="header-top-right__profile">
                <img src="header-user--avatar.png" alt="">
            </a>
        </div>
    
    </div>
    <div class="header-menu">
        <a
        class="header-menu__link"
        :href="ele.path"
        v-for="ele in menu"
        :key="ele.name">{{ ele.name }}</a>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const menu = [
    {
        name: 'Plan pots',
        path: '/plant'
    },
    {
        name: 'Ceramics',
        path: '/ceramics'
    },
    {
        name: 'Tables',
        path: '/tables'
    },
    {
        name: 'Chairs',
        path: '/chairs'
    },
    {
        name: 'Crockery',
        path: '/crockery'
    },
    {
        name: 'Tableware',
        path: '/tableware'
    },
    {
        name: 'Cutlery',
        path: '/cutlery'
    }
]


</script>

<style lang="scss">
.header{
    height: 132px;
    background: #fff;
    &-top{
        display: flex;
        justify-content: space-between;
        height: 70px;
        align-items: center;
        margin: 0 28px;
        border-bottom: 1px solid rgba(0, 0 , 0, 0.1);
        &-right{
            display: flex;
            align-items: center;
            &__cart{
                margin-right: 16px;
            }
        }
    }
    &-logo {
        color: #22202E;
        font-size: 24px;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
    &-menu {
        height: 62px;
        display: flex;
        justify-content: center;
        align-items: center;
        &__link {
            margin: 0 22px;
            color: #726E8D;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    }
    
}
</style>