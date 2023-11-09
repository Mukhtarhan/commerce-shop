<template>
  <header class="header">
    <div class="header-top">
        <div class="header-top-left">
            <div class="header-top-search">
                <img src="search.png" alt="">
            </div>
            <div class="header-top-mobile-menu">
                <img src="Menu.svg" alt="menu" @click="isOpenedMobileMenu =! isOpenedMobileMenu">
            </div>
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
        <router-link
            class="header-menu__link"
            :to="ele.path"
            v-for="ele in menu"
            :key="ele.name">
            {{ ele.name }}
        </router-link>
    </div>
    <div class="header-menu-mobile" v-if="isOpenedMobileMenu">
        <router-link
            class="header-menu-mobile__link"
            :to="ele.path"
            v-for="ele in menu"
            :key="ele.name">
            {{ ele.name }}
        </router-link>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isOpenedMobileMenu = ref(false)

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
    position: relative;
    @media screen and (max-width: 767px) {
        height: auto;
    }
    &-top{
        display: flex;
        justify-content: space-between;
        height: 70px;
        align-items: center;
        margin: 0 28px;
        border-bottom: 1px solid rgba(0, 0 , 0, 0.1);
        &-left {
            display: flex;
            align-items: center;
            @media screen and (max-width: 767px){
                order: 2;
            } 
        }
        &-mobile-menu {
            margin-left: 16px;
            display: none;
            @media screen and (max-width: 767px) {
                display: block;
            }
        }
        &-search {
            @media screen and (max-width: 767px) {
                
            }
        }
        @media screen and (max-width: 767px) {
            margin: 0;
            border: none;
            height: auto;
            padding: 20px 0;
            display: flex;
            justify-content: space-between;
        }
        &-right{
            display: flex;
            align-items: center;
            @media screen and (max-width: 767px) {
                display: none;
            }
            &__cart{
                margin-right: 16px;
            }
        }
    }
    &-logo {
        color: var(--primary);
        font-size: 24px;
        text-decoration: none;
        @media screen and (max-width: 767px) {
            order: 1;
        }
        &:hover {
            text-decoration: underline;
        }
    }
    &-menu {
        height: 62px;
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 767px) {
            display: none;
        }
        &__link {
            margin: 0 22px;
            color: #726E8D;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
        &-mobile {
            position: absolute;
            background: #fff;
            top: 60px;
            padding: 40px 24px;
            border: 1px solid;
            width: 100%;
            padding: 10px;
            &__link {
                display: block;
                margin-bottom: 20px;
                color: #726E8D;
                text-decoration: none;
                &:last-child {
                    margin-bottom: 0;
                }
                &:hover {
                    text-decoration: underline;
                }
            }
            &-top {
                display: flex;
                justify-content: flex-end;
                margin-bottom: 24px;
            }
        }
    }
    
}
</style>