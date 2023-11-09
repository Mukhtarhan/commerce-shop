<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-top">
        <div class="footer-menu">
          <div class="footer-menu-column">
            <span class="footer-menu-title">Menu</span>
            <router-link to="" class="footer-menu-link">New arrivals</router-link>
            <router-link to="" class="footer-menu-link">Best sellers</router-link>
            <router-link to="" class="footer-menu-link">Recently viewed</router-link>
            <router-link to="" class="footer-menu-link">Popular this week</router-link>
            <router-link to="" class="footer-menu-link">All products</router-link>
          </div>
          <div class="footer-menu-column">
                <span class="footer-menu-title">Categories</span>
                <router-link to="" class="footer-menu-link">Crockery</router-link>
                <router-link to="" class="footer-menu-link">Furniture</router-link>
                <router-link to="" class="footer-menu-link">Homeware</router-link>
                <router-link to="" class="footer-menu-link">Plant pots</router-link>
                <router-link to="" class="footer-menu-link">Chairs</router-link>
                <router-link to="" class="footer-menu-link">Crockery</router-link>
            </div>
            <div class="footer-menu-column">
                <span class="footer-menu-title">Our company</span>
                <router-link to="" class="footer-menu-link">About us</router-link>
                <router-link to="" class="footer-menu-link">Vacancies</router-link>
                <router-link to="" class="footer-menu-link">Contact us</router-link>
                <router-link to="" class="footer-menu-link">Privacy</router-link>
                <router-link to="" class="footer-menu-link">Returns policy</router-link>
            </div>
        </div>
        <div class="footer-subscribe">
            <SubscribeForm color-button="white" bg-input="rgba(255, 255, 255, 0.15)" :color-text="'#fff'"/>
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-bottom-copyright">
            Copyright 2022 Avion LTD
        </span>
        <div class="footer-bottom-socials">
            <a href="" class="footer-bottom-socials-link">
                <img src="linkedin.svg" alt="" > 
            </a>
            <a href="" class="footer-bottom-socials-link">
                <img src="facebook.svg" alt="">
            </a>
            <a href="" class="footer-bottom-socials-link">
                <img src="instagram.svg" alt="">
            </a>
            <a href="" class="footer-bottom-socials-link">
                <img src="skype.svg" alt="">
            </a>
            <a href="" class="footer-bottom-socials-link">
                <img src="twitter.svg" alt="">
            </a>
            <a href="" class="footer-bottom-socials-link">
                <img src="pinterest.svg" alt="">
            </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import SubscribeForm from '../SubscribeForm.vue';

</script>

<style lang="scss" scoped>
.footer {
    background: var(--primary);
    color: #fff;
    @media screen and (max-width: 767px) {
        margin: 0 -24px;
    }
    &-content {
        padding: 58px 82px 25px 82px;
        @media screen and (max-width: 1024px) {
            padding: 58px 30px 30px 30px;
        }
        @media screen and (max-width: 767px) {
            padding: 40px 25px;
        }
    }
    &-top {
        display: grid;
        grid-template-columns: 540px 1fr;
        column-gap: 110px;
        border-bottom: 1px solid #4E4D93;
        padding-bottom: 48px;
        @media screen and (max-width: 1150px) {
            column-gap: 10px;
            grid-template-columns: 450px 1fr;
        }
        @media screen and (max-width: 1024px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 767px)  {
            grid-template-columns: 1fr;
            padding-bottom: 24px;
        }
    }
    &-menu {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        @media screen and (max-width: 1024px) {
            grid-template-columns: repeat(2, 1fr);
        }
        &-title {
            display: block;
            margin-bottom: 12px;
        }
        &-link {
            display: block;
            color: #fff;
            font-size: 14px;
            margin-bottom: 12px;
            &:last-child {
                margin-bottom: 0;
            }
            &:hover {
                text-decoration: underline;
            }
        }
        &-column {
            @media screen and (max-width: 767px) {
                margin-bottom: 40px;
            }
        }
    }
    &-bottom {
        padding-top: 22px;
        display: flex;
        justify-content: space-between;
        @media screen and (max-width: 767px) {
            display: block;
            text-align: center;
        }
        &-copyright {
            font-size: 14px;
            @media screen and (max-width: 767px) {
                display: block;
                margin-bottom: 20px;
            }
        }
        &-socials {
            display: flex;
            align-items: center;
            &-link {
                margin: 0 12px;
                &:hover {
                    opacity: 0.8;
                }
            }
        }
    }
}
</style>
