
<template>
    <div class="h-full">
        <div class="hidden sm:block menu">
                <div class="w-full flex flex-col items-center menu-list">
                    <!-- <Button label="Primary" class="p-button-text" > -->
                        <Button 
                            class="w-9 h-9 rounded-[6px] bg-white flex-center cursor-pointer mt-9 p-button-text item" 
                            :class="{'active' : routeName == item.url}"
                            v-for="item in menuList" 
                            :key="item.id" 
                            v-ripple
                            @click="changePage(item.url)"
                            >
                            <img :src="item.icon" alt="" v-if="routeName != item.url">
                            <img :src="item.iconActive" alt="" v-else>
                        </Button>
                    <!-- </Button> -->
                </div>
            </div>
    </div>
</template>

<script lang="ts" setup>
    import menuIcon1 from '@/assets/images/layout/menu-icon-1.svg'
    import menuIcon2 from '@/assets/images/layout/menu-icon-2.svg'
    import menuIconWhite1 from '@/assets/images/layout/menu-icon-white-1.svg'
    import menuIconWhite2 from '@/assets/images/layout/menu-icon-white-2.svg'
    import Button from 'primevue/button';

    import { useRoute } from 'vue-router';
    import { useRouter } from 'vue-router';
    import { ref, computed } from 'vue'

    const route = useRoute()
    const router = useRouter()
    // console.log(route.);
    

    // CREATE DATA
    const menuList = ref([
        {id:0, title: 'Name', icon: menuIcon1, iconActive: menuIconWhite1, url:'home',},
        {id:1, title: 'Name', icon: menuIcon2, iconActive: menuIconWhite2, url:'review',},
    ]);

    const routeName = computed(() => route.name)

    // CREATE FUNCTION

    const changePage = (url: string) => {
        if(route.name != url){
            router.push({name: url})
        }
    }
</script>

<style lang="scss">
    .menu{
        width: 60px;
        height: 100%;
        // height: calc(100vh - 66px);
        position: fixed;
        top: 66px;
        left: 0;
        background-color: #fff;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
        .menu-list{
            .item{
                filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.15));
                background-color: #fff !important;
                transition: .2s;
                &.active{
                    background-color: var(--primary) !important;
                }
            }
        }
    }

</style>