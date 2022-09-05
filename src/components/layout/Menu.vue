
<template>
    <div class="hidden sm:block menu">
            <div class="w-full flex flex-col items-center menu-list">
                <!-- <Button label="Primary" class="p-button-text" > -->
                    <Button class="w-9 h-9 rounded-[6px] bg-white flex-center cursor-pointer mt-9 p-button-text item" v-for="item in menuList" :key="item.id" v-ripple>
                        <img :src="item.icon" alt="">
                    </Button>
                <!-- </Button> -->
            </div>
        </div>
</template>

<script lang="ts" setup>
    import menuIcon1 from '@/assets/images/layout/menu-icon-1.svg'
    import menuIcon2 from '@/assets/images/layout/menu-icon-2.svg'
    import Button from 'primevue/button';
    

    import { ref } from 'vue'

    // CREATE DATA
    const menuList = ref([
        {id:0, title: 'Name', icon: menuIcon1, url:'',},
        {id:1, title: 'Name', icon: menuIcon2, url:'',},
    ])
</script>

<style lang="scss">
    .menu{
        width: 60px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
        .menu-list{
            .item{
                filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.15));
                background-color: #fff !important;
            }
        }
    }

</style>